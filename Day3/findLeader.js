const arr = [16, 17, 4, 3, 5, 2];


const findLeader =(array)=>{

    let n = array.length

    let result=[]

    for (let i = 0; i < n; i++) {
        let j;
        for ( j = i+1; j < n; j++) {
            if(array[j]>array[i]){
                break;
            }
        }
        if(j===n){
            result.push(array[i])
        }
    }
    return result
}

let findOutput = findLeader(arr)
console.log('findOutputin :>> ', findOutput);