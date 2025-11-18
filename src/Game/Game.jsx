import {useState} from 'react'
import {warlords} from '../data/Warlords'

export default function Game() {

    const [inputText, setInputText] = useState("")

    const handleInput = (e) => {
        setInputText(e.target.value)
    }

    const handleSubmit = () => {
        setInputText("")
    }

    return (
        <div className='container'>
            <h1>Guess</h1>
            <input list="warlords" value={inputText} onChange={(e) => handleInput(e)}></input>
            <datalist id="warlords">
  {warlords.map(w => (
    <option key={w.name} value={w.name} />
  ))}
</datalist>
            <button onClick={handleSubmit} className='button'>Submit</button>
        </div>
    )
}
