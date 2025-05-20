class Worker {
// 이곳을 구현하시오...
    constructor(name, sex, age, department, telephone, address) {
        this.name = name;
        this.sex = sex;
        this.age = age;
        this.department = department;
        this.telephone = telephone;
        this.address = address;
    }
}

let workers = [
    new Worker('김창훈', 'M', 28, '총무부', '010-3838-8577', '경기도 용인시'),
    new Worker('장종훈', 'M', 38, '총무부', '010-3347-7474', '서울시 강동구'),
    new Worker('안달훈', 'M', 28, '인사과', '010-3744-4747', '강원도 정선군'),
    new Worker('이세영', 'F', 48, '경리부', '010-3736-4784', '전라북도 전주시'),
    new Worker('김예은', 'F', 52, '총무부', '010-2845-8978', '강원도 강릉시'),
    new Worker('김영철', 'M', 32, '홍보부', '010-2222-3334', '경기도 용인시'),
    new Worker('도철수', 'M', 23, '홍보부', '010-1235-3788', '경기도 오산시'),
    new Worker('김수정', 'F', 35, '총무부', '010-3636-3563', '충청남도 아산시'),
    new Worker('이예린', 'F', 21, '홍보부', '010-3756-9823', '경기도 성남시'),
    new Worker('강수철', 'M', 53, '홍보부', '010-3834-1248', '전라북도 전주시')
];

console.log('<과제 6. 사원 데이터베이스>  학번: 202103510  이름: 최유진');

// (1) 20대(20~29세) 사원의 이름, 나이, 주소 출력
console.log("\n(1) 20대(20~29세) 사원의 이름, 나이, 주소 출력");

// 이곳을 구현하시오...
let twenties = workers.filter(worker => worker.age >= 20 && worker.age < 30);
twenties.forEach(worker => {
    console.log(worker.name, worker.age, worker.address);
})

// (2) 강원도에 사는 사원의 이름, 전화번호, 주소를 출력
console.log("\n(2) 강원도에 사는 사원의 이름, 전화번호, 주소를 출력");

// 이곳을 구현하시오...
let Gangwondo = workers.filter(worker => worker.address.startsWith('강원도'));
Gangwondo.forEach(worker => {
    console.log(worker.name, worker.telephone, worker.address);
})

// (3) 총무부에 근무하고 이름에 '김'이 들어간 사원의 이름, 성별, 전화번호 출력
console.log("\n(3) 총무부에 근무하고 이름에 '김'이 들어간 사원의 이름, 성별, 전화번호 출력");

// 이곳을 구현하시오...
let kimAndAdministration = workers.filter(worker => worker.name.startsWith('김') && worker.department==='총무부');
kimAndAdministration.forEach(worker => {
    console.log(worker.name, worker.sex, worker.telephone);
})

// (4) 홍보부에 근무하는 남성 사원의 이름과 주소를 가나다 순으로 출력
console.log("\n(4) 홍보부에 근무하는 남성 사원의 이름과 주소를 가나다 순으로 출력");

// 이곳을 구현하시오...
let maleAndPromotion = workers
    .filter(worker => worker.sex==='M' && worker.department==='홍보부')
    .sort((a, b) => {
        let cmp = a.name.localeCompare(b.name);
        if (cmp !== 0) return cmp;
        return a.address.localeCompare(b.address);
    });

maleAndPromotion.forEach(worker => {
    console.log(worker.name, worker.address);
})

// (5) 경기도에 사는 사원을 나이순으로 이름, 나이, 성별, 전화번호, 주소를 출력
console.log("\n(5) 경기도에 사는 사원을 나이순으로 이름, 나이, 성별, 전화번호, 주소를 출력");

let gyeonggiWorkers = workers.filter(worker => worker.address.startsWith('경기도'));
gyeonggiWorkers.sort((a, b) => a.age - b.age);
gyeonggiWorkers.forEach(worker => {
    console.log(worker.name, worker.age, worker.sex, worker.telephone, worker.address);
});