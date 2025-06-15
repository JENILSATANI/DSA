let array = [0, 1, 2, 4, 5, 7]

const findSummrayRanges = (nums) => {
    let result = []
    let start = 0;

    for (let i = 0; i < nums.length; i++) {

        if (i === nums.length || nums[i] + 1 !== nums[i + 1]) {
            if (start === i) {
                result.push(`${nums[start]}`)
            } else {
                result.push(`${nums[start]}->${nums[i]}`)

            }
            start = i + 1
        }
    }


    return result

}

let findResult = findSummrayRanges(array)
console.log('findResult :>> ', findResult);