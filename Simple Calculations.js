function FloorAndRound(num) {
    var floor = Math.floor(num);
    var round = Math.round(num);
    return [floor, round];
}


console.log(FloorAndRound(22.7)[0] + "\n" + FloorAndRound(22.7)[1])
console.log(FloorAndRound(12.3)[0] + "\n" + FloorAndRound(12.3)[1])
console.log(FloorAndRound(58.7)[0] + "\n" + FloorAndRound(58.7)[1])