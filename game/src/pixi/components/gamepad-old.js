import keybord from '../../../libs/keybord'
import EventEmitter from './eventEmitter'

export default class Gamepad extends EventEmitter {
  constructor() {
    super()
    const left = keybord(37)
    const up = keybord(37)
    const right = keybord(39)
    const down = keybord(40)
    down.press = () => {
      this.emit('down.press', { a: 1, b: 2})
    }
    down.release = () => {
      this.emit('down.release', 'down.release', 2)
    }
    return this
  }
}