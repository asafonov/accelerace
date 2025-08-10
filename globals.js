window.asafonov = {}
window.asafonov.version = '0.5'
window.asafonov.messageBus = new MessageBus()
window.asafonov.timer = new Timer(40)
window.asafonov.events = {
  GAME_OVER: 'GAME_OVER',
  ENEMY_DESTROYED: 'ENEMY_DESTROYED',
  ENEMY_HALFWAY: 'ENEMY_HALFWAY',
  CAR_MOVE_RIGHT: 'CAR_MOVE_RIGHT',
  CAR_MOVE_LEFT: 'CAR_MOVE_LEFT'
}
window.asafonov.settings = {
  useGyro: false
}
window.asafonov.player = null
window.onerror = (msg, url, line) => {
  if (!! window.asafonov.debug) alert(`${msg} on line ${line}`)
}
