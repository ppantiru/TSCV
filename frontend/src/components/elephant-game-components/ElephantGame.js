import React from 'react'
import Elephant from './Elephant'


function ElephantGame() {

  const playerPosX = 200
  const playerPosY = 300

  return (
    <div>
      <Elephant
        playerPosX={playerPosX}
        playerPosY={playerPosY}
      />
    </div>
  )
}

export default ElephantGame