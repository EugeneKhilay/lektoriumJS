let arr = [3, 0, -5, 1, 44, -12, 3, 0, 0, 1, 2, -3, -3, 2, 1, 4, -2-3-1];
// let arr = [-1,-8,-2];
// let arr = [1,7,3];
// let arr = [1,undefined,3,5,-3];
// let arr = [1,NaN,3,5,-3];

/**
 * Exercise 2.2
 * */
function nMax(arr) {
  let maxNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if ( maxNum < arr[i] ) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}

function nMin(arr) {
  let minNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if ( minNum > arr[i] ) {
      minNum = arr[i];
    }
  }
  return minNum;
}

function nSum(arr) {
  let sumNum = arr[0];
  let i = 1;
  while (i < arr.length) {
    if (!isNaN(arr[i])) {
      sumNum += arr[i];
    }
    i++;
  }
  return sumNum;
}

function replaceMinMax(min, max) {
  for (let i = 1; i < arr.length; i++) {
    if (min === arr[i] && !isNaN(arr[i])) {
      arr[i] = 'min here';
    } else if (max === arr[i] && !isNaN(arr[i])) {
      arr[i] = 'max here'
    }
  }
  return arr;
}

/**
 * Exercise 2.3
 * */
function returnObj (arr) {
  let allInOne = {};
  allInOne.max = nMax(arr);
  allInOne.min = nMin(arr);
  allInOne.sum = nSum(arr);
  allInOne.replaceMinMax = replaceMinMax(allInOne.min, allInOne.max);
  return allInOne;
}

/**
 * Exercise 2.4
 * */
function sumMinMax(arr, minCallback, maxCallback) {
  let k = minCallback(arr) + maxCallback(arr);
  return k;
}

/**
 * Exercise 2.5
 * */
function returnObj(arr) {
  let r = {};
  arr.forEach(function (value, key) {
    r[key] = value;
  })
  return r;
}