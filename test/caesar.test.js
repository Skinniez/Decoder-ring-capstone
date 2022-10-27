// Write your tests here!
const { caesar }= require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
it ("should return false if no shift argument is provided", () => {
    let input = "hello"
    let shift = undefined
    let expected = false
    let actual = caesar(input, shift, encode= true)
    expect(actual).to.equal(actual)
})
it("should return false if the shift amount is 0",()=>{
    let input = "hello"
    let shift = 0
    let expected = false
    let actual = caesar(input, shift, encode= true)
    expect(expected).to.equal(actual)
})
it("should return false if the shift amount is greater than 25",()=>{
    let input = "hello"
    let shift = 30
    let expected = false
    let actual = caesar(input, shift, encode= true)
    expect(expected).to.equal(actual)
})
it ("should maintain spaces throughout as well as non alphabetic characters",()=>{
    let input = "hello, world 2022"
    let shift = 6
    let expected = "nkrru, cuxrj 2022"
    let actual = caesar(input, shift, encode= true)
    expect(expected).to.equal(actual)
})
it("should ignore capital letters",()=>{
    let input = "HELLO, WORLD 2022"
    let shift = 6
    let expected = "nkrru, cuxrj 2022"
    let actual = caesar(input, shift, encode= true)
    expect(expected).to.equal(actual)
})
it("should properly wrap if a shift exceeds the end of the alphabet",()=>{
    let input = "hello, world 2022"
    let shift = 6
    let expected = "nkrru, cuxrj 2022"
    let actual = caesar(input, shift, encode= true)
    expect(expected).to.equal(actual)
})
})