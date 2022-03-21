function printAlphabet(x) {
  let alphabet = [...x];
  let print = {};
  console.log(`입력한 배열: ${alphabet}`);

  let count = "";
  alphabet.forEach((el, i) => {
    if (alphabet[0]) {
      print[el] = count++;
    }
  });
  console.log(print);
}
printAlphabet("aabc");
