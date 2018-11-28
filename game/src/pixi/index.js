import { keyboard, contain, randomInt } from '../../libs/utils'
import * as planck from 'planck-js'
var world = planck.World()
console.log(world)
// PIXI.settings.RESOLUTION = pixelRatio
let app = new PIXI.Application({
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
})
document.body.appendChild(app.view)
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.autoResize = true
app.renderer.resize(window.screen.width, window.screen.height)

const img = require('../../images/logo.png')
PIXI.loader
  .add(img)
  .on('progress', loadProgressHandler)
  .load(setup)

function loadProgressHandler() {
  //Display the file `url` currently being loaded
  console.log("loading: " + PIXI.loader.resources[img])

  //Display the percentage of files currently loaded
  console.log("progress: " + PIXI.loader.progress + "%")
}

let r = 20
let boals = []
let nums = 2
function setup() {
  for (let i = 0; i < nums; i++) {
    const ellipse = new PIXI.Graphics()
    boals.push(ellipse)
    ellipse.beginFill(0xFFFF00)
    ellipse.drawCircle(0, 0, r)
    ellipse.endFill()
    ellipse.x = randomInt(100, 300)
    ellipse.y = r - randomInt(0, r)
    ellipse.vy = randomInt(2, 10)
    app.stage.addChild(ellipse)
  }
  
  // const down = keyboard(40)

  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){
  for (let i = 0; i < boals.length; i++) {
    const boal = boals[i];
    boal.y += boal.vy
    const dir = contain(boal, { x: 0, y: r, width: window.screen.width, height: window.screen.height + r })
    if (dir === 'top' || dir === 'bottom') {
      boal.vy *= -1
    }
  }
}