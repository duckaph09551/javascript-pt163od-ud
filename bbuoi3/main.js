let number1;
let number2;

function input1Change(event) {
    number1 = +event.target.value;
}

function input2Change(event) {
    number2 = +event.target.value;
}

function toan_tu(x) {
    o = x;
}

function thuc_hien() {
    if (isNaN(number1) === true || isNaN(number2 === true)) {
        alert("Moi nhap so");
    } else {
        switch (o) {
            case "+":
                var c = number1 + number2;
                alert("Tổng : " + c);
                break;
            case "-":
                var c = number1 - number2;
                alert("Hiệu : " + c);
                break;
            case "x":
                var c = number1 * number2;
                alert("Tích : " + c);
                break;
            case ":":
                var c = number1 / number2;
                alert("Thương : " + c);
                break;
        }
    }
    document.querySelector("#number1").value = "";
    document.querySelector("#number2").value = "";
}