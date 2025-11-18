import { useState } from 'react'
import Home from '../Home/Home'
import Game from '../Game/Game'
export default function Main() {

    const [pageState, setPageState] = useState('home')
    const [gameMode, setGameMode] = useState('warlordEra')

const startGame = () => {
    setPageState('game')
}

  return (
    <div>
    {pageState == 'home' && <Home startGame={startGame} setGameMode={setGameMode}></Home>}
    {pageState == 'game' && <Game setPageState={setPageState} gameMode={gameMode}></Game>}
    </div>
  )
}
