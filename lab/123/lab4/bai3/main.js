let now = new Date();
let h = now.getHours();
let m = now.getMinutes();
let s = now.getSeconds();

document.write(`${h} : ${m} : ${s}`);

setTimeout(() => {
    window.location.reload();
}, 1000);