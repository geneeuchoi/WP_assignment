function add(num1, num2) {
    console.log(num1 + num2);
}
add(1, 3)

// early return pattern
function compare(num) {
    if (num === 1) {
        return 'num은 1입니다.';
    }
    if (num > 1) {
        return 'num은 1보다 큽니다.';
    }

    if (num < 1) {
        return 'num은 1보다 작습니다.';
    }
    return '이 부분은 실행되지 않습니다.'
}

console.log(compare(5))