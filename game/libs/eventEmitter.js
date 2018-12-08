export default class EventEmitter {
  events = {}
  on(type, action) {
    const fun = this.events[type]
    if (fun && typeof fun === 'function') {
      this.events[type] = [fun, action]
    } else if (fun && typeof fun === 'araay') {
      this.events[type].push(action)
    } else {
      this.events[type] = action
    }
    return this
  }
  emit(type, data) {
    const events = this.events[type];
    if (typeof events === 'function') {
      events(data)
    } else {
      for (let i = 0; i < events.length; i++) {
        events[i](data)
      }
    }
  }
}