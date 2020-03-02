let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

let dataPath = path.join(__dirname, '/popular-articles.json');

rp('https://reddit.com/r/popular.json')
.then(function(body) {
    let arr = [];
    JSON.parse(body).data.children.forEach(item => {
        arr.push({
            title: item.data.title, 
            url: item.data.url,
            author: item.data.author})
    })
    // console.log(arr)
    fs.writeFile(dataPath, JSON.stringify(arr), (err) => {
        if(err) return console.log(err);
    })
})
.catch(function(err) {
    console.log(err);
})