function calculateNumber (type, a, b) {
  const num1 = Math.round(a);
  const num2 = Math.round(b);

  if (type === 'SUBTRACT') {
    return num1 - num2;
  }

  if (type === 'DIVIDE') {
    if (num2 === 0) {
      return 'Error';
    }
    const result = num1 / num2;
    return result
  }
  const result = num1 + num2;
  return result;
}

module.exports = calculateNumber;
