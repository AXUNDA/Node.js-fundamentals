"use strict";
let courseName = `Back end`;
let printNumbers = (start, end) => {
    let temp = "";
    if (start < end) {
        for (let i = start; i <= end; i++) {
            temp += `${i}`;
        }
        console.log(temp);
    }
    else {
        console.log("invalid");
    }
};
printNumbers(1, 10);
