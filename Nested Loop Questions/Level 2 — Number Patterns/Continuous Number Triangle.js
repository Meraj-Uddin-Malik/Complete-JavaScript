// #4

console.log("\n Continuous Number Triangle\n");

let num = 1;
let n = 4;
for(let i = 1; i<=n; i++){
let row = "";
for(let j = 1; j<=i; j++)
{
    row += num + " ";
    num++
}
console.log(row)
}