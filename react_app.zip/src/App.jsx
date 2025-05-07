import BMICalculator from './components/BMICalculator'

function App() {
  return (
    <div className="app">
      <h1>BMI Calculator</h1>
      <BMICalculator />
      <style jsx>{`
        .app {
          max-width: 600px;
          margin: 0 auto;
          padding: 2rem;
          text-align: center;
        }
        h1 {
          color: #2c3e50;
          margin-bottom: 2rem;
        }
        .bmi-calculator {
          background: #f8f9fa;
          padding: 2rem;
          border-radius: 10px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .input-group {
          margin-bottom: 1rem;
        }
        label {
          display: block;
          margin-bottom: 0.5rem;
          color: #2c3e50;
        }
        input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ddd;
          border-radius: 4px;
          font-size: 1rem;
        }
        button {
          background: #3498db;
          color: white;
          border: none;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 1rem;
        }
        button:hover {
          background: #2980b9;
        }
        .bmi-card {
          margin-top: 2rem;
          padding: 1rem;
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .bmi-value {
          font-size: 2.5rem;
          font-weight: bold;
          color: #2c3e50;
          margin: 1rem 0;
        }
        .bmi-category {
          margin-top: 1rem;
          font-weight: bold;
        }
      `}</style>
    </div>
  )
}

export default App
