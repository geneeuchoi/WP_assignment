// 배열 합치기 - concat
let arrays1 = ["green", "red", "orange", "dark"];
let arrays2 = ["blue", "pink"];
console.log(arrays1.concat(arrays2));

// 배열 합치기 - join: 문자열로 이어주기
console.log(arrays1.join());
console.log(arrays1.join(" ")); // 구분자 추가

// 정렬 - 오름차순
arrays1.sort();
console.log(arrays1);

// 정렬 - 내림차순
// compare(다음 요소, 이전 요소)
// -1: a가 b보다 앞에 있어야 한다. 순서를 바꿔주어야 함
// 1: b가 a보다 앞에 있어야 한다.
const compare = (a, b) => {
    if (a > b) return -1;
    else if (a < b) return 1;
    else return 0;
}

// 숫자 크기 비교
let numbers = [1, 100, 25, 50, 120, 3];
numbers.sort()
console.log(numbers); // 사전순으로 정렬됨

const numCompare = (a, b) => {
    return b - a;
}

// 배열 합 구하기
let sum = 0;
numbers.forEach((number) => {
    sum += number;
})
console.log(sum);

let sum1 = numbers.reduce((acc, cur, idx) => {
    console.log(acc, cur, idx);
    return acc + cur;
})

// 전달된 매개변수가 배열인지 아닌지 확인
let a= Array.isArray([1, 2, 3]);
let b = Array.isArray({id: 1, color: "blue"});
let c = Array.isArray("string");
let d = Array.isArray(undefined);
console.log(a, b, c, d)