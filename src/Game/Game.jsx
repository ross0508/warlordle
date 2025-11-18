import {useState, useEffect} from 'react'
import {warlords} from '../data/Warlords'

export default function Game(setpageState) {

    
    const [inputText, setInputText] = useState("")
    const [guesses, setGuesses] = useState([])
    const [target, setTarget] = useState({})
    const [hasWon, setHasWon] = useState(false)

    useEffect(() => {
        setTarget(warlords[Math.floor(Math.random() * warlords.length)]);
         
    }, [])
    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = () => {
        if (!inputText) {
            return;
        }

        const warlord = warlords.find(warlord => warlord.name.toUpperCase() === inputText.toUpperCase());

        if (!warlord) {
            return;
        }

        setInputText("")
        setGuesses([...guesses, warlord])

        if (warlord.name === target.name) {
            setHasWon(true)
        }
    }

    return (
        <div>
            {!hasWon && <div className='container'>
                <h1>Guess</h1>
                <input list="warlords" value={inputText} onChange={(e) => handleInput(e)}></input>
                <datalist id="warlords">
                {warlords.map(warlord => (
                    <option key={warlord.name} value={warlord.name} />
                ))}
                </datalist>
                <button onClick={handleSubmit} className='button'>Submit</button>
                <div>
                {guesses.map((guess, index) => (
                    <div key={index} className='guess-card'>
                        <p className={guess.name === target.name ? 'correct' : 'incorrect'}><strong>Name:</strong> {guess.name}</p>
                        <p className={guess.dynasty === target.dynasty ? 'correct' : 'incorrect'}><strong>Dynasty:</strong> {guess.dynasty}</p>
                        <p className={guess.faction === target.faction ? 'correct' : 'incorrect'}><strong>Faction:</strong> {guess.faction}</p>
                    </div>))}
                </div>
            </div>}
            {hasWon && <div className='container'>
                <h1>YOU WIN</h1>
                <p>{target.name}</p>
            </div>}
        </div>
    )
}
