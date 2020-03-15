module.exports = function countCats(matrix) {
  let counts = 0;  
  matrix.forEach(i => i.forEach(n => (n === '^^') ? counts += 1 : counts += 0));
  return counts;
}; 
