let sv = {
    hoTen: prompt("Ho va ten : "),
    diem: prompt("Moi ban nhap diem"),
    hienThi() {
        if (this.diem >= 5) {
            this.hocLuc = "Đậu";
            document.write(`Họ và tên : ${this.hoTen} <br>`);
            document.write(`Điểm trung bình : ${this.diem} <br>`);
            document.write(`Trạng thái : ${this.hocLuc} <br>`);
        } else {
            this.hocLuc = "Rớt";
            document.write(`Họ và tên : ${this.hoTen} <br>`);
            document.write(`Điểm trung bình : ${this.diem} <br>`);
            document.write(`Trạng thái : ${this.hocLuc} <br>`);
        }
    },
};

let btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    sv.hienThi();
});