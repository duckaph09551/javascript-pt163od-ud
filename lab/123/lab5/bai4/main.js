let flag = true;
let count = 0;

function mark(item) {
    let button = document.querySelectorAll("button")[item];
    button.innerText = flag ? "x" : "o";
    button.style.backgroundColor = flag ? "aqua" : "yellow";
    button.style.cursor = "text";
    button.setAttribute("disabled", "true");
    flag = !flag;
    count++;
    if (count == 8) {
        alert("Game over");
        window.location.reload();
    }
}