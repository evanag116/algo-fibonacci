const fibonacci = (num) => {
    let startingNums = [0, 1]
    for(let i = 0; i < num; i++) {
        startingNums.push(startingNums[startingNums.length - 1] + startingNums[startingNums.length - 2])
    }

    return startingNums[num]
}

module.exports = {fibonacci}

