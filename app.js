let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");

let item = " "




btn1.addEventListener("click", function () {
    tg.MainButton.setText("Burger tanlandi");
    item = "button1 bosildi";
    tg.MainButton.show();
});
btn2.addEventListener("click", function () {
    tg.MainButton.setText("KFS tanlandi");
    item = "button2 bosildi";
    tg.MainButton.show();
});
btn3.addEventListener("click", function () {
    tg.MainButton.setText("Lavash tanlandi");
    item = "button3 bosildi";
    tg.MainButton.show();
});
btn4.addEventListener("click", function () {
    tg.MainButton.setText("Pizza tanlandi");
    item = "button4 bosildi";

    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});