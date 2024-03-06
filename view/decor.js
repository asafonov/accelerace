class DecorView {

  constructor (speed) {
    this.parallaxRatio = 2 / 3
    this.updateSpeed(speed)
    this.initTrees()
    this.initHouses()
    this.draw()
  }

  initTrees() {
    this.treeLineHeight = 0
    this.treeLine = document.querySelectorAll('.tree_line')
    this.treeLine[0].style.height = `${window.screen.height}px`
    this.treeLine[1].style.height = `${window.screen.height}px`
    this.createTreeLines()
    this.treeOffset = -this.treeLineHeight
  }

  initHouses() {
    this.houseLeftLineHeight = 0
    this.houseRightLineHeight = 0
    this.houseLine = document.querySelectorAll('.house_line')
    this.houseLine[0].style.height = `${window.screen.height}px`
    this.houseLine[1].style.height = `${window.screen.height}px`
    this.createHouseLines()
    this.houseLeftOffset = -this.houseLeftLineHeight
    this.houseRightOffset = -this.houseRightLineHeight
    this.updatePosition()
  }

  createTreeLines() {
    for (let i = 0; i < this.treeLine.length; ++i) {
      for (let j = 0; j < 6; ++j) {
        const treeLine = this.getTreeLine()
        this.treeLine[i].appendChild(treeLine)

        if (i === 0 && j === 0) {
          const rect = treeLine.getBoundingClientRect()
          const height = rect.height + rect.top
          this.treeLineHeight = (parseInt(height / this.step) + 1) * this.step
        }
      }
    }
  }

  createHouseLines() {
    for (let j = 0; j < 4; ++j) {
      const leftLine = this.getLeftHouseLine()
      const rightLine = this.getRightHouseLine()
      this.houseLine[0].appendChild(leftLine)
      this.houseLine[1].appendChild(rightLine)

      if (j === 0) {
        const lrect = leftLine.getBoundingClientRect()
        const rrect = rightLine.getBoundingClientRect()
        const leftLineHeight = lrect.height + lrect.top
        const rightLineHeight = rrect.height + rrect.top
        const step = this.step * this.parallaxRatio
        this.houseLeftLineHeight = (parseInt(leftLineHeight / step) + 1) * step
        this.houseRightLineHeight = (parseInt(rightLineHeight / step) + 1) * step
      }
    }
  }

  getLeftHouseLine() {
    const div = document.createElement('div')
    div.className = 'house_line_element'
    div.innerHTML = this.getHouse() + this.getPalmTree() + this.getSmallHouse()
    return div
  }

  getTreeLine() {
    const div = document.createElement('div')
    div.className = 'tree_line_element'
    div.innerHTML = this.getTree() + this.getTree()
    return div
  }

  getRightHouseLine() {
    const div = document.createElement('div')
    div.className = 'house_line_element'
    div.classList.add('type_2')
    div.innerHTML = this.getSmallHouse() + this.getSmallHouse() + this.getSmallHouse() + this.getSmallHouse() + this.getPalmTree() + this.getPalmTree() + this.getPalmTree()
    return div
  }

  getHouse() {
    return '<div class="svg_pic decor house"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 102"><path d="M54.5 101.5H.5l27-27v-47 47l27 27V.58ZM.5.5v100.92Zm0 0h54l-27 27Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 102"><path d="M54.5 101.5H.5l27-27v-47 47l27 27V.58ZM.5.5v100.92Zm0 0h54l-27 27Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 102"><path d="M54.5 101.5H.5l27-27v-47 47l27 27V.58ZM.5.5v100.92Zm0 0h54l-27 27Z"/></svg></div>'
  }

  getSmallHouse() {
    return '<div class="svg_pic decor small_house"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55"><path d="M.5 54.5V.5l14.44 27h25.13-25.13L.5 54.5h53.95Zm54-54H.55Zm0 0v54l-14.44-27Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55"><path d="M.5 54.5V.5l14.44 27h25.13-25.13L.5 54.5h53.95Zm54-54H.55Zm0 0v54l-14.44-27Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 55 55"><path d="M.5 54.5V.5l14.44 27h25.13-25.13L.5 54.5h53.95Zm54-54H.55Zm0 0v54l-14.44-27Z"/></svg></div>'
  }

  getPalmTree() {
    return '<div class="svg_pic decor palm_tree"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 55.822"><path d="M28.549.5C27.724.383 24.22 8 24.464 9.131s3.382 3.066 3.382 3.066l-4.057.7v6.358l-5.231-4.333-2.146 4.333-3.79-3.155s1.953-2.945.532-4.245-5.815-3.068-6.216-.93.591 5.2 4.612 9.483 10.852 6.618 11.471 7.641-5.194-2.941-9-3.551a9.253 9.253 0 0 0-6.172 1.079c.069-.05-.032-1.093-.043.029s.375 4.364 0 4.457.326-3.981-1.5-4.086-5.807 1.94-5.807 3.668 5.807 3.246 5.807 3.246a43.353 43.353 0 0 0 6.846 1.052c2.287 0 2.3-1.052 2.3-1.052l-5.6 5.735s-4.185 5.039-3.877 6.719 4.152.742 5.123 0-1.24-2.967-1.24-2.967l3.729-2.223v4.254s11.278-9.276 12.2-9.562-8.52 8.416-8.52 8.416-1.48 2.419-.857 3.336 3.35.331 3.35.331l-4.306 1.806s-.224 4.688.956 5.347 3.762-2.71 3.762-2.71-.793-2.342-.413-2.637 1.934 1.457 1.934 1.457 2.659-1.645 2.768-2.76-2.518-1.275-2.333-1.7 1.753 1.547 3.073 0 2.206-6.189 2.206-6.189v3.719l2.749 4.169 4.053-.833-2.467 3.593 5.187 5.131 1.442-6.587-1.054-6.357-5.029-6.315 9.781 8.346 1.542-2.378v3.313l5.25 1.254-2.873-7.972h-5.221l3.8-2.564-7.243-6.417 6.831 5.2 2.939-.416v-3.075l2.663 2.594 5.748-1.052-7.618-6.473-2.786 2.419.333-3.231-3.937-1.114-2.117 1.108 4.233-4.136-1.541-1.585 2.079-3.318 2.939 1.381s4.59-6.1 2.663-7.022-7.964.961-10.371 3.332 1.355 5.69.743 6.152-3.191-4.3-3.191-4.3l-3.11 2.545-5.305 10.183s5.892-8.542 4.578-15.942S29.374.617 28.549.5Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 55.822"><path d="M28.549.5C27.724.383 24.22 8 24.464 9.131s3.382 3.066 3.382 3.066l-4.057.7v6.358l-5.231-4.333-2.146 4.333-3.79-3.155s1.953-2.945.532-4.245-5.815-3.068-6.216-.93.591 5.2 4.612 9.483 10.852 6.618 11.471 7.641-5.194-2.941-9-3.551a9.253 9.253 0 0 0-6.172 1.079c.069-.05-.032-1.093-.043.029s.375 4.364 0 4.457.326-3.981-1.5-4.086-5.807 1.94-5.807 3.668 5.807 3.246 5.807 3.246a43.353 43.353 0 0 0 6.846 1.052c2.287 0 2.3-1.052 2.3-1.052l-5.6 5.735s-4.185 5.039-3.877 6.719 4.152.742 5.123 0-1.24-2.967-1.24-2.967l3.729-2.223v4.254s11.278-9.276 12.2-9.562-8.52 8.416-8.52 8.416-1.48 2.419-.857 3.336 3.35.331 3.35.331l-4.306 1.806s-.224 4.688.956 5.347 3.762-2.71 3.762-2.71-.793-2.342-.413-2.637 1.934 1.457 1.934 1.457 2.659-1.645 2.768-2.76-2.518-1.275-2.333-1.7 1.753 1.547 3.073 0 2.206-6.189 2.206-6.189v3.719l2.749 4.169 4.053-.833-2.467 3.593 5.187 5.131 1.442-6.587-1.054-6.357-5.029-6.315 9.781 8.346 1.542-2.378v3.313l5.25 1.254-2.873-7.972h-5.221l3.8-2.564-7.243-6.417 6.831 5.2 2.939-.416v-3.075l2.663 2.594 5.748-1.052-7.618-6.473-2.786 2.419.333-3.231-3.937-1.114-2.117 1.108 4.233-4.136-1.541-1.585 2.079-3.318 2.939 1.381s4.59-6.1 2.663-7.022-7.964.961-10.371 3.332 1.355 5.69.743 6.152-3.191-4.3-3.191-4.3l-3.11 2.545-5.305 10.183s5.892-8.542 4.578-15.942S29.374.617 28.549.5Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 55.822"><path d="M28.549.5C27.724.383 24.22 8 24.464 9.131s3.382 3.066 3.382 3.066l-4.057.7v6.358l-5.231-4.333-2.146 4.333-3.79-3.155s1.953-2.945.532-4.245-5.815-3.068-6.216-.93.591 5.2 4.612 9.483 10.852 6.618 11.471 7.641-5.194-2.941-9-3.551a9.253 9.253 0 0 0-6.172 1.079c.069-.05-.032-1.093-.043.029s.375 4.364 0 4.457.326-3.981-1.5-4.086-5.807 1.94-5.807 3.668 5.807 3.246 5.807 3.246a43.353 43.353 0 0 0 6.846 1.052c2.287 0 2.3-1.052 2.3-1.052l-5.6 5.735s-4.185 5.039-3.877 6.719 4.152.742 5.123 0-1.24-2.967-1.24-2.967l3.729-2.223v4.254s11.278-9.276 12.2-9.562-8.52 8.416-8.52 8.416-1.48 2.419-.857 3.336 3.35.331 3.35.331l-4.306 1.806s-.224 4.688.956 5.347 3.762-2.71 3.762-2.71-.793-2.342-.413-2.637 1.934 1.457 1.934 1.457 2.659-1.645 2.768-2.76-2.518-1.275-2.333-1.7 1.753 1.547 3.073 0 2.206-6.189 2.206-6.189v3.719l2.749 4.169 4.053-.833-2.467 3.593 5.187 5.131 1.442-6.587-1.054-6.357-5.029-6.315 9.781 8.346 1.542-2.378v3.313l5.25 1.254-2.873-7.972h-5.221l3.8-2.564-7.243-6.417 6.831 5.2 2.939-.416v-3.075l2.663 2.594 5.748-1.052-7.618-6.473-2.786 2.419.333-3.231-3.937-1.114-2.117 1.108 4.233-4.136-1.541-1.585 2.079-3.318 2.939 1.381s4.59-6.1 2.663-7.022-7.964.961-10.371 3.332 1.355 5.69.743 6.152-3.191-4.3-3.191-4.3l-3.11 2.545-5.305 10.183s5.892-8.542 4.578-15.942S29.374.617 28.549.5Z"/></svg></div>'
  }

  getTree() {
    return '<div class="svg_pic decor tree"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56.108"><path d="M28.024.5a12.577 12.577 0 0 0-3.734 5.386 37.661 37.661 0 0 0-1.637 9.035 27.858 27.858 0 0 0-6.859-4.936 18.257 18.257 0 0 0-7.27-1.476s.207 6.711 4.354 11.278 12.236 6.991 12.236 6.991-8.187-4.173-14.341-3.857S.5 28.043.5 28.043a18.556 18.556 0 0 0 8.964 4.6c5.217.879 11.9-1.088 11.9-1.088s-6.635 1.963-9.846 5.883-3 9.794-3 9.794 6.224.632 10.639-3.016 7.021-11.573 7.021-11.573.553.983-1.494 4.795-1.756 5.545-1.615 7.308c.461 5.74 4.949 10.859 4.949 10.859a19.577 19.577 0 0 0 4.795-9.7c.733-5.473-1.863-12.2-1.863-12.2s2.229 7.124 6.341 10.5 10.105 3.016 10.105 3.016a24.193 24.193 0 0 0-2.022-8.027c-1.862-4.125-8.083-5.492-16.083-10.316 0 0 6.98 4.85 14.712 4.372a16.411 16.411 0 0 0 11.491-5.221 13.737 13.737 0 0 0-8.724-4.687c-5.523-.584-13.371 2.351-13.371 2.351a19.3 19.3 0 0 0 10.6-7.318c4.31-5.989 3.394-9.88 3.394-9.88s-4.449-.861-10.105 3.541-8 12.5-8 12.5 3.841-7.632 3.522-13.646S28.024.5 28.024.5Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56.108"><path d="M28.024.5a12.577 12.577 0 0 0-3.734 5.386 37.661 37.661 0 0 0-1.637 9.035 27.858 27.858 0 0 0-6.859-4.936 18.257 18.257 0 0 0-7.27-1.476s.207 6.711 4.354 11.278 12.236 6.991 12.236 6.991-8.187-4.173-14.341-3.857S.5 28.043.5 28.043a18.556 18.556 0 0 0 8.964 4.6c5.217.879 11.9-1.088 11.9-1.088s-6.635 1.963-9.846 5.883-3 9.794-3 9.794 6.224.632 10.639-3.016 7.021-11.573 7.021-11.573.553.983-1.494 4.795-1.756 5.545-1.615 7.308c.461 5.74 4.949 10.859 4.949 10.859a19.577 19.577 0 0 0 4.795-9.7c.733-5.473-1.863-12.2-1.863-12.2s2.229 7.124 6.341 10.5 10.105 3.016 10.105 3.016a24.193 24.193 0 0 0-2.022-8.027c-1.862-4.125-8.083-5.492-16.083-10.316 0 0 6.98 4.85 14.712 4.372a16.411 16.411 0 0 0 11.491-5.221 13.737 13.737 0 0 0-8.724-4.687c-5.523-.584-13.371 2.351-13.371 2.351a19.3 19.3 0 0 0 10.6-7.318c4.31-5.989 3.394-9.88 3.394-9.88s-4.449-.861-10.105 3.541-8 12.5-8 12.5 3.841-7.632 3.522-13.646S28.024.5 28.024.5Z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 56 56.108"><path d="M28.024.5a12.577 12.577 0 0 0-3.734 5.386 37.661 37.661 0 0 0-1.637 9.035 27.858 27.858 0 0 0-6.859-4.936 18.257 18.257 0 0 0-7.27-1.476s.207 6.711 4.354 11.278 12.236 6.991 12.236 6.991-8.187-4.173-14.341-3.857S.5 28.043.5 28.043a18.556 18.556 0 0 0 8.964 4.6c5.217.879 11.9-1.088 11.9-1.088s-6.635 1.963-9.846 5.883-3 9.794-3 9.794 6.224.632 10.639-3.016 7.021-11.573 7.021-11.573.553.983-1.494 4.795-1.756 5.545-1.615 7.308c.461 5.74 4.949 10.859 4.949 10.859a19.577 19.577 0 0 0 4.795-9.7c.733-5.473-1.863-12.2-1.863-12.2s2.229 7.124 6.341 10.5 10.105 3.016 10.105 3.016a24.193 24.193 0 0 0-2.022-8.027c-1.862-4.125-8.083-5.492-16.083-10.316 0 0 6.98 4.85 14.712 4.372a16.411 16.411 0 0 0 11.491-5.221 13.737 13.737 0 0 0-8.724-4.687c-5.523-.584-13.371 2.351-13.371 2.351a19.3 19.3 0 0 0 10.6-7.318c4.31-5.989 3.394-9.88 3.394-9.88s-4.449-.861-10.105 3.541-8 12.5-8 12.5 3.841-7.632 3.522-13.646S28.024.5 28.024.5Z"/></svg></div>'
  }

  updatePosition() {
    this.updateTrees()
    this.updateHouses()
  }

  updateTrees() {
    this.treeOffset += this.step
    this.treeOffset >= 0 && (this.treeOffset = -this.treeLineHeight)

    for (let i = 0; i < this.treeLine.length; ++i) {
      this.treeLine[i].style.top = this.treeOffset + 'px'
    }
  }

  updateHouses() {
    this.houseLeftOffset += this.step * this.parallaxRatio
    this.houseLeftOffset >= 0 && (this.houseLeftOffset = -this.houseLeftLineHeight)
    this.houseRightOffset += this.step * this.parallaxRatio
    this.houseRightOffset >= 0 && (this.houseRightOffset = -this.houseRightLineHeight)
    this.houseLine[0].style.top = this.houseLeftOffset + 'px'
    this.houseLine[1].style.top = this.houseRightOffset + 'px'
  }

  updateSpeed (speed) {
    this.step = window.screen.height / speed
  }

  draw() {
    this.updatePosition()
    this.timeout = setTimeout(() => this.draw(), 40)
  }

  destroy() {
    this.speed = null
    this.treeOffset = null
    this.timeout && clearTimeout(this.timeout)
    this.timeout = null
  }
}