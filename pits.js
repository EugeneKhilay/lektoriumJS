// Pits
let pits = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

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
  let water = 0;
  let curMax = arr[0];
  let leftToRight = true;
  let rightToLeft = true;
  callback = callback(arr);
  arr.forEach(function(value, key) {
    if ( leftToRight ) {
      if ( callback.key !== key ) {
        if ( curMax > arr[key + 1] ) {
          water += curMax - arr[key + 1];
          console.log(key, ' ', water);
        } else if ( callback.key !== key + 1 ) {
          curMax = arr[key + 1];
        }
      } else {
        leftToRight = false;
        return water;
      }
    }
  });
  curMax = arr[arr.length];
  for ( let i = arr.length; i >= 0; i-- ) {
    if ( rightToLeft ) {
      if ( callback.key !== i ) {
        if ( curMax > arr[i - 1] ) {
          water += curMax - arr[i - 1];
        } else if ( callback.key !== i - 1 ) {
          curMax = arr[i - 1];
        }
      } else {
        rightToLeft = false;
        return water;
      }
    }
  }
  return water;
}

getWater(pits, findMax);