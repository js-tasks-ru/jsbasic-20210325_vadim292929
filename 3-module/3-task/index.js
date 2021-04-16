function camelize(str) {
  
  let newstr = str.split('-');

  for (let i = 0; i < newstr.length; i++) {

    if (i > 0) {

      newstr[i] = newstr[i][0].toUpperCase() + newstr[i].slice(1);

    }
  }

  str = newstr.join('');
  return str;
}