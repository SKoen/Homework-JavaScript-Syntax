function checkDigit(num) {
    var word = num.toString();
    return (word[word.length - 3] == "3");
}
console.log(checkDigit(1235));
console.log(checkDigit(25368));
console.log(checkDigit(123456));