import { func } from "prop-types";

function calculateNumbers(value1, value2) {
    return value1 + value2;
}

// reverse a sentence
// the start of the new sentence must be capitalized
function reverseSentence(sentence) {
    let newSentence = "";
    let words = sentence.split(" ");
    for (let i = words.length - 1; i >= 0; i--) {
        newSentence += words[i] + " ";
    }
    return newSentence.trim();
}


