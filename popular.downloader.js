let path = require('path');
let fs = require('fs');
let rp = require('request-promise');

let dataPath = path.join(__dirname, '/downloads');

rp('https://reddit.com/r/popular.json')
.then(function(body) {
    let article = [];
    JSON.parse(body).data.children.forEach(item => {
        article.push({
            url: item.data.url,
            author: item.data.author})
    })
    // console.log(article)
    article.forEach(item => {
        if(path.extname(item.url) === '.jpg' || path.extname(item.url) === '.gif' || path.extname(item.url) === '.png') {
            let filename = item.author + path.extname(item.url);
            rp(item.url, {encoding: 'base64'})
            .then((download) => {
                fs.writeFile(`${dataPath}/${filename}`,download,{encoding: 'base64'}, (err) => {
                    if(err) console.log(err)
                })
            })
        }
        //console.log(path.extname(item.url))
    })
})
.catch(function(err) {
    console.log(err);
})