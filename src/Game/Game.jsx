import React from 'react'
import '../Main.css'

export default function Game() {

const handleInput = (e) => {

}

  return (
    <div className='container'>
        <h1>Guess</h1>
        <input onChange={(e) => handleInput(e)}></input>
    </div>
  )
}
