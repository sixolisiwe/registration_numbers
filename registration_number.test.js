describe("registration numbers", function () {
    it("should return the reg number that is passed in", function () {
        var regInstance = factoryRegNumbers();
        regInstance.addregForAll("CA 123");
        

        assert.deepEqual(['CA 123'], regInstance.getList())   

    });
    it("should return the new reg number that is passed in", function () {
        var regInstance = factoryRegNumbers();
        regInstance.addregForAll("CA 123");
        regInstance.addregForAll("CK 456");
        

        assert.deepEqual('CK 456', regInstance.getOne())   

    });
    it("should not allow the same registration number to be passed in twice", function () {
        var regInstance = factoryRegNumbers();
        regInstance.addregForAll("CA 123");
        regInstance.addregForAll("CA 123");

        assert.deepEqual(['CA 123'], regInstance.getList())   

    });

    it("should return the numbers that are for Malmesbury", function () {
        var regInstance = factoryRegNumbers();
        regInstance.addregForAll("CA 123");
        regInstance.addregForAll("CK 3578");
        regInstance.addregForAll("CA 1233")
        regInstance.filterTowns("CK 3578" );

        assert.deepEqual(["CK 3578"], regInstance.getfilterRes());   

    });

    it("should return the numbers that are for Cape Town", function () {
        var regInstance = factoryRegNumbers();
        regInstance.addregForAll("CA 3885");
        regInstance.addregForAll("CA 962")
        regInstance.addregForAll("CK 456");
        regInstance.addregForAll("CK 123");
        regInstance.filterTowns("CA 962")
        regInstance.filterTowns("CA 3885");
        

        assert.deepEqual(['CA 3885' ], regInstance.getfilterRes());   
        

    });

    it("should return empty array when reg numbers are not added and user only clicks on filter towns", function () {
        var regInstance = factoryRegNumbers();
        regInstance.filterTowns("CK 123");
        regInstance.filterTowns("CK 456");
        regInstance.filterTowns("CA 3885")
        regInstance.filterTowns("CA 3885");

        assert.deepEqual([], regInstance.getfilterRes()); 
});
it("should return empty for Malmesbury town when no reg nums for that town are not added", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("CA 3885");
    regInstance.addregForAll("CA 962")
    // regInstance.addregForAll("CK 456");
    regInstance.addregForAll("CK 123");
    regInstance.filterTowns("CK 456")
    // regInstance.filterTowns("CK 123");
    

    assert.deepEqual([ ], regInstance.getfilterRes());  


});

it("should return the numbers that are for Malmesbury", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("CA 3885");
    regInstance.addregForAll("CA 962")
    regInstance.addregForAll("CK 123");
    regInstance.addregForAll("CK 456");
    regInstance.filterTowns("CK 123" , "CK 456")
    // regInstance.filterTowns("CK 123");
    

    assert.deepEqual(['CK 123'], regInstance.getfilterRes());  
    // assert.deepEqual([ 'CK 123'], regInstance.getfilterRes()); 


});

it("should return the numbers that are for Belville", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("CA 3885");
    regInstance.addregForAll("CA 962")
    regInstance.addregForAll("CK 456");
    regInstance.addregForAll("CK 123");
    regInstance.addregForAll("CJ 855")
    regInstance.filterTowns("CJ 855")
    

    assert.deepEqual([ 'CJ 855' ], regInstance.getfilterRes()); 

});

it("should return Duplicate error message when the same number is entered twice", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("CA 3885");
    regInstance.addregForAll("CA 3885")
    
    

    assert.deepEqual(' Duplicate!', regInstance.Duplicate()); 
})

it("should return wrong location error message if reg number format is wrong", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("csgfh");
   
    
    

    assert.deepEqual(' wrong location!', regInstance.Duplicate()); 
})

it("should return invalid error message when the length has been exceeded", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("ck 8899689562");
   
    
    

    assert.deepEqual(' invalid entry!', regInstance.Duplicate()); 
})

it("should return invalid error message when there is nothing passed in the textbox", function () {
    var regInstance = factoryRegNumbers();
    regInstance.addregForAll("");
   
    
    

    assert.deepEqual(' invalid entry!', regInstance.Duplicate()); 
})
});