let str = "Hello, World! This is a test string.";
let arr = ["user","vatsal","King","Bing","ashdvahc","ashd","asb","ashd","ashd","ashd","ashd","ashd","ashd","ashd","ashd","ashd","ashd","ashd","ash"];

function wordByLen(str:string[],len:number){
    let result = str.filter(s => s.length == len);
    return result;
}

console.log(wordByLen(arr, 3)); // Output: [ 'user', 'King' ]
console.log(wordByLen(arr, 4)); // Output: [ 'vatsal', 'Bing' ]
console.log(wordByLen(str.split(' '),4));

export {}