const getTasks = () => JSON.parse(localStorage.getItem("tasks")) || [];
let i = 1;
//thêm sản phẩm
const addTask = (obj) => {
    if (obj.name != "" && obj.price != "" && obj.count != "") {
        addDataUpdateFillAndRender(i, obj.id, obj.name, obj.price, obj.count);
        i++;
    }
};

function addDataUpdateFillAndRender(index, id, name, price, count) {
    const taskItem = document.createElement("tr");
    taskItem.innerHTML = `
<tr>
 <input type="hidden" name="" id="index" value="${id}">
  <th scope="row" >${index}</th>
  <td>${name}</td>
  <td>${count}</td>
  <td>${price}</td>
  <td>
  <button class="btn btn-success btn-update"  >Sửa</button>
  <button class="btn btn-danger btn-remove" id="removes">X</button>
  </td>
</tr>
`;
    taskItem.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-remove")) {
            Swal.fire({
                title: "Xoá",
                text: "Bạn có chắc muốn xóa không",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then((result) => {
                if (result.isConfirmed) {
                    taskItem.remove();
                    const tasks = getTasks();
                    const index = tasks.findIndex((taskItem) => taskItem === name);
                    tasks.splice(index, 1);
                    localStorage.setItem("tasks", JSON.stringify(tasks));
                    Swal.fire("Xóa!", "Bạn đã xóa thành công", "success");
                }
            });
        }

        if (event.target.classList.contains("btn-update")) {
            let name = taskItem.children[2].innerText;
            let count = taskItem.children[3].innerText;
            let price = taskItem.children[4].innerText;
            document.getElementById("name").setAttribute("value", name);
            document.getElementById("count").setAttribute("value", count);
            document.getElementById("price").setAttribute("value", price);
            document.getElementById("updateSave").style.display = "block";
            document.getElementById("add").style.display = "none";
            document
                .getElementById("updateSave")
                .addEventListener("click", (event) => {
                    let indexRow = taskItem.children[0].value;
                    editSave(indexRow);
                    document.getElementById("updateSave").style.display = "none";
                    document.getElementById("add").style.display = "block";
                    clearForm();
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Bạn đã sửa dữ liệu thành công",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setTimeout(() => {
                        location.reload();
                    }, 1000);
                });
        }
    });
    document.querySelector("tbody").appendChild(taskItem);
}

function saveAdd() {
    let date = new Date();
    let name = document.getElementById("name").value;
    let price = document.getElementById("price").value;
    let count = document.getElementById("count").value;
    const item = {
        id: date.toISOString(),
        name,
        count,
        price,
    };

    if (name && price && count > 0 && count <= 10) {
        const tasks = getTasks();
        tasks.push(item);
        localStorage.setItem("tasks", JSON.stringify(tasks));
        addTask(item);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bạn đã thêm dữ liệu thành công",
            showConfirmButton: false,
            timer: 1500,
        });
    } else {
        name == "" ?
            (document.getElementById("errorsName").innerText =
                "Mời bạn nhập trường name") :
            name;
        price == "" ?
            (document.getElementById("errorsPrice").innerText = "Mời bạn nhập giá") :
            price;
        if (count == "") {
            document.getElementById("errorsCount").innerText =
                "Mời bạn nhập trường số lượng";
        } else if (count > 10) {
            document.getElementById("errorsCount").innerText =
                "Mời bạn nhập trường số lượng bé hơn 10";
        } else if (count <= 0) {
            document.getElementById("errorsCount").innerText =
                "Mời bạn nhập trường số lượng  hơn hơn 0";
        }
    }
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("price").value = "";
    document.getElementById("count").value = "";

    document.getElementById("errorsName").innerText = "";
    document.getElementById("errorsPrice").innerText = "";
    document.getElementById("errorsCount").innerText = "";

    document.getElementById("updateSave").style.display = "none";
    document.getElementById("add").style.display = "block";

    location.reload();
}

function editSave(indexRow) {
    const taskItem = getTasks();
    for (let index = 0; index < taskItem.length; index++) {
        const element = taskItem[index];
        if (element.id === indexRow) {
            taskItem[index] = {
                id: indexRow,
                name: document.getElementById("name").value,
                count: document.getElementById("count").value,
                price: document.getElementById("price").value,
            };
            localStorage.setItem("tasks", JSON.stringify(taskItem));

            break;
        }
    }
}

getTasks().forEach((element) => {
    addTask(element);
});

function functionSearch() {
    let inputFilter = document.getElementById("Search").value.toUpperCase();
    let table = document.getElementById("tableProduct");
    let tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(inputFilter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function renderSortBy(x) {
    document.querySelector("tbody").innerHTML = "";
    x.forEach((element, index) =>
        addDataUpdateFillAndRender(
            index + 1,
            element.id,
            element.name,
            element.price,
            element.count
        )
    );
}

//TODO:sort
let e = document.getElementById("ddlViewBy");
let ee = document.getElementById("inputGroupSelect01");

function showFilter() {
    let id = document.forms[0].ddlViewBy.value;
    let idIncre = document.forms[0].inputGroupSelect01.value;

    let result = getTasks();
    for (let i = 0; i < result.length; i++) {
        if (id == 3) {
            let x = result.sort((a, b) => {
                return a.price - b.price;
            });
            if (idIncre == 1) {
                let x = result.sort((a, b) => {
                    return b.price - a.price;
                });
                renderSortBy(x);
            }
            renderSortBy(x);
        } else if (id == 2) {
            let x = result.sort((a, b) => {
                return a.count - b.count;
            });
            if (idIncre == 1) {
                let x = result.sort((a, b) => {
                    return b.count - a.count;
                });
                renderSortBy(x);
            }
            renderSortBy(x);
        }
    }
}
e.onchange = showFilter;
ee.onchange = showFilter;
showFilter();

//xóa tất cả

//remove tất cả
document.querySelector(".btn-remove-all").addEventListener("click", (event) => {
    document.querySelector("tbody").innerHTML = "";
    Swal.fire({
        title: "Xoá",
        text: "Bạn có chắc muốn xóa không",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            localStorage.removeItem("tasks");
            Swal.fire("Xóa!", "Bạn đã xóa thành công", "success");
        }
    });
});