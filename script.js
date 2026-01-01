const listsElm = document.getElementsByClassName("list");
const leftBox = document.querySelector(".left");
const rightBox = document.querySelector(".right");

let selected = null;

for (const list of listsElm) {
  list.addEventListener("dragstart", function (e) {
    selected = e.target;
  });

  rightBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  rightBox.addEventListener("drop", function () {
    if (selected) {
      rightBox.appendChild(selected);
      selected = null;
    }
  });

  leftBox.addEventListener("dragover", function (e) {
    e.preventDefault();
  });

  leftBox.addEventListener("drop", function () {
    if (selected) {
      leftBox.appendChild(selected);
      selected = null;
    }
  });
}
