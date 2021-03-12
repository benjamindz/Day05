function main() {
    var myNoun = "dog";
    var myVerb = "ran";
    var myAdjective = "big";
    var myAdverb = "quickly";

    var wordBlanks = "My " + myNoun + " was never so " + myAdjective + " and " + myVerb + " so " + myAdverb + ".";


    return wordBlanks;
}

console.log(main());
module.exports = main;