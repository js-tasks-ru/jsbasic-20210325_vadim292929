function getMinMax(str) {

  let a = str.split(",").join(" ");

  let b = a.split(" ");

  let nubers = [];

  for (const i of b) {

    let n = Number(i);

    if (!isNaN(n) ) {

      nubers.push(n);
    }
  }

  function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }

  let sortnum = nubers.sort(compare);

  let fnum = sortnum.shift(0);

  let snum = sortnum.pop(0);

  let minMaxNumbers = {
    min: fnum,
    max: snum,
  };

  return minMaxNumbers;

}

