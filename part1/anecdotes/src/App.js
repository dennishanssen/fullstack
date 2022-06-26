import { useState } from 'react'

const App = () => {

  const handleSelect = () => {
    let rand = generateRandom(anecdotes.length);
    setSelected(rand);
  };

  const generateRandom = (length) => {
    return Math.floor(Math.random() * length);
  }

  const handleVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  };

  const anecdotes = [
    'If it hurts',
    'Adding manpower',
    'The first 90',
    'Any fool ',
    'Premature',
    'Debugging',
    'Programming'
  ]
  
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0));
  const [selected, setSelected] = useState(0)

  const maxVote = Math.max(...points);
  const bestAnecdote = anecdotes[points.indexOf(maxVote)];

  return (
    <div>
      <p>{anecdotes[selected]} {[selected]} Has {points[selected]} votes</p>
      <button onClick={handleVote}>Vote</button>
      <button onClick={handleSelect}>Next</button>
      <p>Best {bestAnecdote}</p>
    </div>
      
  )
}

export default App