'use strict';


const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const removeDuplicates = arr => [...new Set(arr)];

console.log(removeDuplicates(letters));