let arr = [5, 3, 8, 1];

function filterRange(arr, a, b) {

  let newarr = arr.slice([a],[b]);

  console.log(newarr); 

  arr.forEach(element => {

    if (element === a) {

      console.log("dsfsd");

    }
    if (element === b) {

      newarr.push(element);
      
    }
  });
}
let filtered = filterRange(arr, 1, 4); 


console.log(filterRange(arr, 1, 4));
console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
