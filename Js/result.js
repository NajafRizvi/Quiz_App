let name = sessionStorage.getItem("Name");
let point = sessionStorage.getItem("Points");
let timer = sessionStorage.getItem("Time");
document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = point;
document.querySelector(".time_taken").innerHTML = timer;