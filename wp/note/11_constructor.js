// 객체, 배열 생성
// 생성자 함수는 대문자로 작성함

function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('이름', '12'); // person1은 인스턴스
console.log(person1);