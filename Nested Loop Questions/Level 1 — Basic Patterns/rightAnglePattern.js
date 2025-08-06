console.log("\n Print a right-angled triangle \n")

let n = 4;
for(let a = 1; a<= n; a++){
    let row1 = "";
    for(let b = 1; b<=a; b++){
        row1 += "* "
    }
    console.log(row1)
}