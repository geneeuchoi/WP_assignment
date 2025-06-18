// 호이스팅을 활용하면 특정 함수의 호출이나 변수를 활용하는 코드가
// 변수의 선언문보다 위쪽에 작성되어 있더라도 에러를 발생시키지 않을 수 있음

// 호이스팅: 변수와 함수의 선언문이 해당 범위의 가장 위쪽으로 끌어올려지는 듯한 현상
// 변수 호이스팅, 함수 호이스팅

// 함수 호이스팅
concat('study', 'hoisting') // 호출이 된다.

function concat(str1, str2) {
    console.log(str1 + str2);
}

// 변수 호이스팅
// console.log(num1); // Cannot access 'num1' before initialization
let num1 = 123;

console.log(num2); // Undefined
var num2 = 124;

// var를 통해 선언하면 다음과 js 엔진은 다음과 같이 해석한다.
// var num2
// console.log(num2); // Undefined
// var num2 = 124;

// let, const로 선언한 변수는 Temporal Dead Zone(일시적인 사각지대, 변수를 사용하는 것을 허용하지 않는 공간)에 놓이게 된다.
// 변수가 초기화 될 때까지 TDZ에 대기하기 때문에(메모리에 할당하지 않기 때문에) 호이스팅이 발생하지 않는 것처럼 보인다.
// 반면 var로 선언한 변수는 바로 메모리에 변수 공간을 확보해둔다.
