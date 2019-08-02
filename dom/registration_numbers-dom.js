var inputBoxElement = document.querySelector(".inputBox");
var addBtnElement = document.querySelector(".addBtn");
var radioItemElement = document.querySelectorAll(".radioItem");
var showTownElement = document.querySelector(".showTown");
var target = document.getElementById("dynamic-list");
var isValidReg = (/^([A-Z]{2}\s[0-9]{3}\s[0-9]{1})/gi);
var enter = document.getElementById("enter");
var errorMessage = document.querySelector(".error");

let regNumb = factoryRegNumbers();



function addError(ErroMsg) {

    errorMessage.innerHTML = ErroMsg

}

function addItem() {

    errorMessage.innerHTML = ""
    if (inputBoxElement.value != undefined && inputBoxElement.value.trim() != "") {

        if (isValidReg.test(enter.value)) {
           
            regNumb.addregForAll(enter.value);//appending the value
            let regPlate = regNumb.getList();// returns or appends the list of reg nums as per ff logic
            document.getElementById("dynamic-list").innerHTML = ''// thereafter clears the screen

            for (let i = 0; i < regPlate.length; i++) {
                createRegPlate(regPlate[i]); //works up here only to help with filtering for the show btn

            }

        }
        else {

            addError('A valid reg is a one-time string of 2 letters, space, 3 numbers, space and 1-9 numbers');
        }

    } else {

        addError('A valid reg is required!');
    }

}





function createRegPlate(regPlate) {
    var li = document.createElement("li");//new list for show button
    li.textContent = regPlate;
    target.appendChild(li);//creates and take style of my initial add button list
}




function filterRegTown() {
    document.getElementById("dynamic-list").innerHTML = '' //clears our list of regnum's upon show btn pressed
    var radioItemElement = document.querySelectorAll(".radioItem");

    for (let i = 0; i < radioItemElement.length; i++) {
        var elem = radioItemElement[i];
        if (elem.checked) {
            console.log(elem.value);

            regNumb.filterTowns(elem.value);//replacing param while checking town value entered
            let filteredResults = regNumb.getfilterRes();// returning reg nums for that town
            for (let i = 0; i < filteredResults.length; i++) {
                createRegPlate(filteredResults[i]);// assigning the for loop logic to second function
            }

        }
    }
}


window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');

});

