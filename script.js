var arr = [2, 8, 4, 15, 6];
var sum = null;
var dif = null;

var sumDif = function (arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    sum = arr[i] + arr[i + 1];
    console.log(sum);
  }

  for (let i = 0; i < arr.length - 1; i++) {
    dif = arr[i] - arr[i + 1];

    console.log(dif);
  }
};
sumDif(arr);
