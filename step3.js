const fs = require("fs");
const axios = require("axios")

function cat(path) {
    fs.readFile(path,'utf8', function(err, data) {
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1)
        }
        console.log(data)
    })
}

async function webCat(url) {
    try {
        let resp = await axios.get(url);
        console.log(resp.data);
    } catch (err) {
        console.error(`Error reading ${url}: ${err}`);
        process.exit(1)
    }
}

if(process.argv[2].slice(0,4)  == 'http') {
    console.log("got there");
    webCat(process.argv[2]);    
} else {
    cat(process.argv[2]);
}