//const input = []; // -->  "no one likes this"
//const input = ["Peter"]; // -->  "Peter likes this"
//const input = ["Jacob", "Alex"]; // --> "Jacob and Alex like this"
//const input = ["Max", "John", "Mark"]; // -->  "Max, John and Mark like this"
const input = ["Alex", "Jacob", "Mark", "Max"]; //-->  "Alex, Jacob and 2 others like this

var peopleNumber = input.length,
  output = "no one likes this";

if (peopleNumber == 1) {
  output = input + " likes this";
}
if (peopleNumber == 2) {
  output = `${input[0]} und ${input[1]} like this`;
}
if (peopleNumber == 3) {
  output = `${input[0]}, ${input[1]} und ${input[2]} like this`;
}
if (peopleNumber > 3) {
  output = `${input[0]}, ${input[1]} and 2 others like this`;
}

console.log(output);
