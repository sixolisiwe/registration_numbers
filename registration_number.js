function factoryRegNumbers() {
    var numbers = [];
    var get;
    var filterResults = [];

    function addregForAll(towns) {
        get = towns;
        var name = towns.substring(0,2).toUpperCase() + towns.slice(2);

        if (numbers[name] === undefined && numbers !== "") {
            numbers[name] = 0;
            numbers.push(name);
        }



    }
     
    function getList() {
        return numbers;
    }
    function getOne() {
        return get;
    }

    function tostore() {
        var to = Object.keys(numbers);
        return to.length;
    }

    function checkMalmTown(numbers) {
        var town = [];
        if (numbers.startsWith('ck')) {
            town.push(numbers)
            
        }
    }

    function getMalmtown() {
    
        numbers.filter(checkMalmTown);
    }

    function getfilterRes(){
        return filterResults;
    }

    function filterTowns(townTag){ 
        filterResults = [];
     return  numbers.filter((curentReg)=>{ 
              
                if(curentReg.startsWith(townTag)){
                    filterResults.push(curentReg)
                }
            
            
       }) 
    }


  
    

    return {
        checkMalmTown,
        addregForAll,
        getMalmtown,
        getList,
        getOne,
        tostore,
        filterTowns,
        getfilterRes
       
    }

}