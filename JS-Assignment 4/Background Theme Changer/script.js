let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");
let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");

box1.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(45deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%)";
});

box2.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)";
});

box3.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(45deg, rgba(63, 94, 251, 1) 0%, rgba(252, 70, 107, 1) 100%)";
});

box4.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(90deg, rgba(131, 58, 180, 1) 0%, rgba(253, 29, 29, 1) 50%, rgba(252, 176, 69, 1) 100%)";
});

box5.addEventListener("click", function() {
    document.body.style.background = "linear-gradient(60deg, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%)";
});