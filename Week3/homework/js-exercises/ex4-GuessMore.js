'use strict';
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); //prints 9, because x is assigned a new value in the function(local) not in global scope 

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); //prints {x:10}, due to its an object; the changes on variable y will affect the y in global scope