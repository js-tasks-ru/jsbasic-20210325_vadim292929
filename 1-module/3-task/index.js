function ucFirst(str) {
  if (str != "") {
    let a = str.charAt(0).toUpperCase() + str.slice(1);

    return a;

  } else {

    return str;

  }
  
}

console.log(ucFirst(""));
