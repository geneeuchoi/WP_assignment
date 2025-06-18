// if문
let num = 5;
if(num < 10) {
    console.log('num은 10보다 작습니다')
} else if (num === 10) {
    console.log('num은 10입니다.')
} else {
    console.log('num은 10보다 큽니다.')
}

// switch case
let fruit = 'apple'
switch(fruit) {
    case 'apple':
        console.log('사과');
        break;
    case 'orange':
        console.log('오렌지');
        break;
    case 'pineapple':
        console.log('파인애플');
        break;
    default:
        console.log('과일이 아닙니다.');
}