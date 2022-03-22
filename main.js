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

// let alphabet = ["a", "b", "c", "a"];
// let print = alphabet.reduce((a, x) => {
//   a[x] = (a[x] || 0) + 1;
//   return a;
// }, {});
// console.log(print);

function result(x) {
  let alphabet = [...x];
  let print = alphabet.reduce((a, x) => {
    a[x] = (a[x] || 0) + 1;
    return a;
  }, {});
  console.log(print);
}
result("abbbes");

// const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
// const alphabetical = words.reduce((a, x) => {
//   if (!a[x[0]]) a[x[0]] = [];
//   a[x[0]].push(x);
//   return a;
// }, {});
// console.log(alphabetical);
