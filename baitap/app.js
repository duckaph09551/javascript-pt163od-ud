let giatri1, giatri2;
let mayTinh = {
    nhap() {
        giatri1 = document.getElementById("so1").value;
        giatri1 = parseInt(giatri1);
        giatri2 = document.getElementById("so2").value;
        giatri2 = parseInt(giatri2);
    },
    Cong() {
        mayTinh.nhap();
        let cong = giatri1 + giatri2;
        let ketqua = (document.getElementById("hienthiketqua").value = cong);
    },
    Tru() {
        mayTinh.nhap();
        let tru = giatri1 - giatri2;
        let ketqua = (document.getElementById("hienthiketqua").value = tru);
    },
    Nhan() {
        mayTinh.nhap();
        let nhan = giatri1 * giatri2;
        let ketqua = (document.getElementById("hienthiketqua").value = nhan);
    },
    Chia() {
        mayTinh.nhap();
        let chia = giatri1 / giatri2;
        let ketqua = (document.getElementById("hienthiketqua").value = chia);
    },
};