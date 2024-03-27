import { useState } from 'react'
import './App.css'

const Button = ({handleClick,text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}
const Statistic = ({value , text}) => {
    return (
      <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
     </>
    )
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
     <Statistic text="good" value={good}/>
     <Statistic text="neutral" value={neutral}/>
     <Statistic text="bad" value={bad}/>
     <Statistic text="average" value={(good - bad )/ good+bad+neutral + '%'}/>
     <Statistic text="positive" value={good / good+bad+neutral + '%'}/>
    </>

  )
}

export default App
