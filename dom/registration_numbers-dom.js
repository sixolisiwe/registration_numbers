var inputBoxElement = document.querySelector(".inputBox");
var addBtnElement = document.querySelector(".addBtn");
var radioItemElement = document.querySelectorAll(".radioItem");
var showTownElement = document.querySelector(".showTown");
var target = document.getElementById("dynamic-list");


let regNumb = factoryRegNumbers();


function addItem() {

    if (inputBoxElement.value != undefined && inputBoxElement.value.trim() != "") {
        var enter = document.getElementById("enter");
        regNumb.addregForAll(enter.value);

        let regPlate = regNumb.getList();
        document.getElementById("dynamic-list").innerHTML = ''
        for (let index = 0; index < regPlate.length; index++) {
            createRegPlate(regPlate[index]);
        }


    }

}

function createRegPlate(regPlate) {
    var li = document.createElement("li");
    li.textContent = regPlate;
    target.appendChild(li);
}




function filterRegTown() {
    document.getElementById("dynamic-list").innerHTML = ''
    var radioItemElement = document.querySelectorAll(".radioItem");

    for (let i = 0; i < radioItemElement.length; i++) {
        var elem = radioItemElement[i];
        if (elem.checked) {
            console.log(elem.value);

            regNumb.filterTowns(elem.value);

            let filteredResults = regNumb.getfilterRes();
            for (let index = 0; index < filteredResults.length; index++) {
                createRegPlate(filteredResults[index]);
            }
        }
    }
}

window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
});
