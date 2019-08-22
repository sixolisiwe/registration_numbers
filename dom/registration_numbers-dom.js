var inputBoxElement = document.querySelector(".inputBox");
var addBtnElement = document.querySelector(".addBtn");
var radioItemElement = document.querySelectorAll(".radioItem");
var showTownElement = document.querySelector(".showTown");
var target = document.getElementById("dynamic-list");
var clearBtn = document.querySelector(".clearTown")
var enter = document.getElementById("enter");
var errorMessage = document.querySelector(".error");
var errMsg = document.querySelector(".error2");

var newStore = [];
if (localStorage["town"]) {
    var newStore = JSON.parse(localStorage.getItem("town"))

    for (let i = 0; i < newStore.length; i++) {
        let elemVal = newStore[i];
        document.getElementById("dynamic-list").innerHTML += "<li>" + elemVal + "</li>"

    }
}



let regNumb = factoryRegNumbers(newStore);



function addError(ErroMsg) {

    errorMessage.innerHTML = ErroMsg;

}

function clearError() {
    setTimeout(function () {
        errorMessage.innerHTML = "";
    }, 2000);

}

function StorageClear() {
    localStorage.clear();
    location.reload();
}

function addItem() {




    if (regNumb.addregForAll(enter.value)) { //appending the value
        inputBoxElement.value = '';
        errorMessage.innerHTML = "";
        let regPlate = regNumb.getList();// returns or appends the list of reg nums as per ff logic
        document.getElementById("dynamic-list").innerHTML = ''// thereafter clears the screen
        for (let i = 0; i < regPlate.length; i++) {
            createRegPlate(regPlate[i]); //works up here only to help with filtering for the show btn
        }



    } else {
        errorMessage.innerHTML = regNumb.Duplicate();

        clearError();
    }


    window.localStorage.setItem("town", JSON.stringify(regNumb.getList()))
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
                createRegPlate(filteredResults[i]);// assigning the for loop logic to second function and replacing param of function
            }

            if (elem.value === "All") {

                for (let i = 0; i < newStore.length; i++) {
                    let elemVal = newStore[i];
                    document.getElementById("dynamic-list").innerHTML += "<li>" + elemVal + "</li>"
                }
            }
        }

    }
}

clearBtn.addEventListener('click', StorageClear)

window.addEventListener('DOMContentLoaded', (event) => {
    // console.log('DOM fully loaded and parsed');

});


