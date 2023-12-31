import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //different feedback counters

  const increaseGood = () => {
    setGood(good + 1)
  }
  const increaseNeutral = () => {
    setNeutral(neutral + 1)
  }
  const increaseBad = () => {
    setBad(bad + 1)
  }
  return (
    <div>
      <h1>give Feedback</h1>
      <Button handleClick={increaseGood}
        text='good'/>
      <Button handleClick={increaseNeutral}
        text='neutral'/>
      <Button handleClick={increaseBad}
        text='bad'/>
      {/* Feedback section with Feedback Buttons */}

      <Statistics
        bad={bad} 
        good={good} 
        neutral={neutral}/>
      {/* Statistics Section with Feedback output */}
    </div>
  )
}


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const Statistics = ({statistics, good, bad ,neutral}) => {
  console.log(statistics)
  const heading = 'statistics' 
  if(good === 0 && bad === 0 && neutral === 0){
    return (
      <div>
        <h1>{heading}</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
      <div>
        <h1>statistics</h1>
        <Statisticline value={good} text='good '/>
        <Statisticline value={neutral} text='neutral '/>
        <Statisticline value={bad} text='bad '/>
        
        <Statisticline value={bad + neutral +good} 
          text='all '/>
        <Statisticline value={(good - bad)/(bad + neutral + good)} 
          text='average '/>
        <Statisticline value={(good/(bad + neutral + good))*100} 
          text='positive ' unit='%'/>
      </div>
  )
    
}

const Statisticline = ({value, text, unit}) => {
  return (
      <tr>
        <td>{text}</td>
        <td>{value}{unit}</td>  
      </tr>
  )
}


export default App
