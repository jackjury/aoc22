const fs = require("fs").promises;
let inputs = {
  test: "./test.txt",
  puzzle: "./input.txt",
};

async function importTxt(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    let lines = data.split("\n");
    let output = lines.map((line) => line.split(""));
    return output;
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function run(file) {
  let data = await importTxt(file);
  let signal = data[0];
  // Find the first time all 4 chars are unique
  // Get the first 4 chars 0, 3
  //  check if they are unique
  // get the next 4 1,4
  console.log(signal);
  let start = 0;
  let end = 14;
  let found = false;
  while (!found) {
    let chunk = signal.slice(start, end);
    let valid = vaildStart(chunk);
    if (valid) {
      console.log("valid @ ", end);
      console.log(chunk);
      found = true;
    }
    start++;
    end++;
  }
  // console.log(valid);
}

function vaildStart(chunk) {
  let string = chunk.join("");
  // For each char in chunk, check how many matches there are in the string
  for (let i = 0; i < chunk.length; i++) {
    const char = chunk[i];
    // if char matches more than once in the string return false
    let matches = [...string.matchAll(char)];
    if (matches.length > 1) {
      return false;
    }
  }
  return true;
}

// run(inputs.test);
run(inputs.puzzle);
