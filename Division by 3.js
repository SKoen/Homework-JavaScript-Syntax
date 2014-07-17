function DivideCheck(num) {
    if (num % 3 == 0) return "the number is divided by 3 without remainder"
    else {
        return "the number is not divided by 3 without remainder"
    }
}

console.log(DivideCheck(12));
console.log(DivideCheck(188));
console.log(DivideCheck(591));