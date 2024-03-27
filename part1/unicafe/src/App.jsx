import { useState } from 'react'
import './App.css'

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <>
     <h1>give feedback</h1>
     <button onClick={() => setGood(good + 1)}>good</button>
     <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
     <button onClick={() => setBad(bad + 1)}>bad</button>

     <h1>Statistics</h1>
     <div>
      <tr>
        <td>good</td>
        <td>{good}</td>
      </tr>
     </div>
     <div>
      <tr>
        <td>neutral</td>
        <td>{neutral}</td>
      </tr>
     </div>
     <div>
      <tr>
        <td>bad</td>
        <td>{bad}</td>
      </tr>
     </div>
    </>

  )
}

export default App
