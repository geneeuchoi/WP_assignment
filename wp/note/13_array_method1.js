let arr = [1, 2, 3, 4];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for each
arr.forEach((elem, idx, array) =>{
    console.log(`${idx}번째 요소는 ${elem}입니다.`);
    console.log(array)
});

let newArr = [];
for(let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 10);
}
console.log(newArr);

// map
let newArr2 = arr.map((elem, idx, array) => {
    console.log(`${idx}번째 요소는 ${elem}입니다.`);
    console.log(array)
    return elem * 10;
})
console.log(newArr2);

// 해당 값이 존재하는지 확인
let colors = ["red", "green", "yellow"];
console.log(colors.includes("red"));
console.log(colors.includes("red", 2)); // 2번째 요소부터 red가 있는지 확인
console.log(colors.includes("blue", 3));

// 해당 값이 몇 번째 인덱스에 위치하는지 확인
console.log(colors.indexOf("red"))
console.log(colors.indexOf("blue"))

let colorsObject = [
    {id : 1, color:"red"},
    {id : 2, color:"blue"},
    {id : 3, color:"green"},
    {id : 4, color:"yellow"},
]

// 배열의 요소가 객체로 이루어져 있을 경우 특정값을 지닌 요소가 몇 번째에 위치하는지를 반환
colorsObject.findIndex((elem, idx, array) =>
    console.log(`${idx}번째 값은 id: ${elem.id}, color: ${elem.color}`)
)

// 찾아낸 값 자체를 반환
let idx = colorsObject.find((elem) => elem.color === "red");
console.log(idx);

// 특정 요소를 찾는 내장 함수
let filterArray = colorsObject.filter((elem, idx, array) =>
    elem.id > 1
)
console.log(filterArray);

// 특정 값들만 추출해서 새로운 배열 생성
let slicedArray = colorsObject.slice(1, 3); // index 3 전까지 추출
console.log(slicedArray);