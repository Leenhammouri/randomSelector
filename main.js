const addBtn = document.getElementById("addBtn");
const selectBtn = document.getElementById("selectBtn");
const list = document.getElementById("list");
const input = document.querySelector("input");
let names = [];

function addNew() {
  let inputValue = input.value;
  try {
    if (inputValue === "") {
      throw "you must enter choice first";
    }
  } catch (error) {
    window.alert(error);
  }
}
