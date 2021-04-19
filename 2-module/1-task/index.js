let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

function sumSalary(salaries) {

  let sum = 0;

  for (const key in salaries) {
    let a = salaries[key];

    if (typeof a === "number" && !isNaN(a) && a != Infinity && a != -Infinity) {

      sum += salaries[key];

    } else {
      console.log("Нет чисел");
    }
  }

  return sum;

}

sumSalary(salaries);
