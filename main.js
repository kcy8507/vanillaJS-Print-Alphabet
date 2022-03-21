function popAlphabet(x) {
  const arr = x.split(""); //x를 한 글자씩 쪼개줬다.
  const numArr = [];

  console.log(`입력한 배열: ${arr}`);

  arr.forEach((el, i) => {
    let count = "";
    if (numArr.includes(arr[i])) {
      count++;
      numArr.push(`${count}개`);
      //   console.log
    } else {
      count++;
      console.log(count);
      numArr.push(`${arr[i]}: ${count}개`);
    }
  });
  console.log(numArr);
}
popAlphabet("aaer");
