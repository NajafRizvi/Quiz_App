function Click(e){
    e.preventDefault();
    let name = document.getElementById("text").value
    sessionStorage.setItem("Name",name)
    console.log(name)
    location.href = "quiz.html"

}
