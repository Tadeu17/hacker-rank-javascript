function hourglassSum(arr) {
    let i, j
    let hourglassSum = []
    // we will only look to the middle bottleneck of the hourglass
    // because the input is always 6x6, we can just while i < 5
    for (i = 1; i < 5; i++) {
        for (j = 1; j < 5; j++) {
            hourglassSum.push((
                arr[i-1][j-1] +
                arr[i-1][j] +
                arr[i-1][j+1] +
                arr[i][j] +
                arr[i+1][j-1] +
                arr[i+1][j] +
                arr[i+1][j+1]
                ))
        }
    }

    return Math.max(...hourglassSum)
}

const arr = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,0,2,4,4,0],
    [0,0,0,2,0,0],
    [0,0,1,2,4,0],
]

const arr2 = [
    [1,1,1,0,0,0],
    [0,1,0,0,0,0],
    [1,1,1,0,0,0],
    [0,9,2,-4,-4,0],
    [0,0,0,-2,0,0],
    [0,0,-1,-2,-4,0],
]

console.log(hourglassSum(arr), 'should be 19')
console.log(hourglassSum(arr2), 'should be 13')