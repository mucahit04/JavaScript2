'use strict';

function createBase(baseNum) {

  function sum(num) {
    console.log(baseNum + num);
  }
  return sum; //function createBase returns a closure that adds num to baseNum

}

const addSix = createBase(6);

addSix(9);
addSix(18);
addSix(30);