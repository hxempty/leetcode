//贪心
var maximumUnits = function (boxTypes, truckSize) {
  const arr = boxTypes.sort((a, b) => {
    return b[1] - a[1];
  });
  console.log("arr", arr);
  let rest = truckSize;
  let sum = 0; //unit number

  for (let i = 0; i < arr.length; i++) {
    if (rest >= arr[i][0] && rest) {
      rest -= arr[i][0];
      sum = sum + arr[i][0] * arr[i][1];
    } else {
      while (rest > 0) {
        console.log("rest", rest, sum);
        rest--;
        sum = sum + arr[i][1];
      }
    }
  }

  console.log("sum", sum);
  return sum;
};
