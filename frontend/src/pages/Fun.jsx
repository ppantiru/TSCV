import React from 'react'
import '../stylesheets/Fun.css'
import ElephantGame from '../components/elephant-game/ElephantGame'

function Fun() {
  return (
    <>
    <h1>For fun</h1>
    <div>Cuz why not?</div>
    <div id='game1'>
      <ElephantGame/>
    </div>
    </>
  )
}

export default Fun