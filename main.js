window.onload = function () {
  createList();
}

// ボタンをクリックしたら入力内容をリストに追加する
function createList() {
  const input = document.getElementById("input-text");
  const button = document.getElementById("add-button");
  button.addEventListener("click", function () {
    const inputText = input.value;
    const ul = document.getElementById("toDo");
    const li = document.createElement("li");
    li.className = "todo-list-item";
    li.innerHTML = `
    <input type="checkbox" class="todo-checkbox" />
    <label class="todo-label">${inputText}</label>
    <div class="gauge"><button type="button" data-gauge="little">少しできた</button><button type="button" data-gauge="harf">半分</button><button type="button" data-gauge="fix">完了</button></div>
    `;
    ul.appendChild(li);
  });
}