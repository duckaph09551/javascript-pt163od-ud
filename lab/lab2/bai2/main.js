let x = prompt("Nhập giá trị của bạn");

if (!isNaN(x) === false) {
    alert(`${x} không phải là 1 số`);
} else {
    let a = Math.sqrt(x);
    alert(`Căn bậc hai của số đã nhập là : ${a}`);

    let b = Math.pow(x, 2);
    alert(`Binh phuong của số đã nhập là : ${b}`);

    let c = Math.round(x);
    alert(`Lam tron của số đã nhập là : ${c}`);
}