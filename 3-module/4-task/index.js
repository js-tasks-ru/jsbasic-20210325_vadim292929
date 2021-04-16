function showSalary(users, age) {

  let newarr = [];

  users.forEach(element => {
    
    if (age >= element["age"]) {

        newarr.push(element["name"]);

        newarr.push(", ");

        newarr.push(element["balance"]); 

        newarr.push("\n");
    }
  });
  
    let aa = newarr.pop(0);

    let a = newarr.join("");

    return a;
}
