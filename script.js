document.querySelector("#startBtn").addEventListener("click",function(){
    document.querySelector(".start").style.display= "none"
    displayquestion()
})
var questions = [
    {
       question:"question goes here",
       choices:["a","b","c","d"],
       answer:"a"
    },
    {
        question:"question goes here",
        choices:["a","b","c","d"],
        answer:"a"
     },
     {
        question:"question goes here",
        choices:["a","b","c","d"],
        answer:"a"
     },
]
var questionindex = 0
function displayquestion(){
document.querySelector(".question-text").innerText=questions[questionindex].question
document.querySelector(".btn1").innerText= questions[questionindex].choices[0]
document.querySelector(".btn2").innerText= questions[questionindex].choices[1]
document.querySelector(".btn3").innerText= questions[questionindex].choices[2]
document.querySelector(".btn4").innerText= questions[questionindex].choices[3]
}
function checkanswer(event){
    var choice = event.target.innerText
    var correct = questions[questionindex].answer
    if (choice===correct){
    console.log(correct)
    }
    
}

//check to see if things are right or wrong. increase the value of question index to display the next question