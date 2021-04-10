let giatri1, giatri2;
let kiemtra = {
    nhap() {
        giatri1 = document.getElementById("so1").value;
        giatri1 = parseInt(giatri1);
        giatri2 = document.getElementById("so2").value;
        giatri2 = parseInt(giatri2);
    },
    ketqua() {
        kiemtra.nhap();
        if (giatri1 < 5 || giatri2 < 5) {
            document.getElementById("kq").innerText = "Bạn đã tạch môn";
        } else if (giatri1 > 5 && giatri2 > 5 && giatri1 < 9 && giatri2 < 9) {
            document.getElementById("kq").innerText = "Bạn đã Qua mon";
        } else if (giatri1 >= 9 && giatri2 >= 9) {
            document.getElementById("kq").innerText = "Bạn là Ong vang";
        }
    },
};