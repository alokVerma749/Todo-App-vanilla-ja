const inputDiv = document.querySelector(".input_div");
const input = document.querySelector(".input");
const addButton = document.querySelector(".addButton");
const container = document.querySelector(".container");

addButton.addEventListener("click", function handleClick() {
    let todoItem = document.createElement("DIV");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `<h2>${input.value}</h2>
                            <button class="edit" onClick="editTodo(this.parentElement)">EDIT</button>
                            <button class="delete" onClick="deleteTodo(this.parentElement)">Delete</button>`
    container.appendChild(todoItem);
    input.value = "";
});
function deleteTodo(todoItem) {
    todoItem.remove();
}
function editTodo(todoItem) {
    input.value = todoItem.firstChild.innerText;
    input.focus();
    deleteTodo(todoItem);
}