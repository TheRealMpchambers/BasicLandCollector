//Computer generates a random number
//
$(document).ready(function() {

    var computerNumber = Math.floor(Math.random() * (120 - 19) + 19);

    // console.log(computerNumber)
    $("#computerGuess").html("<p>" + "Points to get: " + "</p>" + computerNumber);

    var landOne = Math.floor(Math.random() * 11 + 1);
    var landTwo = Math.floor(Math.random() * 11 + 1);
    var landThree = Math.floor(Math.random() * 11 + 1);
    var landFour = Math.floor(Math.random() * 11 + 1);
    var score= 0; 
    var wins= 0;
    var losses = 0;

    $("#wins").html("<p>" + "Wins: " + wins + "</p>");
    $("#losses").html("<p>" + "Losses: " + losses + "</p>");
    $("#scorebox").html("<p>" + "Your points: " + score + "</p>");

    function win() {
        alert("You won! Keep playing!")
        wins++;
        $("#wins").html("<p>" + "Wins: " + wins + "</p>");
        reset ();
    }

    function lose() {
        alert("You lost! Try again.")
        losses++;
        $("#losses").html("<p>" + "Losses: " + losses + "</p>");
        reset ();
    }

    function reset() {
        computerNumber = Math.floor(Math.random() * (120 - 19) + 19);
        $("#computerGuess").html("<p>" + "Points to get: " + "</p>" + computerNumber);
        landOne = Math.floor(Math.random() * 11 + 1);
        landTwo = Math.floor(Math.random() * 11 + 1);
        landThree = Math.floor(Math.random() * 11 + 1);
        landFour = Math.floor(Math.random() * 11 + 1);
        score = 0;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
    }

    $("#landOne").click(function() {
        score = score + landOne;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })
    
    $("#landTwo").click(function() {
        score = score + landTwo;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })

    $("#landThree").click(function() {
        score = score + landThree;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })

    $("#landFour").click(function() {
        score = score + landFour;
        $("#scorebox").html("<p>" + "Your points: " + score + "</p>");
        if (score === computerNumber) {
            win();
        } else if (score > computerNumber) {
            lose();
        }
    })
});