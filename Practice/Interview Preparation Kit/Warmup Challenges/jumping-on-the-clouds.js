function jumpingOnClouds(c) {
    let i = 0;
    let jumps = 0;

    while (i < c.length) {
        // can I jump 2 steps? if not, jump only 1
        (c[i+2] !== 1) ? 
            (i += 2) : 
            (i += 1) 

        if (i <= c.length) {
            jumps++
        }
    }
    return jumps
}

console.log(jumpingOnClouds('0010010'), 'should be 4')
console.log(jumpingOnClouds('000100'), 'should be 3')