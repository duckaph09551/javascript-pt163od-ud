let ptb2 = {
    a: prompt("Hệ số a:"),
    b: prompt("Hệ số b:"),
    c: prompt("Hệ số c:"),

    giai() {
        var delta = Math.pow(this.b, 2) - 4 * this.a * this.c;
        if (delta == 0) {
            alert("phương trình có nghiệm kép : " + (-this.b / 2) * this.a);
        } else if (delta > 0) {
            alert(
                "Phương trình có hai nghiệm phân biệt x1 = " +
                (-this.b + Math.sqrt(delta)) / (2 * this.a)
            );
            alert(
                "Phương trình có hai nghiệm phân biệt x2 = " +
                (-this.b - Math.sqrt(delta)) / (2 * this.a)
            );
        } else {
            alert("Phương trình vô nghiệm");
        }
    },
};
let btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
    ptb2.giai();
});