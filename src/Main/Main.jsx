import { useState } from 'react'
import Home from '../Home/Home'
import Game from '../Game/Game'
export default function Main() {

    const [pageState, setPageState] = useState('home')

const startGame = () => {
    setPageState('game')
}

  return (
    <div>
    {pageState == 'home' && <Home startGame={startGame}></Home>}
    {pageState == 'game' && <Game></Game>}
    </div>
  )
}
