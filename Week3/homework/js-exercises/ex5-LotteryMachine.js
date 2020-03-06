'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  for (let indis = startIndex; indis <= stopIndex; indis++) {
    numbers.push(indis);
  }
  console.log(numbers);
  numbers.forEach(function (indis) {
    if (indis % 15 === 0) {
      // console.log('five and three');
      // console.log(indis);
      threeCallback();
      fiveCallback();
    } else if (indis % 5 === 0) {
      // console.log(indis);
      // console.log('only five');
      fiveCallback();

    } else if (indis % 3 === 0) {
      // console.log(indis);
      // console.log('only three')
      threeCallback();
    }
  });

}
const sayThree = function () {
  console.log('sayThree callback called');
}

const sayFive = function () {
  console.log('sayFive callback called');
}
threeFive(10, 15, sayThree, sayFive);

// Should create an array [10,11,12,13,14,15]
// and call sayFive, sayThree, sayThree, sayFive