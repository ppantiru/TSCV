import { useState } from 'react'
import Elephant from './Elephant'
import Obstacles from './Obstacles'
import Landscape from './Landscape'

function ElephantGame() {

  const groundLevel = 30
  const playerPosX = 100
  const obstaclePosY = groundLevel
  const GRAVITY = 10
  
  const [ playerPosY, setPlayerPosY ] = useState(groundLevel)
  const [ obstaclePosX, setObstaclePosX ] = useState(500)

  return (
    <div className='gamewindow'>
      <Landscape/>
      <Elephant
        GRAVITY={GRAVITY}
        groundLevel={groundLevel}
        playerPosX={playerPosX}
        playerPosY={playerPosY}
        setPlayerPosY={setPlayerPosY}
      />
      <Obstacles 
        obstaclePosX={obstaclePosX}
        obstaclePosY={obstaclePosY}
        setObstaclePosX={setObstaclePosX}
      />
      <p style={{position:'absolute'}}>Player altitude: {playerPosY}</p>
    </div>
  )
}

export default ElephantGame