function IsPrime(num) {
    count = 0;
    for (i = 0; i < num; i++) {
        if (num % i == 0) count++;
    }
    return(count<2?true:false);
}

console.log(IsPrime(7));
console.log(IsPrime(254));
console.log(IsPrime(257));