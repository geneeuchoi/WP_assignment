for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 배열 for문
let arr = [1, 2, 3, 4];
for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

let person = {
    name: 'John',
    age: 32,
    height: 150
}

// 객체 key값 조회
let newArray = Object.keys(person);
for(let i = 0; i < newArray.length; i++) {
    let nowKey = person[newArray[i]];
    console.log(nowKey);
}

// 객체 value값 조회
let newArray2 = Object.values(person);
for(let i = 0; i < newArray2.length; i++) {
    console.log(newArray2[i]);
}

// key와 value 값을 배열로 반환
console.log(Object.entries(person));

// for-of문: 배열의 모든 요소 순회
let arr2 = [1, 2, 3, 4];
for (const number of arr2) {
    console.log('for-of:', number);
}

// for-in: 주로 객체에 사용
for (const personKey in person) {
    console.log('key:' + personKey + ', value: ' + person[personKey]);
}

// while문
let i = 1;
while (i < 6) {
    console.log(i);
    i++;
}