import { prepare, game } from './scenes'
import createTree from '../../libs/twoForkTree'

console.log(new createTree([8, 4, 11, 2, 9, 10]).root)

!async function() {
  await prepare()
  game.show()
}()