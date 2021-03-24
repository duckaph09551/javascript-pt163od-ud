let height, width, cuaso;

function moCuaSo() {
    let userAgent = navigator.userAgent;
    let ie = userAgent.indexOf("MSIE") != -1;
    if (ie) {
        windth = screen.width - 100;
        height = screen.height - 100;
    } else {
        windth = screen.width - 150;
        height = screen.height - 150;
    }
    cuaso = window.open(
        "about:blank",
        "cuaso",
        "toolbar=yes,width = '+width+',height ='+height"
    );
    cuaso.window.ten = cuaso.prompt("Hãy nhập tên  bạn : ");
    cuaso.alert("Xin chào " + cuaso.window.ten);
}

function dongcs() {
    cuaso.window.close();
}

function ktcuaso() {
    if (cuaso.closed) {
        alert("Cửa sổ đã đóng");
    } else {
        alert("Cửa sổ đang mở");
    }
}

document.querySelector("#mocuaso").addEventListener("click", (event) => {
    moCuaSo();
});
document.querySelector("#dongcuaso").addEventListener("click", (event) => {
    dongcs();
});
document.querySelector("#kiemtracuaso").addEventListener("click", (event) => {
    ktcuaso();
});