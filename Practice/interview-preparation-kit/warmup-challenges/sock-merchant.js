function sockMerchant(n, ar) {
    let pairsCount = {}
    let i;

    for (i = 0; i < n; i++) {
        const currentNumber = ar[i]

        if (!(currentNumber in pairsCount)) {
            pairsCount[currentNumber] = 1;
        } else {
            pairsCount[currentNumber]++; 
        }
    }

    let result = 0;
    const values = Object.values(pairsCount);
    
    for (i = 0; i < values.length; i++) {
        result += Math.floor(values[i] /2)
    }

    return result;
}

console.log(sockMerchant(9, [10,20,20,10,10,30,50,10,20]), 'should be 3')