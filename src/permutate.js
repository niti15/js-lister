const permArr = [];
const usedChars = [];

const permute = (arr) => {
  for (let i = 0, ch; i < arr.length; i++) {
    ch = arr.splice(i, 1)[0];
    usedChars.push(ch);
    if (arr.length == 0) {
      permArr.push(usedChars.slice());
    }
    permute(arr);
    arr.splice(i, 0, ch);
    usedChars.pop();
  }
  return permArr;
};

const result = JSON.stringify(permute([5, 3, 7, 1]));
console.log(result);
