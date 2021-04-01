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
  if (name != "" && name !== "  " && name.length >= 4) {
    console.log("Yes");
  }
  else{
    console.log("No");
  }
  if ($.trim(val).length === 0){
    // string is invalid
 } 
}
isValid("Вася ");

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
