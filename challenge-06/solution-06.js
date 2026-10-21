const fieldSize = 20;
var step = 0;
const field = Array.from({ length: fieldSize }, () =>
  Array(fieldSize).fill("."),
);

function initField() {
  const n = fieldSize * 4;
  for (let i = 0; i < n; i++) {
    let x = Math.floor(Math.random() * fieldSize),
      y = Math.floor(Math.random() * fieldSize);
    field[x][y] = "#";
  }
}

function showField() {
  for (const row of field) {
    console.log(row.map((cell) => cell).join(""));
  }
  console.log("Step ", step);
}

function calculate() {
  const grid = Array.from({ length: fieldSize }, () =>
    Array(fieldSize).fill(0),
  );

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      grid[i][j] = 0;

      for (let dx = -1; dx <= 1; dx++) {
        for (let dy = -1; dy <= 1; dy++) {
          if (dx === 0 && dy === 0) continue;

          const nx = i + dx;
          const ny = j + dy;

          if (nx >= 0 && nx < fieldSize && ny >= 0 && ny < fieldSize) {
            if (field[nx][ny] === "#") grid[i][j]++;
          }
        }
      }
    }
  }

  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (grid[i][j] > 3 || grid[i][j] < 2) {
        field[i][j] = ".";
      }
      if (grid[i][j] == 3) {
        field[i][j] = "#";
      }
    }
  }

  let number = 0;
  for (let i = 0; i < field.length; i++) {
    for (let j = 0; j < field[i].length; j++) {
      if (field[i][j] == "#") {
        number++;
      }
    }
  }

  return number;
}

function oneStep() {
  console.clear();
  showField();
  return calculate();
}

function main() {
  initField();

  const game = setInterval(() => {
    step++;
    let res = oneStep();
    if (res == 0) {
      clearInterval(game);
      showField();
      console.log("Done");
    }
  }, 150);
}

main();
