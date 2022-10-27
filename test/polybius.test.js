// Write your tests here!
const { polybius } = require("../src/polybius")
const { expect }= require("chai")


describe ("polubius",()=>{
    it("should return 11 when given an a",()=>{
        let input= "a"
        let expected = "11"
        let actual = polybius(input, encode=true)
        expect(actual).to.equal(expected)
    })
    it("should return hello world when given 3251131343 2543241341",()=>{
        let input = "hello world"
        let expected = "3251131343 2543241341"
        let actual = polybius(input, encode=true)
        expect (actual).to.equal(expected)
    })
    it("when encoding translates I and J to 42",()=>{
        let input = "i"
        let input2 = "j"
        let expected = "42"
        let actual = polybius(input, encode=true)
        let actual2 = polybius(input2, encode=true)
        expect(actual2).to.equal(expected)
        expect(actual).to.equal(expected)                    //ignore capitals maintain spaces return false if odd 
    })                                                         // 
    it("It should ignore capital letters",()=>{
     let input =  "HELLO WOrld"
     let expected = "3251131343 2543241341" 
     let actual = polybius(input, encode=true)
     expect(actual).to.equal(expected)
    })
    it("should maintain spaces throughout",()=>{
        let input =  "HELLO WOrld"
        let expected = "3251131343 2543241341" 
        let actual = polybius(input, encode=true)
        expect(actual).to.equal(expected)
    })
    it("should return false if the decocer is given an odd number of digits",()=>{
        let input =  "3251131343 25432413413"
        let encode = false
        let actual = polybius(input, encode)
        expect(actual).to.be.false 
    })
})
