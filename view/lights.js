class LightsView {

  constructor (speed) {
    this.updateSpeed(speed)
    this.elements = document.querySelectorAll('.road_lines')
    this.offset = -1 * window.screen.height
    this.elements[0].style.height = `${window.screen.height}px`
    this.elements[1].style.height = `${window.screen.height}px`
    this.updatePosition()
    this.draw()
  }

  getLight() {
    const div = document.createElement('div')
    div.classList.add('svg_pic')
    div.classList.add('light')
    div.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M7.5,0A7.5,7.5,0,1,1,0,7.5,7.5,7.5,0,0,1,7.5,0Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15 15"><path d="M7.5,0A7.5,7.5,0,1,1,0,7.5,7.5,7.5,0,0,1,7.5,0Z"/></svg>'
    return div
  }

  updatePosition() {
    this.elements[0].style.top = `${this.offset}px`
    this.elements[1].style.top = `${this.offset + window.screen.height}px`
  }

  updateSpeed (speed) {
    this.step = window.screen.height / speed
  }

  draw() {
    this.offset += this.step
    this.offset >= 0 && (this.offset = -1 * window.screen.height)
    this.updatePosition()
    this.timeout = setTimeout(() => this.draw(), 40)
  }

  destroy() {
    this.speed = null
    this.elements = null
    this.offset = null
    this.timeout && clearTimeout(this.timeout)
  }
}
