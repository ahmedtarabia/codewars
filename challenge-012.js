const sumLargestNumbers = function(data) {

  let maxNum = 0;
  for (i = 0;i < data.length;i++) {
    if(data[i] > maxNum) {
      maxNum = data[i];
    }
  }
  let maxNum2 = 0;
  for (j = 0;j < data.length;j++) {
    if (data[j] > maxNum2 && data[j] < maxNum) {
      maxNum2 = data[j]
    }
  }
  let sumNum = maxNum + maxNum2;
  return sumNum;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));