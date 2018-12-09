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

app.stage.addChild(ball)
