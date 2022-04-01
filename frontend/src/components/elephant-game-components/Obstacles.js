import { useEffect } from 'react'
import rock1 from './rock1.png'
import rock2 from './rock2.png'


function Obstacles({obtacleWidth, obstacleHeight, obstaclePosX, setObstaclePosX, obstaclePosY, getRandomInt, offset, setOffset}) {

const obstacleSpeed = 5
const initialPos = 900


useEffect(() => {
  let obstTimerId
  if(obstaclePosX > -offset){
    obstTimerId = setInterval(() => {
        setObstaclePosX(obstaclePosX => (obstaclePosX - obstacleSpeed))
    },10)
  }else{
    setObstaclePosX(initialPos)
    setOffset(getRandomInt(20, 700))
  }


  return () => {
    clearInterval(obstTimerId)
  }
},[obstaclePosX, setObstaclePosX, getRandomInt, offset, setOffset])


  return (
    <>
      <div style={{
          position: 'absolute',
          backgroundColor: '',
          width: obtacleWidth,
          height: obstacleHeight,
          left: obstaclePosX,
          bottom: obstaclePosY,
      }}><img src={rock1} alt='rock' width={obtacleWidth} height={obstacleHeight}/></div>
      <div style={{
        position: 'absolute',
        backgroundColor: '',
        width: obtacleWidth,
        height: obstacleHeight,
        left: obstaclePosX + offset,
        bottom: obstaclePosY,
      }}><img src={rock2} alt='rock' width={obtacleWidth} height={obstacleHeight}/></div>
    </>
  )
}

export default Obstacles