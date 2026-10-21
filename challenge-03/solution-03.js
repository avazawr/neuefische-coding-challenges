var input = "4of Fo1r pe6ople g3ood th5e the2";
//var input = "";

var output;

if (input.length === 0) {
  output = "";
} else {
  var array = input.split(" "),
    sortedArray = new Array(array.length);

  for (const word of array) {
    const s = word.match(/\d+/);
    //[ '4', index: 0, input: '4of', groups: undefined ]
    sortedArray[s[0] - 1] = s.input;
  }
  output = sortedArray.join(" ");
}
console.log(output);
