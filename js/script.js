function newItem() {

  //adding new item to the list of items
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("you must write something");
  } else {
    let list = $('#list');
    list.append(li);
  }

  //crossing out an item from the list of items:
  function crossOut() {
    li.toggleClass('strike');
  }
  // adding event
  li.on("dblclick", function crossOut() {
    li.toggleClass('strike');
  });

  //adding the delete button:
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

  //adding event to crossOutButton
  crossOutButton.on("click", deleteListItem);

  //adding class delete (display:none) from the css:
  function deleteListItem() {
    li.addClass("delete")
  }

  //Reordering the items:

  $('#list').sortable();
}
