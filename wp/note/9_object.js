// 비원시 타입에 해당 {}
// 생성자 함수, 리터럴을 통해 객체 생성 가능

// 생성자 함수
// let obj = new Object();
// console.log(obj);

// 리터럴 {}
// let obj = {}
// console.log(obj);

// 객체의 속성: key-value값으로 형성된다.
let book = {
    title : "세계 최강의 주먹밥이 되는 법",
    author: "임권택",
    year: undefined
}


// 객체의 값 꺼내기 - 1. 점 표기법
console.log(book.title);

// 객체의 값 꺼내기 - 2. 괄호 표기법
// 객체의 키 값들이 고정적이지 않고 특정 함수의 매개변수에 따라 키 값을 계속해서 변경해야 하는 경우에 많이 사용
console.log(book['author']);

const getValue = key => {
    console.log(book[key]);
}

getValue('title');

// 객체 프로퍼티 추가
const cat = {
    age : 2
}

cat.name = '야옹이';
cat['color'] = 'white';
console.log(cat);

// 객체 프로퍼티 수정 (const이어도 객체 프로퍼티 값을 수정할 수 있음. 프로퍼티는 const가 아님.)
cat.name = '나비';
cat['color'] = 'black';
console.log(cat);

// 이렇게는 안됨
// cat = {
//     age : 3
// }

// 객체 프로퍼티 삭제
delete cat.color;
delete cat['age'];
console.log(cat);

// 프로퍼티에 함수가 포함되는 경우
const person = {
    name: '홍길동',
    age : 2,
    print: function() {
        console.log('프로퍼티 내 함수');
        console.log(`this를 써서 name 호출:  ${this.name}`);
    }
};

person.print();
person['print']();