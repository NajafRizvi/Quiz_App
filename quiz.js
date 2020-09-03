window.onload = function(){
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
  let count = 0;
  function Next(){
      count++;
      console.log(count)
      showQuestion(count)

  }
  function showQuestion(count){
      let question = document.getElementById("question")
      question.innerHTML =  `<h1 class="question"><span>${questions[count].id+1}) </span>${questions[count].question}</h1>
      <ul>
      <li class="list-button">${questions[count].options[0]}</li>
      <li class="list-button">${questions[count].options[1]}</li>
      <li class="list-button">${questions[count].options[2]}</li>
      <li class="list-button">${questions[count].options[0]}</li>
      </ul>
      
      
      `
      toggleActive()
  }
  function toggleActive() {
    let option = document.querySelectorAll("li.list-button");
    for (let i = 0; i < option.length; i++) {
      option[i].onclick = function() {
        for (let i = 0; i < option.length; i++) {
          if (option[i].classList.contains("active")) {
            option[i].classList.remove("active");
          }
        }
        option[i].classList.add("active");
      };
    }
  }
