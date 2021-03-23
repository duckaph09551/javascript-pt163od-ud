let a = null,
    b = null,
    o = null;

function lam_lai() {
    a = null;
    b = null;
    o = null;
}

function toan_tu(x) {
    o = x;
}

function toan_hang(x) {
    if (a == null) {
        a = x;
    } else {
        b = x;
    }
}

function thuc_hien() {
    switch (o) {
        case "+":
            var c = a + b;
            alert("Tổng : " + c);
            break;
        case "-":
            var c = a - b;
            alert("Hiệu : " + c);
            break;
        case "x":
            var c = a * b;
            alert("Tích : " + c);
            break;
        case ":":
            var c = a / b;
            alert("Thương : " + c);
            break;
        default:
            alert(o + "Không phải toán tử");
    }
    lam_lai();
}