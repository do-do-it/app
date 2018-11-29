import {tween} from 'popmotion'
import core from '../core'
// import {Gamepad} from '../components'

export default {
  lastTime: 0,
  tracks: [],
  trackIndex: 0,
  setup() {
    this.cantainer = new PIXI.Container()
    const body = PIXI.Sprite.from('body.blue.png')
    const barrel = PIXI.Sprite.from('barrel.blue.png')

    this.body = body
    body.anchor.set(.5)
    body.position.set(10, 10)
    barrel.anchor.set(.5)
    barrel.position.set(0, 20)
    body.addChild(barrel)
    body.angle = 0

    this.cantainer.addChild(body)

    this.tex = PIXI.Texture.from('track.png')
    this.tex.frame.height = 20
    this.tex._updateUvs()

    for (let i = 0; i < 10; i++) {
      const track = new PIXI.Sprite(this.tex)
      track.height = 20
      track.anchor.set(.5)
      this.tracks.push(track)
    }
  },

  update() {
    this.body.angle -= 0.02
    this.body.position.set(
      300 + 200 * Math.sin(this.body.angle),
      300 + 200 * Math.cos(this.body.angle),
    )
    this.body.rotation = Math.PI * .5 - this.body.angle

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
  },

  listen() {

  },

  show() {
    this.setup()
    core.stage.addChild(this.cantainer)
    core.ticker.add(this.update, this)
  },

  hide() {

  }
}