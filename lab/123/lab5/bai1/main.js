function result() {
    let pro = document.getElementById("pro").innerText;
    let name = (document.getElementById("name").innerText = pro);
    let price = document.getElementById("pro").getAttribute("data-price");
    let count = document.getElementById("qty").value;

    let sum = +price * +count;

    document.getElementById("amount").innerText = `$ ${sum}`;
}