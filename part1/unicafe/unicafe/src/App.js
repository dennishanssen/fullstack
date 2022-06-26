import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const Statistics = ({ good, neutral, bad, all, average, positive }) => {
  return (
    <div>
      <h1>statistics</h1>

  {!all ? (
    <div>No feedback given</div>
  ) : (
    <table>
      <tbody>
        <Statistic text= 'good' value={good}/>
        <Statistic text= 'neutral' value={neutral}/>
        <Statistic text= 'bad' value={bad}/>
        <Statistic text= 'all' value={all}/>
        <Statistic text= 'average' value={average}/>
        <Statistic text= 'positive' value={positive}/>
      </tbody>
    </table>
  )}
  </div>
);
};

const Statistic = (props) => (
  <tr>
    <td>
      {props.text} {props.value}
    </td>
  </tr>
);


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad) / all
  const positive = (good / all) * 100 +'%'

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)}/>
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)}/>
      <Button text="bad" handleClick={() => setBad(bad + 1)}/>

      <Statistics 
        good={good}         
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}/>
    </div>
  )
}

export default App