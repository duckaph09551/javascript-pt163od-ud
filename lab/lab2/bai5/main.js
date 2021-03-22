let a = prompt("Mời bạn nhập số a");
let b = prompt("Mời bạn nhập số b");
let c = prompt("Mời bạn nhập số c");
let delta = Math.pow(b, 2) - 4 * a * c;

if (delta < 0) {
    alert("Phương trình vô nghiệm");
} else if (delta === 0) {
    let x0 = -b / (2 * a);
    alert(`Phương trình có nghiệm kép : ${x0}`);
} else {
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    alert(`Phương trình có 2 nghiệm phân biệt : x1 = ${x1}  và x2 = ${x2}`);
}