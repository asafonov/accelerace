class EnemyListView {

  constructor (speed) {
    this.total = 0
    this.enemiesOnScreen = []
    this.speed = speed
    this.doubleEnemy = false
    this.createEnemy()
    this.addEventListeners()
  }

  addEventListeners() {
    asafonov.messageBus.subscribe(asafonov.events.ENEMY_DESTROYED, this, 'onEnemyDestroyed')
  }

  removeEventListeners() {
    asafonov.messageBus.unsubscribe(asafonov.events.ENEMY_DESTROYED, this, 'onEnemyDestroyed')
  }

  createEnemy() {
    if (this.enemiesOnScreen.length === 2) return

    this.total++
    const id = this.enemiesOnScreen.length === 0 ? Math.round(Math.random()) + 1 : 3 - this.enemiesOnScreen[0].id
    const view = new EnemyView(this.speed, id, Math.min(this.total / 50, 0.6))
    this.enemiesOnScreen.push(view)
  }

  onEnemyDestroyed (data) {
    let enemy = this.enemiesOnScreen.shift()
    enemy = null
    this.createEnemy()
  }

  setSpeed (speed) {
    this.speed = speed
  }

  setDoubleEnemy (doubleEnemy) {
    this.doubleEnemy = doubleEnemy
    asafonov.messageBus[this.doubleEnemy ? 'subscribe' : 'unsubscribe'](asafonov.events.ENEMY_HALFWAY, this, 'createEnemy')
  }

  destroy() {
    this.setDoubleEnemy(false)
    this.doubleEnemy = null
    this.removeEventListeners()

    for (let i = 0; i < this.enemiesOnScreen.length; ++i) {
      this.enemiesOnScreen[i].destroy()
      this.enemiesOnScreen[i] = null
    }

    this.enemiesOnScreen = null
    this.speed = null
  }

}
