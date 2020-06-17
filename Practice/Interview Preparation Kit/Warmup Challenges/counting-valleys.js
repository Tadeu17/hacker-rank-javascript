function countingValleys(n, s) {
    let level = 0
    let valleys = 0
    for (let i = 0; i < n; i++) {
        if (s[i] === 'U' && level === -1) {
            valleys++
        }

        (s[i] === 'U') ? level++ : level--
    }

    return valleys
}

console.log(countingValleys(8, 'UDDDUDUU'), 'should be 1')