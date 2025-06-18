// 원시타입: 한번에 하나의 값만 가지는 타입. null, Bigint, boolean
// 비원시타입: 한번에 여러 개의 값을 가지는 타입. 객체, 함수, 배열
// 동적타입언어: js는 변수 선언 시 변수 자료형 미리 작성하지 않아도 됨

// typeof: 타입 반환
let num = 10;
console.log(typeof num);

// 숫자형
let num1 = 2;
let num2 = 10.00001;
let num3 = Infinity;
let num4 = 100 / 0;
let num5 = NaN;
let num6 = 'javascript' / 10;
let numArr = [num1, num2, num3,  num4, num5, num6];

for (let i = 0; i < numArr.length; i++) {
    console.log(`${numArr[i]}: ${typeof numArr[i]}`);
}

// bigint: -(2^53-1) ~ 2^53-1
let bigNum1 = 999999999999999999999999999n;
let bigNum2 = BigInt("999999999999999999999999999")
console.log(`${bigNum1}: ${typeof bigNum1}`);
console.log(`${bigNum2}: ${typeof bigNum2}`);

// string: ' ' == " "
let name = 'hyobin'
console.log(typeof name);

name = "eugene"
console.log(typeof name);

// backtick(string) ``
let intro = `제 이름은 ${name}입니다`
console.log(`${intro}: ${typeof intro}`);

// boolean
let isClicked = false;
console.log(`${isClicked}: ${typeof isClicked}`);

// Null: 존재하지 않거나 알 수 없는 값
let nullVariable = null
console.log(`${nullVariable}: ${nullVariable===null}`);

// Undefined: null형처럼 존재하지 않거나 알 수 없는 값이 아닌 아직 값이 할당되지 않은 상태
let undefinedVariable;
console.log(`undefinedVariable: ${typeof undefinedVariable}`);

// 형변환 - 묵시적 형변환, 명시적 형변환
// 묵시적 형변환: 자료형이 자동으로 형변환

num1 = '15'
num2 = 5
console.log(num1/num2); // 자동으로 숫자형으로 형변환됨

// 명시적 형변환: 의도적으로 자료형 변환
console.log(num1+num2) // 더하기 시에는 문자열로 변환해줌
console.log(parseInt(num1)+num2)