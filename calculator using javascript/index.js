"use strict";

var input = document.getElementById("input"),//get data by input id to get all data
    operator = document.querySelectorAll(".operators div"),//get operator data 
    number = document.querySelectorAll(".numbers div"),//get numbers data 
    result = document.getElementById("result"),//get result data equel to
    clear = document.getElementById("clear"),//clear data using clear button
    resultDisplayed = false;  //flag keep on at eye what output

//adding click handler to number button
for (let i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {

        // storing current input string and its last character in variables - used later

        var currentString = input.innerHTML;
        var lastChar = currentString[currentString.length - 1]

        // console.log("click on button");
        //if result is not displayed then keep adding
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML
            console.log("into if");
        } else if (resultDisplayed === true && lastChar === "+" || lastChar === "-" || lastChar === "÷") {
            // if result is currently displayed and user pressed an operator
            // we need to keep on adding to the string for next operation
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
            console.log("into else if");
        }
        else {
            // if result is currently displayed and user pressed a number
            // we need clear the input string and add the new input to start the new opration
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML += e.target.innerHTML;
            console.log("main else ");
        }

    })

}

