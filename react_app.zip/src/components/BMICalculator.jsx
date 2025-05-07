import { useState } from 'react';
import BMICard from './BMICard';
import BMICategory from './BMICategory';

function BMICalculator() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState(null);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (weight && height) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBMI(bmiValue);
    }
  };

  return (
    <div className="bmi-calculator">
      <h2>BMI Calculator</h2>
      <form onSubmit={calculateBMI}>
        <div className="input-group">
          <label htmlFor="weight">Weight (kg):</label>
          <input
            type="number"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            placeholder="Enter weight in kg"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="height">Height (cm):</label>
          <input
            type="number"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            placeholder="Enter height in cm"
            required
          />
        </div>
        <button type="submit">Calculate BMI</button>
      </form>
      {bmi && (
        <>
          <BMICard bmi={bmi} />
          <BMICategory bmi={bmi} />
        </>
      )}
    </div>
  );
}

export default BMICalculator; 