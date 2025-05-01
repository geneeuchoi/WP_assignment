let height = 10;
for (let i = 0; i < height; i++) {
    let result = ""
    for (let j = 0; j < height-1-i; j++) {
        result += " "
    }
    for (let j = 0; j < 1 + i * 2; j++) {
        result += "*"
    }
    console.log(`${result}`)
}