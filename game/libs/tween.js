function tween(option) {
  const
    {
      from, to,
      duration = 1,
      ease = t => t,
      yoyo = 0,
      loop = 0
    } = option,

    count = {
      yoyo: 0,
      loop: 0
    }

  let forward = 1

  function start(option) {
    const complex = isNaN(from)

    let update, complete, id, delta, result, t = 0

    complex ? (delta = {}, result = {}, Object.keys(from).forEach(key => {
      delta[key] = to[key] - from[key]
    })) : delta = to - from

    if (option instanceof Function) update = option
    else ({update, complete} = option)
    let times = Date.now()
    !function run() {
      t += (1 / 60 / duration) * forward
      t > 1 ? t = 1 : t < 0 ? t = 0 : null

      if (complex) for (const key in delta) {
        result[key] = from[key] + delta[key] * ease(t)
      } else result = from + delta * ease(t)

      update(result)

      if ((forward === 1 && t === 1) ||
        (forward === -1 && t === 0)) {
        if (loop > count.loop) {
          count.loop++
          t = 0
          id = requestAnimationFrame(run)
        } else if (yoyo > count.yoyo) {
          count.yoyo++
          forward *= -1
          id = requestAnimationFrame(run)
        } else complete && complete(Date.now() - times)
      } else {
        id = requestAnimationFrame(run)
      }
    }()

    return {
      stop() {
        cancelAnimationFrame(id)
      }
    }
  }

  return {start}
}

export {
  tween
}
