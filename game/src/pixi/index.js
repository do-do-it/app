import { keyboard } from '../utils'
let app = new PIXI.Application({ 
  width: 500,
  height: 500,
  antialias: true,    // default: false
  transparent: false, // default: false
  resolution: 1       // default: 1
})
document.body.appendChild(app.view)
app.renderer.view.style.position = 'absolute'
app.renderer.view.style.display = 'block'
app.renderer.autoResize = true
app.renderer.resize(window.innerWidth, window.innerHeight)

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

let s
function setup() {
  s = new PIXI.Sprite(
    PIXI.loader.resources[img].texture
  )
  s.x = 100
  s.y = 100
  s.vy = 0
  s.pivot.set(s.width / 2, s.height / 2)
  app.stage.addChild(s)

  const down = keyboard(40)
  
  down.press = () => {
    s.vy = 5
    s.vx = 0
  }
  down.release = () => {
    if (!down.isDown && cat.vx === 0) {
      cat.vy = 0
    }
  }

  let style = new PIXI.TextStyle({
    fontFamily: "Arial",
    fontSize: 36,
    fill: "white",
    stroke: '#ff3300',
    strokeThickness: 4,
    dropShadow: true,
    dropShadowColor: "#000000",
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
  });

  let msg = new PIXI.Text("Hello!", style);

  app.stage.addChild(msg)

  app.ticker.add(delta => gameLoop(delta));
}

function gameLoop(delta){

  s.y += s.vy;
}