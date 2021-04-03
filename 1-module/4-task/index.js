function checkSpam(str) {
  let a = str.toUpperCase();
  if (/1XBET/.test(a) || /XXX/.test(a)) {
    console.log("содержит");
    return true;
  } 
  else {
    console.log("Не соержит");
    return false;
  }
  console.log(a);
}

console.log(checkSpam("1XbeT now"));