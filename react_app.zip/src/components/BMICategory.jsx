function BMICategory({ bmi }) {
  const getCategory = (bmi) => {
    const bmiNum = parseFloat(bmi);
    if (bmiNum < 18.5) return { category: 'Underweight', color: '#3498db' };
    if (bmiNum < 25) return { category: 'Normal weight', color: '#2ecc71' };
    if (bmiNum < 30) return { category: 'Overweight', color: '#f1c40f' };
    return { category: 'Obese', color: '#e74c3c' };
  };

  const { category, color } = getCategory(bmi);

  return (
    <div className="bmi-category" style={{ color }}>
      <h3>Category: {category}</h3>
    </div>
  );
}

export default BMICategory; 