let strs = ["flower ", "flow", "flight"]

const findLongestPerfix = (str) => {

    if (!str || str.length === 0) return "";
    if (str.length === 1) return str[0];
    if (str.some(s => s === "")) {
        console.log('array is empty :>>');
        return "";
    }

    let perfix = ""

    for (let i = 0; i < str[0].length; i++) {

        const element = str[0][i]

        for (let j = 0; j < str.length; j++) {
            if (str[j][i] !== element) {
                return perfix
            }
        }
        perfix += element
    }
    return perfix

}

let findLongestPerfixInArray = findLongestPerfix(strs)
console.log('findLongestPerfixInArray :>> ', findLongestPerfixInArray);