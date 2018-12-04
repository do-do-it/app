function createTank(color) {
  const tank = PIXI.Sprite.from(`body.${color}.png`)
  const barrel = PIXI.Sprite.from(`barrel.${color}.png`)
  tank.anchor.set(.5)
  barrel.anchor.set(.5)
  barrel.position.set(0, 20)
  tank.addChild(barrel)
  return tank
}

function createTracks() {
  const tex = PIXI.Texture.from('track.png')
  tex.frame.height = 20
  tex._updateUvs()
  const track = new PIXI.Sprite(tex)
  track.height = 20
  track.anchor.set(.5)
  return track
}

class Tank {
  constructor(options) {
    this.tank = options.tank
  }
}

export {
  createTank,
  createTracks,
  Tank
}