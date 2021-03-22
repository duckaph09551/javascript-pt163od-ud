let x = 10 + Math.random(5 * Math.random());
let a = prompt("Số nhập vào ");

if (a === x) {
    alert("Chúc mừng bạn đã đoán đúng");
} else if (a > x) {
    alert("Giá trị của bạn lớn hơn số bí mật");
} else {
    alert("Giá trị của bạn nhỏ hơn số bí mật");
}