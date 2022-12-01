const fs = require("fs").promises;
const testTxt = "./test.txt";
const inputTxt = "./input.txt";

async function importTxt(file) {
  try {
    const data = await fs.readFile(file, "utf8");
    return data.split("\n\n");
  } catch (error) {
    console.log(error);
    return null;
  }
}

async function test() {
  let data = await importTxt(testTxt);
  let KnownAnswer = 24000;
  let elfs = data.map((elf) => {
    let output = elf.split("\n");
    output = output.map((element) => parseInt(element));
    return output;
  });
  console.log(elfs);
  let elfsTotal = elfs.map((elf) => {
    return elf.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  });

  elfsTotal.sort((a, b) => {
    return b - a;
  });
  let answer = elfsTotal[0];
  if (KnownAnswer == answer) {
    console.log("You Win!");
  }
  console.log(answer);
}

async function run() {
  let data = await importTxt(inputTxt);

  let elfs = data.map((elf) => {
    let output = elf.split("\n");
    output = output.map((element) => parseInt(element));
    return output;
  });
  // console.log(elfs);
  let elfsTotal = elfs.map((elf) => {
    return elf.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  });

  elfsTotal.sort((a, b) => {
    return b - a;
  });
  let answer = elfsTotal[0];
  console.log(answer);
}

run();
