import { useState } from 'react'
import './App.css'

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}


function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1);
  }
  const handleBadClick = () => {
    setBad(bad + 1);
  }
  const handleNeutrallick = () => {
    setNeutral(neutral + 1);
  }

  return (
    <>
     <h1>give feedback</h1>
     <Button handleClick={handleGoodClick} text="good" />
     <Button handleClick={handleNeutrallick} text="neutral" />
     <Button handleClick={handleBadClick} text="bad" />

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
     <div>
      <tr>
        <td>all</td>
        <td>{good+bad+neutral}</td>
      </tr>
     </div>
     <div>
      <tr>
        <td>average</td>
        <td>{(good - bad )/ good+bad+neutral}%</td>
      </tr>
     </div>
     <div>
      <tr>
        <td>positive</td>
        <td>{good / good+bad+neutral}%</td>
      </tr>
     </div>
    </>

  )
}

export default App
