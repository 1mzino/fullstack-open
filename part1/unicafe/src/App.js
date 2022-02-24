import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <p>
      {text} {value}
    </p>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const total = good + bad + neutral;

  const getAverage = () => {
    return (good + bad * -1) / total;
  };

  const getPercentage = () => {
    return `${(good / total) * 100}%`;
  };
  return (
    <>
      {total === 0 ? (
        "No feedback given"
      ) : (
        <>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />

          <StatisticLine text="all" value={total} />

          <StatisticLine text="average" value={getAverage()} />
          <StatisticLine text="positive" value={getPercentage()} />
        </>
      )}
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />

      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
