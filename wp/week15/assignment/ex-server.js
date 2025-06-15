const express = require('express');
const app = express();
const port = 54321;
app.use(express.urlencoded({extended: true}));

app.get('/:op/:n1/:n2', (req, res) => {
    const { op, n1, n2 } = req.params;

    const num1 = parseInt(n1);
    const num2 = parseInt(n2);
    let result;

    switch (op) {
        case 'add':
            result = num1 + num2;
            res.send(

                `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
                <h3>(1) 사칙연산 계산</h3>
                ${num1} + ${num2} = ${result}`);
            break;
        case 'sub':
            result = num1 - num2;
            res.send(
                `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
                <h3>(1) 사칙연산 계산</h3>
                ${num1} - ${num2} = ${result}`);
            break;
        case 'mul':
            result = num1 * num2;
            res.send(
                `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
                <h3>(1) 사칙연산 계산</h3>
                ${num1} * ${num2} = ${result}`);
            break;
        case 'div':
            if (num2 === 0) return res.status(400).send("0으로 나눌 수 없음");
            result = num1 / num2;
            res.send(
                `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
                <h3>(1) 사칙연산 계산</h3>
                ${num1} / ${num2} = ${result}`);
            break;
        default:
            return res.status(400).send("유효하지 않은 연산자");
    }

});

app.get('/sort', (req, res) => {
    const { a, b, c } = req.query;

    // 문자열 → 숫자 변환
    const n1 = Number(a);
    const n2 = Number(b);
    const n3 = Number(c);

    const numbers = [n1, n2, n3];
    const sorted = numbers.sort((x, y) => x - y);

    res.send(
        `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
        <h3>(2) 숫자 정렬하기</h3>
        a = ${n1}, b = ${n2}, c = ${n3}<br><br>
        sorted: ${sorted.join(', ')}`
    );
});

app.post('/rect', (req, res) => {
    const width = parseInt(req.body.width);
    const height = parseInt(req.body.height);

    let result = '';
    for (let i = 0; i < height; i++) {
        result += 'H'.repeat(width) + '<br>';
    }

    res.send(
        `&lt; 9. Express 실습&gt; 학번: 202103510 이름: 최유진<br>
            <h3>(3) 사각형 그리기 (가로 ${width}, 세로 ${height})</h3>
            ${result}`);
});


app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});


