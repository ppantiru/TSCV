import { useEffect } from 'react'
import rock1 from './rock1.png'
import rock2 from './rock2.png'

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function Obstacles({obtacleWidth, obstacleHeight, obstaclePosX, posOffset, setPosOffset, setObstaclePosX, obstaclePosY}) {

const obstacleSpeed = 5

useEffect(() => {
  let obstTimerId
  let offset = getRandomInt(100,500)
  if(obstaclePosX > -offset * 1.5){
    obstTimerId = setInterval(() => {
        setObstaclePosX(obstaclePosX => (obstaclePosX - obstacleSpeed))
    },20)
  }else{
    setObstaclePosX(900)
    setPosOffset(offset)
  }


  return () => {
    clearInterval(obstTimerId)
  }
},[obstaclePosX, setObstaclePosX, posOffset])


  return (
    <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        width: obtacleWidth,
        height: obstacleHeight,
        left: obstaclePosX,
        bottom: obstaclePosY,
    }}></div>
  )
}

export default Obstacles