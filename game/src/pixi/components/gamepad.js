import core, { monitor } from '../core'
import { tween } from 'popmotion'
export default class Gamepad extends PIXI.Container {
  constructor() {
    super()
    this.drawHandle()
    this.listen()
    return this
  }
  drawHandle() {
    const handle = new PIXI.Graphics()
    handle.beginFill(0xffffff)
    handle.drawCircle(0, 0, 100)
    handle.endFill()
    
    const handleBall = new PIXI.Graphics()
    handleBall.beginFill(0xeeeeee)
    handleBall.drawCircle(0, 0, 80)
    handleBall.endFill()

    this.handle = handle
    this.handleBall = handleBall
    handle.addChild(handleBall)
    handle.position.set(160, 600)
    this.addChild(handle)
  }
  listen() {
    this.handleBall.interactive = true
    this.handleBall.on('pointerdown', ev => {

    }).on('pointermove', ev => {
      const pos = this.getPos(ev.data.global)

      this.handleBall.position.copy(pos)
      monitor.emit('tank:move', pos)
    }).on('pointerup', ev => {
      tween({
        from: {
          x: this.handleBall.x,
          y: this.handleBall.y
        },
        to: {
          x: 0,
          y: 0
        },
        duration: 200
      }).start(v => this.handleBall.position.copy(v))
    }).on('pointerupoutside', ev => {
      tween({
        from: {
          x: this.handleBall.x,
          y: this.handleBall.y
        },
        to: {
          x: 0,
          y: 0
        },
        duration: 200
      }).start(v => this.handleBall.position.copy(v))
    })
  }
  getPos(pos) {
    const defaul = {
      x: 160,
      y: 600
    }
    const ps = {
      x: pos.x - defaul.x,
      y: pos.y - defaul.y
    }
    if (Math.abs(ps.x) > 20) {
      ps.x = ps.x > 0 ? 20 : -20
    }
    if (Math.abs(ps.y) > 20) {
      ps.y = ps.y > 0 ? 20 : -20
    }
    return ps
  }
}