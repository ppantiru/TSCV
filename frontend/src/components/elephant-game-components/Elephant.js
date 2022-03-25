import { useState, useEffect } from 'react'
import useKeyPress from './KeysHandler'

function Elephant({playerPosX, playerPosY, setPlayerPosY, groundLevel, GRAVITY}) {

  const playerWidth = 60
  const playerHeight = 50
  const jumpHight = 120
  const jumpSpeed = 20

  const [ falling, setFalling ] = useState(true)
  const upPressed = useKeyPress('ArrowUp')

  // Jump lil elephan, jump
  useEffect(() => {
    let gameTimerId
    if(upPressed && (playerPosY < jumpHight)){
        gameTimerId = setInterval(() => {
          setPlayerPosY(playerPosY => playerPosY + jumpSpeed)
        }, 30)
    }else{
      clearInterval(gameTimerId)
      setFalling(true)
    }

    if(playerPosY > groundLevel && falling) {
      clearInterval(gameTimerId)
      gameTimerId = setInterval(() => {
        setPlayerPosY(playerPosY => playerPosY - GRAVITY)
      }, 30)
    }else if(playerPosY === groundLevel){
      setFalling(false)
    }

    return () => {
      clearInterval(gameTimerId)
    }
  }, [GRAVITY, groundLevel, falling, upPressed, playerPosY, setPlayerPosY])

  return (
    <div style={{
        position: 'absolute',
        backgroundColor: 'blue',
        width: playerWidth,
        height: playerHeight,
        left: playerPosX,
        bottom: playerPosY,
    }}></div>
  )
}

export default Elephant