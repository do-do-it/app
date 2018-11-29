import { prepare, game } from './scenes'

!async function() {
  await prepare()
  game.show()
}()