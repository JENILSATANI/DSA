//Climbing stars
const climbStars = (n)=>{
    if(n===0 || n===1 ) return 1;

    let prev=1,curr=1
   
for(let i=2;i<=n;i++){
    let next = prev+curr;
    prev =curr;
    curr =next;

}
return curr
}

console.log('cl :>> ', climbStars(3));

/*The algorithm follows the Fibonacci pattern where each position equals
the sum of the two previous positions, which is exactly what the stair 
climbing problem requires*/