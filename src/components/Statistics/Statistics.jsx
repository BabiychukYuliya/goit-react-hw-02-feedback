

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
    total===0 ? <div>There is no feedback</div> :
  <ul>
    <li >Good: {good}</li>
    <li >Neutral: {neutral}</li>
        <li >Bad: {bad}</li>
        <li >Total: {total}</li>
        <li >Positive feedback: {positivePercentage} %</li>
        
  </ul>
);