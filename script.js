const mainTitle = document.querySelector("#main-title");

function home() {
    document.body.style.backgroundColor = "var(--black)";
    mainTitle.textContent = "Welcome to Voidegon!";
}

function travelDiary() {
    document.body.style.backgroundColor = "salmon";
    mainTitle.textContent = "Travel Diary";
}

function characters() {
    document.body.style.backgroundColor = "#58D68D";
    mainTitle.textContent = "Characters";
}

function maps() {
    document.body.style.backgroundColor = "#F7DC6F";
    mainTitle.textContent = "Maps";
}