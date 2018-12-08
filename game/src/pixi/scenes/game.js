import {tween} from 'popmotion'
import core from '../core'
import { createTank, createTracks } from '../components/tank'
import Gamepad from '../components/gamepad'

export default {
  lastTime: 0,
  tracks: [],
  trackIndex: 0,
  setup() {
    this.cantainer = new PIXI.Container()
    this.gamepad = new Gamepad()
    const body = createTank('red')

    this.body = body
    body.position.set(40, 100)
    body.angle = 0

    this.cantainer.addChild(body, this.gamepad)

    for (let i = 0; i < 10; i++) {
      const track = createTracks()
      this.tracks.push(track)
    }
  },

  update() {
    // this.body.angle -= 0.02
    // this.body.position.set(
    //   300 + 200 * Math.sin(this.body.angle),
    //   300 + 200 * Math.cos(this.body.angle),
    // )
    // this.body.rotation = Math.PI * .5 - this.body.angle

    const now = Date.now()
    if (now - this.lastTime > 1e2) {
      this.lastTime = now
      const track = this.tracks[this.trackIndex]
      this.trackIndex > this.tracks.length - 2 ? this.trackIndex = 0 : this.trackIndex++
      track.rotation = this.body.rotation
      track.position.copy(this.body.position)
      tween({
        from: 0,
        to: .6,
        duration: 5e2,
        yoyo: 1
      }).start({
        update: v => track.alpha = v,
        // complete: () => track.destroy()
      })
      this.cantainer.addChild(track)
    }

    if (this.move) {
      this.body.y += 5
    }
  },

  listen() {
    // new Gamepad().on('down.press', this.moveDown.bind(this, true))
    // .on('down.release', this.moveDown.bind(this, false))
  },

  moveDown(falge) {
    this.move = falge
  },

  show() {
    this.setup()
    this.listen()
    core.stage.addChild(this.cantainer)
    core.ticker.add(this.update, this)
  },

  hide() {

  }
}