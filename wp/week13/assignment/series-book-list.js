console.log("<과제 8. 시리즈 도서 목록> 학번: 202103510 이름: 최유진")
console.log()

const request = require('request');
const cheerio = require('cheerio');

const url = 'https://www.hanbit.co.kr/store/books/series_list.html';
request(url, (error, response, body) => {
    const $ = cheerio.load(body);
    $('.series_book_list>li').each((index, element) => {
        const a = $(element).find('a');

        const order = index + 1;
        const title = a.text().trim();
        const description = $(element).find('dd').text().trim();

        console.log("차례 :", order);
        console.log("제목 :", title.substring(0, title.lastIndexOf('시')));
        console.log("설명 :", description);
        console.log();
    });
});
