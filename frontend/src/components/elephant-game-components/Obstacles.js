import React from 'react'

function Obstacles({obstaclePosX, obstaclePosY}) {

    const obtacleWidth = 50
    const obstacleHeight = 50

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