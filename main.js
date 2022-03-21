// function printAlphabet(x) {
//   let alphabet = [...x]; //alphabet이라는 배열에 넣었음.
//   let print = {}; //print라는 새로운 객체를 만들어줬다.
//   console.log(`입력한 배열: ${alphabet}`);

//   let count = ""; // 갯수를 세기 위해 count 변수를 만들어주고 반복문 전에 초기화 해줌.
//   alphabet.forEach((el, i) => {
//     if ("a" in print) {
//       print = count++;
//       console.log(print, count);
//     } else {
//       print.push(count);
//     }
//   });
//   console.log("결과", print);
// }
// printAlphabet("aabc");

let alphabet = ["a", "b", "c", "a"];
let print = {};
let count = "";

alphabet.forEach((word, i) => {
  // console.log(Object.keys(print), word);
  console.log(alphabet[i]);
  if (("a", "b", "c")) {
    print[word] = count;
    count++;
  } else {
    print[word] = count;
  }
  console.log(print);
});
