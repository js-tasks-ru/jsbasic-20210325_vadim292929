function ucFirst(str) {
  if(!str){
    return str;
  }
  let a = str[0].toUpperCase() + str.slice(1);

  console.log(a);
}
ucFirst("ffcz");