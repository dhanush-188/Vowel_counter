function countVowels() {
    let text = document.getElementById("inputText").value; //taking every text inside the textarea
    let vowelCount = 0;

    text = text.toLowerCase(); // coverts every char into lowercase

    //counting the number of vowels
    for (let i = 0; i < text.length; i++) {
        let char = text.charAt(i); //extracting every char
        if (isVowel(char)) {
            vowelCount++;
        }
    } 

    //assigning the result
    const result = document.getElementById("result");
    result.textContent = `Number of Vowels: ${vowelCount}`; //displaying the result

}

//checking if the char is a vowel
function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char);
}
