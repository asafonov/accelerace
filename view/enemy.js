class EnemyView {

  constructor (speed, id) {
    this.speed = speed || 1
    this.id = id
    this.element = document.querySelector(`#car_${id}`)
    this.element.style.display = 'flex'
    const rect = this.element.querySelector('img').getBoundingClientRect()
    this.roadRect = document.querySelector('.road_sides').getBoundingClientRect()
    const left = this.roadRect.left + Math.random() * (this.roadRect.right - rect.width - this.roadRect.left)
    this.carRect = {
      height: rect.height,
      width: rect.width,
      left: left,
      top: -rect.height
    }
    this.display()
    const isHorizontalMove = Math.random() > 0.5
    this.horizontalMove = isHorizontalMove ? (Math.random() > 0.5 ? -1 : 1) * this.roadRect.width / 12 : 0
    this.moveVertical()
  }

  display() {
    this.element.style.left = `${this.carRect.left}px`
    this.element.style.top = `${this.carRect.top}px`
  }

  move(top, left) {
    let movedHorizontally = left !== undefined && left !== null && left !== 0
    let movedVertically = top !== undefined && top !== null && top !== 0

    if (movedVertically) {
      this.carRect.top += top

      if (this.carRect.top >= window.innerHeight) {
        movedVertically = false
      }
    }

    if (movedHorizontally) {
      this.carRect.left += left

      if (this.carRect.left >= this.roadRect.right - this.carRect.width) {
        this.carRect.left = this.roadRect.right - this.carRect.width
      }

      if (this.carRect.left <= this.roadRect.left) {
        this.carRect.left = this.roadRect.left
      }
    }

    this.display()
    return movedVertically
  }

  moveVertical() {
    const top = this.carRect.top
    const moved = this.move(this.speed, top > window.innerHeight / 3 ? this.horizontalMove : 0)
    const isGameOver = this.isGameOver()

    if (isGameOver) {
      asafonov.messageBus.send(asafonov.events.GAME_OVER)
      return
    }

    if (moved) {
      this.timeout = asafonov.timer.add(() => this.moveVertical())

      if (top < window.innerHeight / 2 && this.carRect.top >= window.innerHeight / 2) {
        asafonov.messageBus.send(asafonov.events.ENEMY_HALFWAY, {id: this.id})
      }
    } else {
      asafonov.messageBus.send(asafonov.events.ENEMY_DESTROYED, {id: this.id})
      this.destroy()
    }
  }

  stop() {
    this.timeout && asafonov.timer.remove(this.timeout)
    this.timeout = null
  }

  isGameOver() {
    const isVerticalCollision = (this.carRect.top >= asafonov.player.top && this.carRect.top <= asafonov.player.top + asafonov.player.height) || (this.carRect.top + this.carRect.height >= asafonov.player.top && this.carRect.top + this.carRect.height <= asafonov.player.top + asafonov.player.height)
    const isHorizontalCollision = (this.carRect.left >= asafonov.player.left && this.carRect.left <= asafonov.player.left + asafonov.player.width) || (this.carRect.left + this.carRect.width >= asafonov.player.left && this.carRect.left + this.carRect.width <= asafonov.player.left + asafonov.player.width)
    return isVerticalCollision && isHorizontalCollision
  }

  destroy() {
    this.stop()
    this.timeout = null
    this.element = null
    this.carSize = null
    this.roadSize = null
  }
}
