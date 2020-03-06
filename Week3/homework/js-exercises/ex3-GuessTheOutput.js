'use strict';

//the output would be 12. The returning function will be returned as closure. So it will use the 'variable a' from its outer function which has been assigned a new value(12).

let a = 10;
const x = (function () {
  a = 12;
  return function () {
    alert(a);
  };
})();

x();