function analyzeSentence(sentence) {
    let length = 0;
    let numWords = 0;
    let numVowels = 0;
    
    const vowels = "aeiouAEIOU";
    
    for (let i = 0; i < sentence.length; i++) {
        const char = sentence.charAt(i);
        if (char !== ' ' && char !== '.') {
            length++;
            if (vowels.includes(char)) {
                numVowels++;
            }
        } else if (char === ' ') {
            numWords++;
        }
    }
    
    return [length, numWords + 1, numVowels];
}

// Example usage
const sentence = "Hello, world. This is a test sentence.";
const [length, numWords, numVowels] = analyzeSentence(sentence);
console.log(`Length: ${length}`);
console.log(`Number of words: ${numWords}`);
console.log(`Number of vowels: ${numVowels}`);
