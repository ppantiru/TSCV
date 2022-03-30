import { useState, useEffect } from 'react'
import Elephant from './Elephant'
import Obstacles from './Obstacles'
import Landscape from './Landscape'
import useKeyPress from './KeysHandler'

function ElephantGame() {

  const groundLevel = 30
  const playerPosX = 100
  const obstaclePosY = groundLevel
  const GRAVITY = 10
  
  const [ gameRun , setGameRun ] =  useState(true)
  const [ playerPosY, setPlayerPosY ] = useState(groundLevel)
  const [ obstaclePosX, setObstaclePosX ] = useState(900)
  const [ obtacleWidth, setObtacleWidth ] = useState(20)
  const [ obstacleHeight, setObstacleHeight ] = useState(20)
  const [ posOffset, setPosOffset ] = useState(100)

  const enterPressed = useKeyPress('Enter')

  useEffect(() => {
    if(playerPosX + 60 > obstaclePosX &&
      playerPosX < obstaclePosX + obtacleWidth &&
      playerPosY - 50 < obstacleHeight){
        setGameRun(false)
    }
    if(enterPressed){
      setGameRun(true)
    }
  },[obstaclePosX, obstaclePosY, enterPressed, obtacleWidth, obstacleHeight, playerPosY])

  return (
    <div className='gamewindow'>
      <Landscape/>
      {gameRun ? <Elephant
        gameRun={gameRun}
        setGameRun={setGameRun}
        GRAVITY={GRAVITY}
        groundLevel={groundLevel}
        playerPosX={playerPosX}
        playerPosY={playerPosY}
        setPlayerPosY={setPlayerPosY}
      /> : null }
      {gameRun ? <Obstacles
        obtacleWidth={obtacleWidth}
        obstacleHeight={obstacleHeight}
        obstaclePosX={obstaclePosX}
        obstaclePosY={obstaclePosY}
        posOffset={posOffset}
        setPosOffset={setPosOffset}
        setObstaclePosX={setObstaclePosX}
        setObtacleWidth={setObtacleWidth}
        setObstacleHeight={setObstacleHeight}
      /> : null }
      <p style={{position:'absolute'}}>Player altitude: {playerPosY}, {obstaclePosX }</p>
    </div>
  )
}

export default ElephantGame