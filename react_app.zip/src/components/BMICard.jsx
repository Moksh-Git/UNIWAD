function BMICard({ bmi }) {
  return (
    <div className="bmi-card">
      <h3>Your BMI Result</h3>
      <div className="bmi-value">{bmi}</div>
      <p>Body Mass Index</p>
    </div>
  );
}

export default BMICard; 