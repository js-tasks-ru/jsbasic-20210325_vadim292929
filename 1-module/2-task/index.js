/**
 * Эту функцию трогать не нужно
 */
 function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name != "" && !/\s/.test(name)&& name != null && name.length >= 4) {
    console.log("Yes");
    return true;
  }
  else{
    console.log("No");
    return false;

  }
}

console.log(isValid(null));

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
