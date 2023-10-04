import { useState } from 'react'
import './App.css'

function App() {
  const [add, setAdd] = useState([])
  const [note, setNote] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    let newList = [...add, note]
    setAdd(newList)
    setNote('')
  
  }

  function addNote(e) {
    setAdd(note)
    
  }
  return (
    <>
    <div className='App'>
      <div className='NavBar'>
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </div>
      <div className='Title'>
        <h1>My Notes</h1>
      </div>
      <div className='Form'>
        <form onSubmit={handleSubmit}>
          <label>Add Note:</label>
          <input type='text' id='note' value={note} onChange={(e) => setNote(e.target.value)} />
          <button>Add</button>
        </form>
      </div>
      <div className='Add'>
        <ul>
            {add.map((listItem) => {
                return (
                <li>{listItem}</li>)
            })}
        </ul>
      </div>
    </div>
    </>
  )
}

export default App
