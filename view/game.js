class GameView {

  constructor (delay) {
    this.speed = window.innerHeight / asafonov.timer.getFPS() / 3 // 3 secs for screen ride
    this.score = 0
    this.scoreContainer = document.querySelector('#score')
    this.roadView = new RoadView(asafonov.timer.getFPS(), 2, {roadLines: true, lights: true, trees: true, houses: true})
    this.carView = new CarView(asafonov.timer.getFPS() / 2)
    this.playButton = document.querySelector('.game_play')
    this.pauseButton = document.querySelector('.game_pause')
    this.gyroButton = document.querySelector('.game_gyroscope')
    this.playButton.style.display = 'none'
    this.pauseButton.style.display = 'none'
    this.onPlayClickProxy = this.onPlayClick.bind(this)
    this.onPauseClickProxy = this.onPauseClick.bind(this)
    this.onGyroClickProxy = this.onGyroClick.bind(this)
    this.onTouchProxy = this.onTouch.bind(this)
    this.addEventListeners()
    setTimeout(() => this.initEnemy(), delay)
    this.initGyroButton()
    setTimeout(() => {
      document.querySelector('.countdown').style.display = 'none'
      this.pauseButton.style.display = 'flex'
    }, delay + 1500)
  }

  initEnemy() {
    this.enemyListView = new EnemyListView(this.speed)
  }

  initGyroButton() {
    this.gyroButton.style.opacity = asafonov.settings.useGyro ? 1 : 0.4
  }

  onPlayClick (event) {
    event.stopPropagation()
    this.pauseButton.style.display = 'flex'
    this.playButton.style.display = 'none'
    asafonov.timer.play()
  }

  onPauseClick (event) {
    event.stopPropagation()
    this.pauseButton.style.display = 'none'
    this.playButton.style.display = 'flex'
    asafonov.timer.pause()
  }

  onGyroClick (event) {
    asafonov.settings.useGyro = ! asafonov.settings.useGyro
    this.initGyroButton()
  }

  onTouch(event) {
    if (event.clientX > window.innerWidth / 2) {
      asafonov.messageBus.send(asafonov.events.CAR_MOVE_RIGHT)
    } else {
      asafonov.messageBus.send(asafonov.events.CAR_MOVE_LEFT)
    }
  }

  addEventListeners() {
    this.playButton.addEventListener('click', this.onPlayClickProxy)
    this.pauseButton.addEventListener('click', this.onPauseClickProxy)
    this.gyroButton.addEventListener('click', this.onGyroClickProxy)
    document.body.addEventListener('click', this.onTouchProxy)
    asafonov.messageBus.subscribe(asafonov.events.ENEMY_DESTROYED, this, 'onEnemyDestroyed')
    asafonov.messageBus.subscribe(asafonov.events.GAME_OVER, this, 'onGameOver')
  }

  removeEventListeners() {
    this.playButton.removeEventListener('click', this.onPlayClickProxy)
    this.pauseButton.removeEventListener('click', this.onPauseClickProxy)
    this.gyroButton.removeEventListener('click', this.onGyroClickProxy)
    document.body.removeEventListener('click', this.onTouchProxy)
    asafonov.messageBus.unsubscribe(asafonov.events.ENEMY_DESTROYED, this, 'onEnemyDestroyed')
    asafonov.messageBus.unsubscribe(asafonov.events.GAME_OVER, this, 'onGameOver')
  }

  onEnemyDestroyed() {
    this.score++
    this.scoreContainer.innerHTML = this.score

    if (this.score % 5 === 0) {
      this.speed *= 1.1
      this.enemyListView.setSpeed(this.speed)
    }

    if (this.score === 10) this.enemyListView.setDoubleEnemy(true)
  }

  onGameOver() {
    this.roadView.stop()
    this.carView.stop()
    this.destroy()

    if (confirm('Game over. Start again?')) {
      location.reload()
    }
  }

  destroy() {
    this.removeEventListeners()
    this.enemyListView.destroy()
    this.enemyListView = null
    this.roadView.destroy()
    this.roadView = null
    this.carView.destroy()
    this.carView = null
    this.speed = null
    this.score = null
    this.scoreContainer = null
  }

}
