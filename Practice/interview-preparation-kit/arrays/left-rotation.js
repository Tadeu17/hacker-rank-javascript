console.clear()

function rotLeft(a, d) {
  return a.splice(d).concat(a);
}

const test1 = '1 2 3 4 5'
const test2 = '41 73 89 7 10 1 59 58 84 77 77 97 58 1 86 58 26 10 86 51'
const test3 = '33 47 70 37 8 53 13 93 71 72 51 100 60 87 97'

console.log(rotLeft(test1.split(' '), 4).join(" ") === '5 1 2 3 4');
console.log(rotLeft(test2.split(' '), 10).join(" ") === '77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77');
console.log(rotLeft(test3.split(' '), 13).join(" ") === '87 97 33 47 70 37 8 53 13 93 71 72 51 100 60');
