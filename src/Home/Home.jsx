import React from 'react'

export default function Home({startGame}) {
  return (
    <div className='container'>
        <h1>Warlordle</h1>
        <button onClick={startGame} className='button'>Start</button>
    </div>
  )
}
