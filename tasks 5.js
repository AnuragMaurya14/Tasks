function vaildParenthesis(string){
    const stack=[];
    const pair={'(':')','{':'}','[':']'};

for (let i=0;i<string.length;i++){
    const char=string[i];
    if (char in pair){
        stack.push(char);
    } else{
        const last=stack.pop();
        if (pair[last]!==char) {
            return false;
        }
    }
}
return stack.length===0;
}
console.log(vaildParenthesis("[]"));
console.log(vaildParenthesis("[(([))]"));
console.log(vaildParenthesis("[]{}"));
console.log(vaildParenthesis("[{[}]"));