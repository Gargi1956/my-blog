function showMessage() {
    alert("Thanks for reading my blog!");
}
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}
function lightMode() {
    document.body.style.backgroundColor = "#f4f4f4";
    document.body.style.color = "black";
}
function welcome() {
    alert("Welcome to my blog website!");
}
var count1 = 0;

function likePost1() {
    count1 = count1 + 1;
    document.getElementById("like1").innerHTML = count1;
}
