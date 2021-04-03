function truncate(str, maxlength) {
 let sim = "…";
  if (str.length > maxlength) {

    let b = str.slice(0, maxlength -1) + '…';
    return b;
  }
  return str;
} 

console.log(truncate("Всем привет!", 20));