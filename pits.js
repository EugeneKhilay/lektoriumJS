/**
 *  Exercise 2.1: Pits
 */

let pits = [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0];

// Fin max value and it's key in array
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
  let arrMax = callback(arr);

  // Crawl from left to max element
  arr.forEach(function(value, key) {
    if ( leftToRight ) {
      if ( arrMax.key !== key ) {
        if ( curMax > arr[key + 1] ) {
          water += curMax - arr[key + 1];
        } else if ( arrMax.key !== key + 1 ) {
          curMax = arr[key + 1];
        }
      } else {
        leftToRight = false;
        return water;
      }
    }
  });

  // Crawl from right to max element
  curMax = arr[arr.length];
  for ( let i = arr.length; i >= 0; i-- ) {
    if ( rightToLeft ) {
      if ( arrMax.key !== i ) {
        if ( curMax > arr[i - 1] ) {
          water += curMax - arr[i - 1];
        } else if ( arrMax.key !== i - 1 ) {
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

console.log('Water: ', getWater(pits, findMax));