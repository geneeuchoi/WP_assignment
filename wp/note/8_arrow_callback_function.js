// 화살표 함수: ES6 이후 문법, function 키워드 대신 화살표 모양을 사용해서 만든 함수

// 함수 선언식: 호이스팅 가능
// function func() {
//     console.log('함수 선언식')
// }

// 함수 표현식: 변수에 함수를 마치 하나의 값처럼 할당, 호이스팅 불가능(const 사용)
// const func = () => {
//     console.log('함수 선언식')
// };

// 함수 표현식은 익명함수처럼 할당할 수도 있다.
// const func = function() {
//     console.log('함수 선언식')
// }

const add = function (num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));


const add2 = (num1, num2) => num1 + num2;
console.log(add2(1, 2));

// 콜백 함수: 다른 함수의 매개변수로 넘겨준 함수
const printResult = (a, b) => {
    let result = a + b;
    console.log(`결과 : ${result}`);
}

const doubleResult = (a, b) => {
    let result = a + b;
    console.log(`결과에 2를 곲한 값 : ${result * 2}`);
}

printResult(5, 3)
doubleResult(5, 3)

const calculate = (a, b, callback) => {
    let result = a + b;
    callback(result);
}

const printResultCallBack = (result) => {
    console.log(`결과 : ${result}`);
}

const doubleResultCallBack = (result) => {
    console.log(`결과에 2를 곲한 값 : ${result * 2}`);
}

calculate(5, 3, printResultCallBack);
calculate(5, 3, doubleResultCallBack);

// callback 함수를 arrow 함수로 변환
const testFunc = (callback) => {
    let a = 'hello world';
    callback(a);
}

testFunc((a) => {
    console.log(a);
})

testFunc(function(a) {
    console.log(a);
})