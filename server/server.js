const path = require('path');
const fs = require('fs');

let dataPath = path.join(__dirname, '../chirps.json');

let chirps = [
    {name: 'Karen',
     gender: 'female'
    },
    {name: 'Linda',
     gender: 'female'
    },
    {name: 'Joe',
     gender: 'male'
    },
    {name: 'Jack',
     saying: 'male'
    },
    {name: 'Billy',
     saying: 'female'
    }
]

fs.writeFile(dataPath, JSON.stringify(chirps), (err) => {
    if(err) return console.log(err);
})

fs.readFile(dataPath,(err,data) => {
    if(err) console.log(err);
    JSON.parse(data).forEach(chirp => {
        console.log(chirp);
    })
})