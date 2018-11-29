const
  design = {width: 1334, height: 750},
  monitor = new PIXI.utils.EventEmitter(),
  zoom = {
    mix: [],
    get max() {return Math.max(...this.mix)},
    get min() {return Math.min(...this.mix)}
  },
  {
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
  // transparent: true,
  backgroundColor: 0xffcc33,
  autoResize: false
})

zoom.mix = [
  app.screen.width / design.width,
  app.screen.height / design.height
]

export default app

export {
  zoom,
  monitor,
  devicePixelRatio
}