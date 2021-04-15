let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {

  let newarr = [];

  arr.forEach(element => {

    if (element >= a && element <= b) {

      newarr.push(element);

    }
  });
   return newarr;
}
