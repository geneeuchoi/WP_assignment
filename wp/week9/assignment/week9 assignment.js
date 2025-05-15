// data의 인원수는 정해져 있지 않음
const data = ['홍길동', 173, 48, '임꺽정', 180, 78,
    '전우치', 165, 92, '부채도사', 145, 68];

const fig0 = "----+----+----+----+----+----+----+----+----+----+";
const fig1 = "####+####+####+####+####+####+####+####+####+####+";
const fig2 = "    5   10   15   20   25   30   35   40   45   50";

// 학생 정보
console.log();
console.log("<과제 5. 비만도 판정> 학번: 202103510 이름: 최유진");
console.log();

// 이곳에 프로그램을 작성하시오.
let i = 0;

while (i < data.length) {
    let name = data[i];
    let height = data[i+1] * 0.01;
    let weight = data[i+2];
    let bmi = weight / (height * height);
    let bmiIndex = Math.floor(bmi);

    console.log("이름:", name);
    console.log("신장:", height * 100, "cm");
    console.log("체중:", weight, "kg");

    if (bmi < 18.5) {
        console.log("판정: 저체중 (bmi =", bmi, ")");
    } else if (bmi < 25.0) {
        console.log("판정: 정상 (bmi =", bmi, ")");
    } else if (bmi < 30.0) {
        console.log("판정: 과체중 (bmi =", bmi, ")");
    } else {
        console.log("판정: 비만 (bmi =", bmi, ")");
    }

    console.log("도표:", fig1.slice(0, bmiIndex) + fig0.slice(bmiIndex));
    console.log("    ", fig2);

    i += 3;
}

