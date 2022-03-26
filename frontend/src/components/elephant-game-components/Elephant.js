import { useState, useEffect } from 'react'
import useKeyPress from './KeysHandler'
import elephantFriend from './logoTS-192-frame1.png'

function Elephant({playerPosX, playerPosY, setPlayerPosY, groundLevel, GRAVITY}) {

  const playerWidth = 60
  const playerHeight = 50
  const jumpHight = 120
  const jumpSpeed = 40

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
    <div className='collisionBox' style={{
        position: 'absolute',
        width: playerWidth,
        height: playerHeight,
        left: playerPosX,
        bottom: playerPosY,
    }}>
      <img className='palyerAsset' src={elephantFriend} alt='elephant?'/>
    </div>
  )
}

export default Elephant