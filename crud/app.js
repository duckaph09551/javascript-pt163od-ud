const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
let i = 0;
const addTask = (obj) => {
    const taskItem = document.createElement("tr");
    taskItem.innerHTML = `
  <tr>
      <th scope="row">${i++}</th>
      <td>${obj.name}</td>
      <td>${obj.msv}</td>
      <td>${obj.point}</td>
      <td>
          <button class="btn btn-success btn-update" onclick=(edit(${
            i - 1
          }))>Sửa</button>
          <button class="btn btn-danger btn-remove" id="removes">X</button>
      </td>
  </tr>
  `;

    taskItem.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-remove")) {
            const check = confirm(`Ban co chac muon xoa ${obj.name}`);
            if (check) {
                taskItem.remove();
                const tasks = getTasks();
                const index = tasks.findIndex((taskItem) => taskItem === obj.name);
                tasks.splice(index, 1);
                localStorage.setItem("tasks", JSON.stringify(tasks));
            }
        }

        // if (event.target.classList.contains("btn-update")) {
        //     document.getElementById("updateSave").style.display = "block";
        //     document.getElementById("add").style.display = "none";
        //     const tasks = getTasks();
        //     document.querySelector("button").innerText = "Update";
        //     let newArr = tasks.filter((tasks) => tasks.name === obj.name);

        //     document.getElementById("name ").setAttribute("value", newArr[0]["name"]);
        //     document.getElementById("msv").setAttribute("value", newArr[0]["msv"]);
        //     document
        //         .getElementById("point")
        //         .setAttribute("value", newArr[0]["point"]);

        //     document
        //         .querySelector("#updateSave")
        //         .addEventListener("click", (event) => {});
        //     // update();
        // }
    });

    document.querySelector("table").appendChild(taskItem);
};

// document.querySelector("form").addEventListener("submit", (event) => {
//     event.preventDefault();
//     const formValue = document.querySelectorAll("form input");
//     const name = formValue[0].value;
//     const msv = formValue[1].value;
//     const point = formValue[2].value;
//     const item = {
//         id: new Date().toISOString,
//         name,
//         msv,
//         point,
//     };

//     const tasks = getTasks();
//     tasks.push(item);
//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     addTask(item);
// });
function saveAdd() {
    const item = {
        id: new Date().toISOString,
        name: document.getElementById("name ").value,
        msv: document.getElementById("msv").value,
        point: document.getElementById("point").value,
    };

    const tasks = getTasks();
    tasks.push(item);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    addTask(item);
}

function edit(index) {
    const tasks = getTasks();
    document.getElementById("name ").setAttribute("value", tasks[index]["name"]);
    document.getElementById("msv").setAttribute("value", tasks[index]["msv"]);
    document.getElementById("point").setAttribute("value", tasks[index]["point"]);
    document.getElementById("index").value = index;
    document.getElementById("updateSave").style.display = "block";
    document.getElementById("add").style.display = "none";
}

function editSave() {
    const taskItem = getTasks();
    let keyNumber = document.getElementById("index").value;
    taskItem[keyNumber] = {
        name: document.getElementById("name ").value,
        msv: document.getElementById("msv").value,
        point: document.getElementById("point").value,
    };

    localStorage.setItem("tasks", JSON.stringify(taskItem));

    document.getElementById("updateSave").style.display = "none";
    document.getElementById("add").style.display = "block";
}

getTasks().forEach((element) => {
    addTask(element);
});