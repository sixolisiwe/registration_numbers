var inputBoxTempElement = document.querySelector(".inputBoxTemp");
var addBtnTempElement = document.querySelector(".addBtnTemp");
var radioItemTempElement = document.querySelectorAll(".radioItemTemp");
var showTownTempElement = document.querySelector(".showTownTemp");
var targetTemp = document.getElementById("dynamic-listTemp");
var enterTemp = document.getElementById("enterTemp");
var errorMessageTemp = document.querySelector(".errorTemp");
var clearBtnTemp = document.querySelector(".clearTownTemp");



var templateSource3 = document.querySelector(".userRegTemplate").innerHTML
var userRegTemplate3 = Handlebars.compile(templateSource3);
var myData3 = document.querySelector(".regNumTemp");


let TownRegNumbTemp = factoryRegNumbers(newStoreTemp);

var newStoreTemp = [];
if (localStorage["townTemp"]) {
    var newStoreTemp = JSON.parse(localStorage.getItem("townTemp"))

    for (let i = 0; i < newStoreTemp.length; i++) {
        let elemValTemp = newStoreTemp[i];
        document.getElementById("dynamic-listTemp").innerHTML += "<li>" + elemValTemp + "</li>"
        
        }
}


function addErrorTemp(ErroMsgTemp) {

    errorMessageTemp.innerHTML = ErroMsgTemp;


}

function clearErrorTemp() {
    setTimeout(function () {
        errorMessageTemp.innerHTML = "";
    }, 2000);

}
function StorageClearTemp() {
    localStorage.clear();
    location.reload();
}


function addingItemsTemp() {

    
    if(TownRegNumbTemp.addregForAll(inputBoxTempElement.value)){//appending the value
        inputBoxTempElement.value = '';
        errorMessageTemp.innerHTML = "";

    let regN = TownRegNumbTemp.getList();
    document.getElementById("dynamic-listTemp").innerHTML = '';

    (CreatePlateTemp(regN));

    
    }else {
        errorMessageTemp.innerHTML = TownRegNumbTemp.Duplicate();

        clearErrorTemp();
    }



    window.localStorage.setItem("townTemp", JSON.stringify(TownRegNumbTemp.getList()))
}





function CreatePlateTemp(regNumber) {
    var makePlate = { regNumber };
    var toMake = userRegTemplate3(makePlate)
    myData3.innerHTML = toMake

}

function filterRegTownTemp() {
    document.getElementById("dynamic-listTemp").innerHTML = '' //clears our list of regnum's upon show btn pressed
    var townTag = document.querySelector("input[name = 'radioBtnTemp']:checked");

    TownRegNumbTemp.filterTowns(townTag.value);
    let filteredResultsTemp = TownRegNumbTemp.getfilterRes();// returning reg nums for that town
    console.log(filteredResultsTemp, 'here');
    CreatePlateTemp(filteredResultsTemp);


    if (townTag.value === "AllTemp") {
        let regsNumbersTemp = TownRegNumbTemp.getList();
        CreatePlateTemp(regsNumbersTemp);


    }
}
clearBtnTemp.addEventListener('click', StorageClearTemp)

