var codeContainer = document.getElementById("code-container");
var clickCounter = 0;
var numberOne;
var numberTwo;
var numberThree;

function getNumber(clickedButton)
{

    clickCounter++;

    codeContainer.innerHTML += clickedButton.value;

    if(clickCounter == 1)
    {
        numberOne = clickedButton.value;
    }

    else if(clickCounter == 2)
    {
        numberTwo = clickedButton.value;
    }

    else
    {
        numberThree = clickedButton.value;
    }

    if(numberOne == 3 && numberTwo == 1 && numberThree == 2)
    {
        var element = document.getElementById("unlock");
        element.classList.add("blink-green");
        var audio = new Audio("sound/victory_fanfare.mp3");
        audio.play();
        alert("Code is correct");
    }

    else if(clickCounter == 3)
    {
        var element = document.getElementById("lock");
        element.classList.add("blink-red");
        var audio = new Audio("sound/loser.mp3");
        audio.play();
        alert("Code is incorrect");
    }

    if(clickCounter == 3)
    {
        document.getElementById("button-container-number-1").disabled = true;
        document.getElementById("button-container-number-2").disabled = true;
        document.getElementById("button-container-number-3").disabled = true;
    }

    document.getElementById("again-button").reset();
    
    console.log(numberOne);
    console.log(numberTwo);
    console.log(numberThree);
}