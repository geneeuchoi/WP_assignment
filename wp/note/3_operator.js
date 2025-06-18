// 연산자: 프로그래밍 언어에서 특정 연산을 할 수 있게 도와주는 기호
// 사직연산, 비교연산, 문자형 데이터 연결

// 산술 연산자: +. -, *, /
let num1 = 10;
let num2 = 5;

console.log(num1+num2);
console.log(num1-num2);
console.log(num1/num2);
console.log(num1*num2);
console.log(num1%num2);

// 증감 연산지
console.log(num1++); // 후위연산
console.log(num1);
console.log(++num1); // 전위연산

console.log(num2--); // 후위연산
console.log(num2);
console.log(--num2); // 전위연산

// 대입 연산자 =
let num3 = 10;
num3 = num3 + 5;
console.log(num3);
console.log(num3 += 5);

// 비교 연산자 ===, ==, >, <
// ===는 자료형까지 같은지, == 자료형은 보지 않고 값만 일치하는지 확인
let num4 = 10;
let num5 = "10";
console.log(num4 === num5); // false
console.log(num4 == num5); // true

console.log(num4 !== num5); // true
console.log(num4 != num5); // false

// 대소 비교 연산자
let a = 10;
let b = 20;
let c = 10;

console.log(a < b);
console.log(a > b);
console.log(b >= c);
console.log(b <= c);

// 연결 연산자: + (문자열이 하나라도 있을 시 연결 연산자로 변환됨)
let price = 10000;
console.log("가격: " + price + "원");

// 논리 연산자: NOT OR AND
let isClicked = true;
let isOpened = false;
console.log(!isClicked);
console.log(!isOpened);

console.log(true || false); // OR
console.log(true || true);
console.log(true && false); // AND
console.log(true && true);

// Null 병합 연산자: A ?? B A값이 Null이거나 Undefined이면 오른쪽, 아니라면 왼쪽값 반환
let num6;
let num7 = 5;

console.log(num6 ?? 20); // num6이 undefined이기 때문에 오른쪽 값 출력
console.log(num7 ?? 20); // num7이 undefined이 아니기 때문에 왼쪽 값 출력

// 삼항 연산자: A? B:C A 조건문이 true면 B, 아니면 C 반환
let num8 = 100;
let result = num8 % 2 === 0? "짝수" : "홀수";
console.log(result);