// 유효범위(scope): 변수와 함수가 영향을 미치는 범위
// 전역, 지역, 함수, 블록 스코프

// 전역
let globalNum = 100;

function testFunc() {
    console.log(globalNum);
}

testFunc();

// 지역
let globalNum2 = 100;

function testFunc2() {
    let innerNum = 50;
    console.log(globalNum2);
    console.log(innerNum);
}

testFunc();
console.log(globalNum2);
// console.log(innerNum);

// 블록 스코프
function print() {
    for (let i = 0; i <10 ; i++) {
        console.log(i);
    }
    // console.log(i);
}

print();

// 함수 스코프
// var: 함수 스코프를 가짐. 같은 함수 내부에서만 접근 가능
// let: 블록 스코프를 가짐.
function print2() {
    for (var i = 0; i <10 ; i++) {
        console.log(i);
    }
    console.log(i);
}

print2();

// cf) var: js 초기버전 변수선언 방식. 잘 사용하지 않음.
// 특정 변수가 이미 선언되어 있는지, 어디에서 어떻게 사용되고 있는지를 판단하기 어려움
// 이는 var가 함수 스코프를 가지고 호이스팅이라는 특성을 가지기 때문임
var num = 10;
var num = 100;

console.log(num);