// Write your tests here!
const { substitution }= require("../src/substitution");
const expect = require("chai").expect;
describe("substitution", () => {
  it("should return false if the given alphabet isn't exactly 26 characters long", () => {
    let input = "a";
    let alphabet = "abc";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should correctly translate the given phrase, based on the alphabet given to the function", () => {
    let input = "You are a boulder I am a mountain";
    let alphabet = "XYUEBZLCFJSIRWVGTKOHPDAQMN";
    let expected = "mvp xkb x yvpiebk f xr x rvpwhxfw";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should return false if there are any duplicate characters in the given alphabet", () => {
    let input = "You are a boulder I am a mountain";
    let alphabet = "xxyqmcgrukswaflnthdjpzibev";

    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.be.false;
  });
  it("should maintain spaces when decoding", () => {
    let expected = "you are a boulder i am a mountain";
    let alphabet = "XYUEBZLCFJSIRWVGTKOHPDAQMN";
    let input = "mvp xkb x yvpiebk f xr x rvpwhxfw";
    let encode = false;
    let actual = substitution(input, alphabet, encode);
    expect(actual).to.equal(expected);
  });
  it("should maintain spaces when encoding", () => {
    let input = "You are a boulder I am a mountain";
    let alphabet = "XYUEBZLCFJSIRWVGTKOHPDAQMN";
    let expected = "mvp xkb x yvpiebk f xr x rvpwhxfw";
    let actual = substitution(input, alphabet, (encode = true));
    expect(actual).to.equal(expected);
  });
  it("should ignore capitalization", () => {
    let input1 = "you are a boulder i am a mountain";
    let alphabet = "XYUEBZLCFJSIRWVGTKOHPDAQMN";
    input2 = "You are a boulder i am a mountain";
    let actual = substitution(input1, alphabet, (encode = true));
    let expected = substitution(input2, alphabet, (encode = true));

    expect(actual).to.equal(expected);
  });
});