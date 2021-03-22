let fullName = prompt("Moi ban nhap ho ten");
fullName = fullName.toUpperCase();
let points = prompt("Moi ban nhap diem");

if (points < 5) {
    alert(`${fullName} Ban da rot`);
} else {
    alert(`${fullName} Ban da dau`);
}