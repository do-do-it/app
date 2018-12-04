import keybord from '../../../libs/keybord'

export default class Gamepad {
  constructor() {
    const left = keybord(37)
    const up = keybord(37)
    const right = keybord(39)
    const down = keybord(40)
    this.events = {}
    down.press = () => {
      for (const key in this.events) {
        if (this.events.hasOwnProperty(key) && key === 'down.press') {
          const events = this.events[key];
          if (typeof events === 'function') {
            events()
          } else {
            for (let i = 0; i < events.length; i++) {
              events[i]()
            }
          }
        }
      }
    }
    down.release = () => {
      for (const key in this.events) {
        if (this.events.hasOwnProperty(key) && key === 'down.release') {
          const events = this.events[key];
          if (typeof events === 'function') {
            events()
          } else {
            for (let i = 0; i < events.length; i++) {
              events[i]()
            }
          }
        }
      }
    }
    return this
  }
  on(type, action) {
    const fun = this.events[type]
    if (fun && typeof fun === 'function') {
      this.events[type] = [fun, acorn]
    } else if (fun && typeof fun === 'araay') {
      this.events[type].push(action)
    } else {
      this.events[type] = action
    }
    return this
  }
}