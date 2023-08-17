window.onload = function () {
  createList();
  setProgressBar();
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

// プログレスバーの処理
function setProgressBar() {
  const buttons = document.querySelectorAll('[data-gauge]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const gaugeType = button.getAttribute('data-gauge');
      const inputElement = button.parentElement.parentElement.querySelector('.todo-checkbox');
      if (gaugeType === 'fix') {
        const fixButton = button.parentElement.querySelector('[data-gauge="fix"]');
        const harfButton = button.parentElement.querySelector('[data-gauge="harf"]');
        const littleButton = button.parentElement.querySelector('[data-gauge="little"]');
        if (fixButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          inputElement.checked = false;
        } else {
          fixButton.classList.add('active');
          harfButton.classList.add('active');
          littleButton.classList.add('active');
          inputElement.checked = true;
        }
      }
      if (gaugeType === 'harf') {
        const fixButton = button.parentElement.querySelector('[data-gauge="fix"]');
        const harfButton = button.parentElement.querySelector('[data-gauge="harf"]');
        const littleButton = button.parentElement.querySelector('[data-gauge="little"]');
        if (fixButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          harfButton.classList.add('active');
          littleButton.classList.add('active');
          inputElement.checked = false;
        } else if (harfButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          harfButton.classList.remove('active');
          inputElement.checked = false;
        } else {
          harfButton.classList.add('active');
          littleButton.classList.add('active');
        }
      }
      if (gaugeType === 'little') {
        const fixButton = button.parentElement.querySelector('[data-gauge="fix"]');
        const harfButton = button.parentElement.querySelector('[data-gauge="harf"]');
        const littleButton = button.parentElement.querySelector('[data-gauge="little"]');
        if (fixButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          harfButton.classList.remove('active');
          littleButton.classList.add('active');
          inputElement.checked = false;
        } else if (harfButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          harfButton.classList.remove('active');
          littleButton.classList.add('active');
          inputElement.checked = false;
        } else if (littleButton.classList.contains('active')) {
          fixButton.classList.remove('active');
          harfButton.classList.remove('active');
          littleButton.classList.remove('active');
          inputElement.checked = false;
        } else {
          littleButton.classList.add('active');
        }
      }
    });
  });
}