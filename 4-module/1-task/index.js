function makeFriendsList(friends) {
  let list = document.createElement("ul");

  for (const i of friends) {
    let listItem = document.createElement("li");

    list.appendChild(listItem);

    listItem.innerHTML += i.firstName + " " + i.lastName;
  }

  return list;
}
