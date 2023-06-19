let drawBox = document.querySelector(".draw-box");
let inp = document.querySelector(".inp");
let data = JSON.parse(localStorage.getItem("todo"));
let todo = data == null ? [] : data;

function saveTodo() {
  if (inp.value === "") {
    return;
  }
  todo.push({
    title: inp.value,
  });
  saveLocal();
  inp.value = ""
  draw();
}
draw();
function draw() {
  let s = "";
  for (let i = 0; i < todo.length; i++) {
    s += `
            <div class="todo">
                <div class="todo-box">
                    <p class="title">${todo[i].title}</p>
                </div>
                <lord-icon
                    onclick="deleteTodo(${i})"
                    src="https://cdn.lordicon.com/gsqxdxog.json"
                    trigger="click"
                    colors="primary:#121331,secondary:#08a88a"
                    stroke="100"
                    style="width:30px;height:30px">
                </lord-icon>
            </div>
            `;
  }
  drawBox.innerHTML = s;
}

function saveLocal() {
  localStorage.setItem("todo", JSON.stringify(todo));
}


function deleteTodo(i) {
    todo.splice(i,1)
    draw()
    saveLocal()
}

