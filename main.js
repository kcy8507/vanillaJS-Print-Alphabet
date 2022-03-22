// const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Xylophone", "November", "Chocolate", "Papaya", "Uniform", "Joker", "Clover", "Bali"];
// const alphabetical = words.reduce((a, x) => {
//   if (!a[x[0]]) a[x[0]] = [];
//   a[x[0]].push(x);
//   return a;
// }, {});
// console.log(alphabetical);

function result(x) {
  let alphabet = [...x];
  let print = alphabet.reduce((a, x) => {
    a[x] = (a[x] || 0) + 1;
    return a;
  }, {});
  console.log(print);
}
result("abbbes");
// reduce 이용

function countTxt(str) {
  let result = {};
  [...str].forEach(function (data) {
    // console.log(data);
    if (!result[data]) {
      // 객체에 data 키값이 존재하나요?
      result[data] = 1;
    } else {
      // result[data] = result[data] + 1;
      result[data]++;
    }
  });
  return result;
}
console.log(countTxt("aabbcc"));
// forEach 이용
