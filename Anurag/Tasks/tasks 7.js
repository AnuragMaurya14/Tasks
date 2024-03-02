function dec_base(number,base) {
    if (base < 2 || base > 36) { 
    return "Not Valid Base"; 
} 
let digits = 
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let arr=[]; 
if (number===0) { 
    return "0"; 
} else if (number < 0) { 
    return "-" + dec_base(-number,base); 
} 
while (number>0) { 
    let rem =number%base; 
    arr.unshift(digits[rem]); 
    number=Math.floor(number/base); 
} 
return arr.join(''); 
} 
let number=15; 
let base=16; 
let output=dec_base(number,base); 
console.log(`The Decimal ${number} in base ${base} is: ${output}`);
