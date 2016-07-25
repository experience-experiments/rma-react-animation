import 'velocity-animate'
import 'velocity-animate/velocity.ui'

import {
  velocityHelpers
} from 'velocity-react'

const animations = {
  flip: velocityHelpers.registerEffect({
    defaultDuration: 200,
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
        rotateX: 160,
      }]
    ],
  }),

  flap: velocityHelpers.registerEffect({
    defaultDuration: 1100,
    calls: [
      [{
        transformPerspective: [ 800, 800 ],
        transformOriginX: [ '50%', '50%' ],
        transformOriginY: [ 0, 0 ],
        rotateX: [0, 'spring']
      }, 1, {
        delay: 100,
        easing: 'ease-in',
      }]
    ],
  })
}

export default animations