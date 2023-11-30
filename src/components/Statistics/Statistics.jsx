const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className="statistics">
      <li className="statistics-item">Good: {good}</li>
      <li className="statistics-item">Neutral: {neutral}</li>
      <li className="statistics-item">Bad: {bad} </li>
      <li className="statistics-item">Total: {total}</li>
      <li className="statistics-item">
        Positive feedback: {positivePercentage}%
      </li>
    </ul>
  );
};

export default Statistics;
