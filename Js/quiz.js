window.onload = function () {
  showQuestion(0);
}
let questions = [
  {
    id: 0,
    question: "What is the full form of RAM ?",
    answer: "Random Access Memory",
    options: [
      "Random Access Memory",
      "Randomely Access Memory",
      "Run Aceapt Memory",
      "None of these"
    ]
  },
  {
    id: 1,
    question: "What is the full form of CPU?",
    answer: "Central Processing Unit",
    options: [
      "Central Program Unit",
      "Central Processing Unit",
      "Central Preload Unit",
      "None of these"
    ]
  },
  {
    id: 2,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
      "Electronic Mail",
      "Electric Mail",
      "Engine Mail",
      "None of these"
    ]
  }
];
// Global Varibales which is used in Next function
let count = 0;
let points = 0;
sessionStorage.setItem("Points", points)
function Next() {
  let userAnswer = document.querySelector("li.list-button.active").innerHTML
   // Calculate the Quiz points
   if (userAnswer == questions[count].answer) {
    points += 10
    sessionStorage.setItem("Points", points)
  }
  // Redirect to the Answer Page
  if (count == questions.length - 1) {
    location.href = "Result.html"
    sessionStorage.setItem("Time",`${minutes} mintues and ${seconds} seconds`)
    clearInterval(mytime)
    return
  }
  // **********************************
  // *************************************
  count++;
  showQuestion(count)

}
function showQuestion(count) {
  let question = document.getElementById("question")
  question.innerHTML = `<h1 class="question"><span>${questions[count].id + 1}) </span>
                        ${questions[count].question}</h1>
                        <ul>
                        <li class="list-button">${questions[count].options[0]}</li>
                        <li class="list-button">${questions[count].options[1]}</li>
                        <li class="list-button">${questions[count].options[2]}</li>
                        <li class="list-button">${questions[count].options[3]}</li>
                        </ul> `
  ShowName();
  toggleActive()
}
// This function works for select quiz options
function toggleActive() {
  let option = document.querySelectorAll("li.list-button");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function () {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
function ShowName(){
  let name = sessionStorage.getItem("Name");
  let Name = document.getElementById("name-heading");
  Name.innerHTML = `Welcome: ${name} <span class="badge badge-primary badge-pill time">00:00</span>`
  console.log(name)


}
