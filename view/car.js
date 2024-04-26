class CarView {

  constructor (speed) {
    this.isMoving = false
    this.element = document.querySelector('#main_car')
    const rect = this.element.querySelector('svg path').getBoundingClientRect()
    this.roadRect = document.querySelector('.road_sides').getBoundingClientRect()
    this.carRect = {
      height: rect.height + rect.top,
      width: rect.width + rect.left,
      left: this.roadRect.left + this.roadRect.width / 2 - rect.width / 2,
      top: window.innerHeight - rect.height * 2 - rect.top
    }
    this.speed = this.roadRect.width / (speed || asafonov.timer.getFPS())
    asafonov.player = this.carRect
    this.display()
    this.addEventListeners()
  }

  addEventListeners() {
    asafonov.messageBus.subscribe(asafonov.events.CAR_MOVE_RIGHT, this, 'onMoveRight')
    asafonov.messageBus.subscribe(asafonov.events.CAR_MOVE_LEFT, this, 'onMoveLeft')
    asafonov.messageBus.subscribe(asafonov.events.CAR_MOVE_TO, this, 'onMoveTo')
  }

  removeEventListeners() {
    asafonov.messageBus.unsubscribe(asafonov.events.CAR_MOVE_RIGHT, this, 'onMoveRight')
    asafonov.messageBus.unsubscribe(asafonov.events.CAR_MOVE_LEFT, this, 'onMoveLeft')
    asafonov.messageBus.unsubscribe(asafonov.events.CAR_MOVE_TO, this, 'onMoveTo')
  }

  display() {
    this.element.style.left = `${this.carRect.left}px`
    this.element.style.top = `${this.carRect.top}px`
  }

  onMoveRight() {
    if (! this.isMoving) this.moveRight()
  }

  onMoveLeft() {
    if (! this.isMoving) this.moveLeft()
  }

  onMoveTo (to) {
    this.stop()
    to = Math.min(to, 1)
    to = Math.max(to, -1)
    const middle = this.roadRect.left + this.roadRect.width / 2 - this.carRect.width / 2
    to = middle + this.roadRect.width / 2 * to
    this.carRect.left = to
    this.correctRoadBoundaries()
    this.display()
  }

  correctRoadBoundaries() {
    let corrected = false

    if (this.carRect.left <= this.roadRect.left) {
      this.carRect.left = this.roadRect.left
      corrected = true
    }

    if (this.carRect.left >= this.roadRect.right - this.carRect.width) {
      this.carRect.left = this.roadRect.right - this.carRect.width
      corrected = true
    }

    return corrected
  }

  move(top, left) {
    this.isMoving = true
    let movedHorizontally = left !== undefined && left !== null && left !== 0
    let movedVertically = top !== undefined && top !== null && top !== 0

    if (movedHorizontally) {
      const before = this.carRect.left
      this.carRect.left = this.carRect.left + left
      const middle = this.roadRect.left + this.roadRect.width / 2 - this.carRect.width / 2

      if ((before < middle && this.carRect.left >= middle) || (before > middle && this.carRect.left <=middle)) {
        this.carRect.left = middle
        movedHorizontally = false
      }

      movedHorizontally = movedHorizontally && ! this.correctRoadBoundaries()
    }

    this.display()
    this.isMoving = movedHorizontally || movedVertically
  }

  moveLeft() {
    this.move(0, -this.speed)
    this.isMoving && (this.timeout = asafonov.timer.add(() => this.moveLeft()))
  }

  moveRight() {
    this.move(0, this.speed)
    this.isMoving && (this.timeout = asafonov.timer.add(() => this.moveRight()))
  }

  stop() {
    this.isMoving = false
    this.timeout && asafonov.timer.remove(this.timeout)
    this.timeout = null
  }

  destroy() {
    this.removeEventListeners()
    this.stop()
    this.timeout = null
    this.element = null
    this.carSize = null
    this.roadSize = null
    this.isMoving = null
  }
}
