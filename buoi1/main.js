// kiem tra co phai so nguyen to hay khong
var x = prompt("Moi ban nhap vao mot so : ");
const kiemTraSoNguyenTo = (n) => {
    if (n < 2) {
        const el = document.createElement("p");
        el.innerText = `Số ${x} khong hop le1`;
        document.querySelector(".text").appendChild(el);
        return false;
    }
    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) {
            const el = document.createElement("p");
            el.innerText = `Số ${x} khong phai số nguyên tố`;
            document.querySelector(".text").appendChild(el);

            return false;
        }
    }
    // return true;
    // console.log("Đây là số nguyên tố");
    const el = document.createElement("p");
    el.innerText = `Số ${x} là số nguyên tố`;
    document.querySelector(".text").appendChild(el);
};

// console.log(kiemTraSoNguyenTo(Number(x)));
kiemTraSoNguyenTo(Number(x));