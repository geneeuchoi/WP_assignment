let arrays1 = ["green", "red", "orange", "dark"];
let c1 = arrays1[0];
let c2 = arrays1[1];
let c3 = arrays1[2];
let c4 = arrays1[3];

console.log(c1);
console.log(c2);
console.log(c3);
console.log(c4);

// 구조 분해 할당1
let [co1, co2, co3, co4] = arrays1

// 구조 분해 할당2
let col1, col2, col3, col4;
[col1, col2, col3, col4] = ["green", "red", "orange", "dark"];

let col5, col6, col7, col8;
[col5, col6, col7, col8, col9] = ["green", "red", "orange", "dark"];
console.log(col5, col6, col7);
console.log(col5, col6, col7, col8, col9);

// 두 값을 변경
let a = 10;
let b = 20;
[a, b] = [b, a]
console.log(a, b)