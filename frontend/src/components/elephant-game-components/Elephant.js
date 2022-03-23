import React from 'react'

function Elephant({playerPosX, playerPosY}) {

    const playerWidth = 60
    const playerHeight = 50
    

  return (
    <div style={{
        position: 'relative',
        backgroundColor: 'blue',
        width: playerWidth,
        height: playerHeight,
        top: playerPosY,
        left: playerPosX,
    }}></div>
  )
}

export default Elephant