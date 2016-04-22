'use strict';
if (this.ToDoApp === undefined) this.ToDoApp = {};

(function(context) {

function createListItems(list) {
  for (var x = 0; x < list.length; x++) {
    var li = document.createElement('li');
    li.textContent = item;
    toDoList.appendChild(li);
  }
  return li;
}





  function start() {

    var doneButton = document.querySelector('#done-button');
  }

  window.ToDoApp.start = start;

})(window.ToDoApp);
