var input = ["O", "Q", "R", "S"];
//var input = ["a", "b", "c", "d", "f"];

const firstSymb = input[0].charCodeAt(0);
var missedSymb = "";

for (var i = 1; i < input.length; i++) {
  if (input[i].charCodeAt(0) != firstSymb + i) {
    missedSymb = String.fromCharCode(firstSymb + i);
    break;
  }
}

console.log(missedSymb);
