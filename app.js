let tg = window.Telegram.WebApp;
tg.expand();

tg.MainButton.textColor = "#FFFFFF"
tg.MainButton.color = "#FC3005"

let rbtn1 = document.getElementById("rbtn1");
let abtn1 = document.getElementById("abtn1");

let rbtn2 = document.getElementById("rbtn2");
let abtn2 = document.getElementById("abtn2");

let rbtn3 = document.getElementById("rbtn3");
let abtn3 = document.getElementById("abtn3");

let rbtn4 = document.getElementById("rbtn4");
let abtn4 = document.getElementById("abtn4");

let item = " "
let n_count1 = 0
let n_count2 = 0
let n_count3 = 0
let n_count4 = 0

count1 = document.getElementById("count1")
count2 = document.getElementById("count2")
count3 = document.getElementById("count3")
count4 = document.getElementById("count4")

number = document.getElementById("count");

abtn1.addEventListener("click", function () {

    number.innerText = n_count1 + 1;
    number.style.display = "inline-block";
})

rbtn1.addEventListener("click", function () {

    number.innerText = n_count1 - 1;
    number.style.display = "block";
})

abtn2.addEventListener("click", function () {

    number.innerText = n_count2 + 1;
    number.style.display = "block";
})

abtn2.addEventListener("click", function () {

    number.innerText = n_count2 - 1;
    number.style.display = "block";
})

abtn3.addEventListener("click", function () {

    number.innerText = n_count3 + 1;
    number.style.display = "block";
})

abtn3.addEventListener("click", function () {

    number.innerText = n_count3 - 1;
    number.style.display = "block";
})

abtn4.addEventListener("click", function () {

    number.innerText = n_count4 + 1;
    number.style.display = "block";
})

abtn4.addEventListener("click", function () {

    number.innerText = n_count4 - 1;
    number.style.display = "block";
})
btn1.addEventListener("click", function () {
    tg.MainButton.setText("Burger " + num);
    item = "Burger/3$";
    tg.MainButton.show();
});
btn2.addEventListener("click", function () {
    tg.MainButton.setText("KFC");
    item = "KFC/10$";
    tg.MainButton.show();
});
btn3.addEventListener("click", function () {
    tg.MainButton.setText("LAVASH");
    item = "LAVASH/4$";
    tg.MainButton.show();
});
btn4.addEventListener("click", function () {
    tg.MainButton.setText("Pizza");
    item = "Pizza/5$";

    tg.MainButton.show();
});

Telegram.WebApp.onEvent("mainButtonClicked", function () {
    tg.sendData(item);
});