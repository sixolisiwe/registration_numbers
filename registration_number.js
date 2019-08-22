function factoryRegNumbers(reg) {
    var numbers = reg || [];
    var get;
    var filterResults = [];
    var error = ""
    var isValidReg = (/[!@#$%^&*(),.'?":+`?~{}|<>]/gi);

    function addregForAll(towns) {

        get = towns;

        var name = towns.substring(0, 2).toUpperCase('') + towns.slice(2);
        var regEx = isValidReg.test(name)
        if (regEx === false && name.length > 0 && name.length <= 10) {
        if (name.startsWith('CA ') || name.startsWith('CJ ') || name.startsWith('CK ')){


                if (!numbers.includes(name)) {
                    numbers.push(name)
                    return true;
                }
                else {

                    error = " Duplicate!"
                }
            }
            else {
                error = " wrong location!"
            }
        }
        else {
            error = " invalid entry!"
        }
    }
    function Duplicate() {
        return error;
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
            console.log(curentReg);
        })
    }

    function getfilterRes() {
        return filterResults;
    }
    return {
        addregForAll,
        getList,
        getOne,
        filterTowns,
        getfilterRes,
        Duplicate

    }

}