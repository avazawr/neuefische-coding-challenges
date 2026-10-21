var input = "123456789";

var end = input.substring(input.length - 4);

var output = "#".repeat(input.length - end.length) + end;

console.log(output);
