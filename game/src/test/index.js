import { tween } from '../../libs/tween'

import { tw } from '../../libs/timeline'

const {
  innerHeight: height,
  innerWidth: width,
  devicePixelRatio
} = window

const app = new PIXI.Application({
  view: document.querySelector('canvas'),
  width: width * devicePixelRatio,
  height: height * devicePixelRatio,
  roundPixels: true,
  sharedLoader: true,
  sharedTicker: true,
  transparent: true,
  backgroundColor: 0xffcc33,
  autoResize: false
})

const ball = new PIXI.Graphics()
ball.beginFill(0xff33cc)
ball.drawCircle(0, 0, 50)
ball.endFill()
ball.position.set(width * devicePixelRatio / 2 - 50, 100)

const ball2 = new PIXI.Graphics()
ball2.beginFill(0xff55ee)
ball2.drawCircle(0, 0, 50)
ball2.endFill()
ball2.position.set(width * devicePixelRatio / 2 + 50, 100)

app.stage.addChild(ball, ball2)

const t = tween({
  from: ball.position.y,
  to: 1000,
  duration: 5,
  yoyo: 1
})

const t2 = tw({
  from: ball2.position.y,
  to: 1000,
  duration: 5000,
  yoyo: 1
})

t.start({
  update: v => ball.position.y = v,
  complete: (t) => {
    console.log('t: ' + t)
  }
})

t2.start({
  update: v => ball2.position.y = v,
  complete: (t) => {
    console.log('t2: ' + t)
  }
})
