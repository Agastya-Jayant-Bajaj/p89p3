player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")

player1_score=0
player2_score=0

first_number=0
second_number=0

document.getElementById("player1_name").innerHTML=player1_name +"="
document.getElementById("player2_name").innerHTML=player2_name +"="

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML= "Qusetion turn="+player1_name
document.getElementById("player_answer").innerHTML= "Answer turn="+player2_name

function send(){
    get_number = document.getElementById("number").value
    number=get_number.toLowerCase()
    console.log("number in lower case="+number);

    first_number=document.getElementById("first_number");
    second_number=document.getElementById("second_number");
}