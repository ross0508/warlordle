import React from 'react'
import '../Main.css'

export default function Home({startGame}) {
  return (
    <div className='container'>
        <h1>Warlordle</h1>
        <button onClick={startGame}>Start</button>
    </div>
  )
}
