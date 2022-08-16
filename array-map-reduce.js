const number = [-1, -2, 1, 2, 3, 4, 5, 6, -5, 8, 4, -3, 7];

const newNumber = number
  .filter((a) => a >= 3) // loop
  .map((a, b) => a * b) // kondisi
  .reduce((acc, cer) => acc + cer); //summary
console.log(newNumber);
