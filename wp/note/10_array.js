// 비원시타입
let arr = new Array(1, 2, 3);
let arr2 = new Array(3); // 길이가 3인 배열을 만듦
console.log(arr);
console.log(arr2);

// 배열 리터럴
let arr3 = [1, 2, 3];
let arr4 = [4];
console.log(arr3);
console.log(arr4);

// 배열 겁근(index)
let array = [1, 'hello', null]
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);

// 배열 요소 추가: push, unshift
array.push('마지막');
array.unshift('첫번째')
console.log(array);

// 배열 요소 수정 (const로 할당된 것도 수정 가능)
array[3] = '수정'
console.log(array);
// array = ['근데 얘는 안됨']

// 배열 요소 삭제: pop, shift, splice
array.pop();
console.log(array);

array.shift(); // 첫번째 요소 삭제
console.log(array);

array.splice(1, 2) // 지정된 n번째 인덱스에 해당하는 요소부터 카운트 개수만큼 삭제
console.log(array);

// 배열의 길이
console.log(array.length);