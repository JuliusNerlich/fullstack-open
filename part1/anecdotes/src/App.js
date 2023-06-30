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

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))
  const highestIndex = points.indexOf(Math.max(...points))

  const handleNewAnecdoteClick = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  }

  // const points = [...Array(anecdotes.length)].map(() => 0);

  const handleVoteClick = () => {
    console.log('before: '+ points)
    const updatedPoints = [...points]
    updatedPoints[selected] += 1
    setPoints(updatedPoints)
    console.log('after: '+ updatedPoints)
    //Vote Section


    console.log('Most Votes in index: ' + highestIndex)
  }

  return (
    <div>
      <AnecdoteOfTheDay/>
      {anecdotes[selected]}<br />
      <Display score={points[selected]}  />
      <Button handleClick={handleVoteClick} text='Vote' />
      <Button handleClick={handleNewAnecdoteClick} text='next anecdote' />
      {/* Anecdote Section */}

      <MostVoted/>
      {anecdotes[highestIndex]}
      <Display score={points[highestIndex]}  />
    </div>
  )
}

const AnecdoteOfTheDay = () => {
  return (
    <div>
      <h2>Anecdote of the day</h2>
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

const MostVoted = () => {
  return (
    <div>
      <h2>Anecdote with most votes</h2>
    </div>
  )
}

export default App
