function cheked() {
    // document.write("You are completed your quiz");
    // console.log("Hello World");
    let score = 0;
    let ans1 = document.quiz.Question1.value;
    let ans2 = document.quiz.Question2.value;
    let ans3 = document.quiz.Question3.value;
    let ans4 = document.quiz.Question4.value;
    let ans5 = document.quiz.Question5.value;
    let ans6 = document.quiz.Question6.value;
    let ans7 = document.quiz.Question7.value; 

    let res=document.getElementById('res');
    let quiz=document.getElementById('quiz');

    if (ans1 == "Delhi") score++;
    if (ans2 == "Infinite") score++;
    if (ans3 == "Jawaharlal Nehru") score++;
    if (ans4 == "12") score++;
    if (ans5 == "Cartoon Character") score++;
    if (ans6 == "Sir Issac Newton") score++;
    if (ans7 == "Australia") score++;
   
    // if(score<3)
    //     document.write(`You want more practice to qulified and you score is ${score} out of 6`);
    // else
    //     document.write(`Your score is ${score} out of 6`);

    quiz.style.display="none";
    res.textContent=`Your score is ${score}`;
    
    
}        
