// Pits
let pits = [2, 1, 5, 0, 3, 4, 7, 2, 3, 7, 0];

function findMax(arr) {
  let maxElement = {};
  maxElement.key = 0;
  maxElement.value = 0;
  arr.forEach(function (value, key) {
    if (maxElement.value <= value) {
      maxElement.key = key;
      maxElement.value = value;
    }
  })
  return maxElement;
}

function getWater(arr, callback) {
  let highest = callback.value;
  let water = 0;
  let curMax = arr[0];
  let leftToRight = true;
  callback = callback(arr);
  console.log('max ',curMax);
  arr.forEach(function(value, key) {
    if (leftToRight) {
      if ( curMax > arr[key + 1]) {
        water += curMax - arr[key + 1];
        console.log(key, ' ', water);
      } else if ( callback.key !== key + 1 ) {
        curMax = arr[key + 1];
        console.log('max ',curMax);
      } else {
        leftToRight = false;
        console.log('water ', water);
        return water;
      }
    } else {
      if (highest !== curMax) {
        if (value < arr[key + 1]) {
          water += arr[key + 1] - value;
        }
      }
    }
  });
  return water;
}

getWater(pits, findMax);