import core from '../core'

// export default function() {
//   return new Promise(resolve => {
//     core.loader.baseUrl = 'static/textures/misc'
//     core.loader
//       .add('body.blue.png')
//       .add('barrel.blue.png')
//       .load(resolve)
//   })
// }
export default function() {
  return new Promise(resolve => {
    core.loader
      .add('static/textures/misc.json')
      .load(resolve)
  })
}