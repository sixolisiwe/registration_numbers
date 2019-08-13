var inputBoxTempElement = document.querySelector(".inputBoxTemp");
var addBtnTempElement = document.querySelector(".addBtnTemp");
var radioItemTempElement = document.querySelectorAll(".radioItemTemp");
var showTownTempElement = document.querySelector(".showTownTemp");
var targetTemp = document.getElementById("dynamic-listTemp");
var isValidRegTemp = (/^([A-Z]{2}\s[0-9]{3}\s[0-9]{1})/gi);
var enterTemp = document.getElementById("enterTemp");
var errorMessageTemp = document.querySelector(".errorTemp");



var templateSource3 = document.querySelector(".userRegTemplate").innerHTML
var userRegTemplate3 = Handlebars.compile(templateSource3);
var myData3 = document.querySelector(".regNumTemp");

let TownRegNumbTemp = factoryRegNumbers();


function addErrorTemp(ErroMsg) {

    errorMessageTemp.innerHTML = ErroMsg;

}

function addingItemsTemp() {

    errorMessageTemp.innerHTML = "";
    if (inputBoxTempElement.value != undefined && inputBoxTempElement.value.trim() != "") {
        if (isValidRegTemp.test(enterTemp.value)) {
            TownRegNumbTemp.addregForAll(inputBoxTempElement.value);//appending the value
            let regN = TownRegNumbTemp.getList();
            document.getElementById("dynamic-listTemp").innerHTML = '';

            (CreatePlateTemp(regN));
            console.log(regN);

        }
        else {

            addErrorTemp('A valid reg is a one-time string of 2 letters, space, 3 numbers, space and 1-9 numbers');
        }
    } else {

        addErrorTemp('A valid reg is required!');
    }
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
            console.log(regsNumbersTemp);
            

        
    }
}
