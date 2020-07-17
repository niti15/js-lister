// sorting by using bubble sort algorithm
const bubbleSort = (arr) => {
  for (var j = 0; j < arr.length - 1; j++) {
    for (var i = 0, tempVar; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        tempVar = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = tempVar;
      }
    }
  }
  return arr;
};

// sorting the odd numbers and then even numbers
function sort(arr) {
  let oddArr = [];
  let evenArr = [];
  arr.forEach((value) => {
    if (value % 2 == 0) {
      evenArr.push(value);
    } else {
      oddArr.push(value);
    }
  });
  oddArr = bubbleSort(oddArr);
  evenArr = bubbleSort(evenArr);
  return [...oddArr, ...evenArr];
}

// console.log(sort([1, 2, 4, 7, 16, 3]));

module.exports = { sort };
