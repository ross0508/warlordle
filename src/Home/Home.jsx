import {useState} from 'react'

export default function Home({startGame, setGameMode}) {
    const [selectedMode, setSelectedMode] = useState("warlordEra");

  const handleChange = (e) => {
    setSelectedMode(e.target.value);
    setGameMode(e.target.value);
  }

  return (
    <div className='container'>
        <h1>Warlordle</h1>
        <div className='container-horizontal'>
            <label>
                <input
                    type='radio'
                    value='warlordEra'
                    checked={selectedMode === 'warlordEra'}
                    onChange={handleChange}
                    name='gameMode'
                />
                Warlord Era
            </label>

            <label>
                <input
                    type='radio'
                    value='threeKingdoms'
                    checked={selectedMode === 'threeKingdoms'}
                    onChange={handleChange}
                    name='gameMode'
                />
                Three Kingdoms
            </label>
        </div>
        <button onClick={startGame} className='button'>Start</button>
        
    </div>
  )
}
