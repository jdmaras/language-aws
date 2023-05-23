import './App.css'
import { useState } from 'react'

function App() {
  const [data, setData] = useState(null);
  const [print, setPrint] = useState(false);
  function translateText(e){
    setData(e.target.value);
  }

  return (
    <> 
      <h1>IB Language</h1>
      <h3>Translate</h3>
      <input type="text" onChange={translateText} />
      <button onClick={() => setPrint(true)}>Submit</button>
      { print ?
      <h2>{data}</h2>
        : null
      }
    </>
  )
}

export default App
