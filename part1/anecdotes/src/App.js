import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selectedIndex, setSelectedIndex] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const highestIndex = points.indexOf(Math.max(...points))
  console.log('Most Votes in index: ' + highestIndex)

  const handleNewAnecdoteClick = () => {
    setSelectedIndex(Math.floor(Math.random() * anecdotes.length));
  }

  const handleVoteClick = () => {
    console.log('before: '+ points)
    const updatedPoints = [...points]
    updatedPoints[selectedIndex] += 1
    setPoints(updatedPoints)
    console.log('after: '+ updatedPoints)
    //Vote Section
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      {anecdotes[selectedIndex]}<br />
      <Display score={points[selectedIndex]}  />
      <Button handleClick={handleVoteClick} text='Vote' />
      <Button handleClick={handleNewAnecdoteClick} text='next anecdote' />
      {/* Anecdote Section */}

      <h2>Anecdote with most votes</h2>
      {anecdotes[highestIndex]}
      <Display score={points[highestIndex]}  />
      {/* Most voted Section */}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ( {score}) => {
  console.log('Display'+ score)
  return (
    <div>
      has {score} votes
    </div>
  )
}

export default App
