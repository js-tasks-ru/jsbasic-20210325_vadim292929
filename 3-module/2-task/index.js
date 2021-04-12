let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {
  let newarr = arr.slice([a],[b + 1]);

    return newarr;
}

console.log(filterRange(arr, 0 , 2));