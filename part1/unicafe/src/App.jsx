import { useState } from 'react'
import './App.css'

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  );
}
const StatisticLine = ({ value, text }) => {
  return (
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({ good, bad, neutral }) => {
  if (good === 0 && bad === 0 && neutral === 0) {
    return (
      <div>No feedbak given</div>
    )
  }
  let total = good + bad + neutral;
  let average = (good - bad) / total;
  let positive = (good / total) + '%';
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="neutral" value={neutral} />
        <StatisticLine text="bad" value={bad} />
        <StatisticLine text="all" value={total} />
        <StatisticLine text="average" value={average} />
        <StatisticLine text="positive" value={positive} />
      </tbody>
    </table>
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
      <Statistics good={good} bad={bad} neutral={neutral} />
    </>

  )
}

export default App
