function repeatedString(s, n) {
    let totalSubstringAs = 0
    let remainingSubstringSize = (n % s.length)
    let remainingSubstringAs = 0
    let i

    for(i = 0; i< s.length; i++) {
        // how many As does 1 single substring have?
        if (s[i] === 'a') {
            totalSubstringAs++
            
            // the total substring will fit a number of times in the N array. there will be a substring left. 
            // e.g. s=ab && n=11, ab.length==2, so ab fits 5 times in N (2 x 5 = 10), and there is 2 substring.length remaining
            // we calculate the As in this remaining substring
            (i < remainingSubstringSize) && remainingSubstringAs++
        }
    }

    // how many times does the substring fit in the total array? then add the remaining As
    return (Math.floor(n / s.length) * totalSubstringAs) + remainingSubstringAs
}

console.log(repeatedString('aba', 10), 'should be 7')
console.log(repeatedString('a', 1000000000000), 'should be 7')