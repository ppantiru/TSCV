import { useState, useEffect } from 'react'
import Elephant from './Elephant'
import Obstacles from './Obstacles'
import Landscape from './Landscape'
import useKeyPress from './KeysHandler'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function ElephantGame() {

  const groundLevel = 30
  const playerPosX = 100
  const obstaclePosY = groundLevel
  const GRAVITY = 10
  const obtacleWidth = 20
  const obstacleHeight =  20
  const [ gameRun , setGameRun ] =  useState(true)
  const [ playerPosY, setPlayerPosY ] = useState(groundLevel)
  const [ obstaclePosX, setObstaclePosX ] = useState(900)
  const [ offset, setOffset ] = useState(100)


  const enterPressed = useKeyPress('Enter')

  useEffect(() => {
    if(
        (
          playerPosX + 60 > obstaclePosX &&
          playerPosX < obstaclePosX + obtacleWidth &&
          playerPosY - 50 < obstacleHeight
        ) ||
        (
          playerPosX + 60 > obstaclePosX + offset &&
          playerPosX < obstaclePosX + obtacleWidth + offset &&
          playerPosY - 50 < obstacleHeight
        )
      ){
        setGameRun(false)
    }
    if(enterPressed){
      setGameRun(true)
    }
  },[obstaclePosX, obstaclePosY, enterPressed, obtacleWidth, obstacleHeight, playerPosY, offset])

  return (
    <div className='gamewindow'>
      <Landscape/>
      {gameRun ?
        <>
          <Elephant
            gameRun={gameRun}
            setGameRun={setGameRun}
            GRAVITY={GRAVITY}
            groundLevel={groundLevel}
            playerPosX={playerPosX}
            playerPosY={playerPosY}
            setPlayerPosY={setPlayerPosY}
          /> 
          <Obstacles
            obtacleWidth={obtacleWidth}
            obstacleHeight={obstacleHeight}
            obstaclePosX={obstaclePosX}
            obstaclePosY={obstaclePosY}
            setObstaclePosX={setObstaclePosX}
            getRandomInt={getRandomInt}
            offset={offset}
            setOffset={setOffset}
          />
        </>
       : null }
      <p style={{position:'absolute'}}>Player altitude: {playerPosY}, {obstaclePosX }</p>
    </div>
  )
}

export default ElephantGame