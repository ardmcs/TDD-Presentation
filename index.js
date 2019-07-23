function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) throw new Error('Number must be greater than 0');
  return a / b;
}

module.exports = {
  multiply,
  divide
};
