function factoryRegNumbers() {
    var numbers = [];
    var get;
    var filterResults = [];

    function addregForAll(towns) {

        get = towns;
        var name = towns.substring(0, 2).toUpperCase() + towns.slice(2);

        if (!numbers.includes(name)) {
            numbers.push(name)
            return name;
        }

        // var name = towns.substring(0, 2).toUpperCase() + towns.slice(2);

        // if (numbers[name] === undefined && numbers !== "") {
        //     numbers[name] = 0;
        //     numbers.push(name);
        // }

    }

    function getList() {
        return numbers;
    }
    function getOne() {//to return per plate

        return get;
    }



    function filterTowns(townTag) {
        filterResults = [];
        return numbers.filter((curentReg) => {

            if (curentReg.startsWith(townTag)) {
                filterResults.push(curentReg)
            }
        })
    }

    function getfilterRes() {
        return filterResults;
    }
console.log(filterResults);
    return {
        // checkMalmTown,
        addregForAll,
        // getMalmtown,
        getList,
        getOne,
        // tostore,
        filterTowns,
        getfilterRes

    }

}