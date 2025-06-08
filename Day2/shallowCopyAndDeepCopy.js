let originalCopy={
    name:"jpempire",
    address:{
        city:"Ahmedabad",
        country:"India"
    }
}
const shalloCopy ={...originalCopy}

/*both way you can clone the json*/

// const deepCopy =JSON.parse(JSON.stringify(originalCopy))
const deepCopy= structuredClone(originalCopy) 

shalloCopy.address.city ="dubai"

console.log('shalloCopy.address.city :>> ', shalloCopy.address.city);
console.log('deepCopy.address.city :>> ', deepCopy.address.city);


