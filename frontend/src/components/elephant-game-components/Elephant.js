import { useState, useEffect } from 'react'
import useKeyPress from './KeysHandler'
import elFrame1 from './logoTS-192-frame1.png'
import elFrame2 from './logoTS-192-frame2.png'


function Elephant({gameRun, setGameRun, playerPosX, playerPosY, setPlayerPosY, groundLevel, GRAVITY}) {

  const playerWidth = 60
  const playerHeight = 50
  const jumpHight = 180
  const jumpSpeed = 40

  const [ falling, setFalling ] = useState(true)
  const [ step, setStep ] = useState(false)
  const upPressed = useKeyPress('ArrowUp')

  // Jump lil elephan, jump
  useEffect(() => {
    let gameTimerId
    let frameTimerId
    
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

    if(playerPosY === groundLevel && !falling){
      frameTimerId = setInterval(() => {
        setStep(step => !step)
      }, 300)
    }

    return () => {
      clearInterval(gameTimerId)
      clearInterval(frameTimerId)
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
      <img className='palyerAsset' src={step ? elFrame2 : elFrame1 } alt='elephant?'/>
    </div>
  )
}

export default Elephant