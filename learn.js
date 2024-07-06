const { time } = require('console');
const fs = require('fs');


// reading files 
fs.readFile("./node-crash-course/docs/blog.txt", (err, data) =>{
    if(err){
        console.log(err.message);
    }
    console.log(data.toString());
    
});


// writing files
fs.writeFile("./node-crash-course/docs/blog2.txt", "this is the content updated again", ()=>{
    console.log("file was written");
});


// directories
if(!fs.existsSync("./node-crash-course/assets")){
    fs.mkdir("./node-crash-course/assets", (err)=>{
        if(err){
            console.log(err.message);
        }
        console.log("folder created");
    });
} else{
    fs.rmdir("./node-crash-course/assets", (err)=>{
        if(err){
            console.log(err.message);
        }
        console.log("folder deleted");
    });
}

// deleting files
if(fs.existsSync("./node-crash-course/docs/deleteme.txt")){
    fs.unlink("./node-crash-course/docs/deleteme.txt", (err)=>{
        if(err){
            console.log(err.message);
        }
        console.log("file deleted");
    })}
else{
    fs.writeFile("./node-crash-course/docs/deleteme.txt", "this is the content updated again", ()=>{
        console.log("file was written");
    });
}


const fs = require('fs');   

const readStream = fs.createReadStream('./node-crash-course/docs/blog3.txt', {encoding:'utf8'});
const writeStream = fs.createWriteStream('./node-crash-course/docs/blog4.txt');

readStream.on('data', (chunk)=>{
    console.log('---- NEW CHUNK ----');
    console.log(chunk);
    writeStream.write('\nNEW CHUNK\n');
    writeStream.write(chunk);
});


// piping
readStream.pipe(writeStream);