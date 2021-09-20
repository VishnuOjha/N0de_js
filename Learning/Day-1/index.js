

//aquiring builtin module File Sync

const fs = require("fs")



// Files using Syncronus Ways

//creating a file and writting some text into that file
// it will takes 2 arguments : 1st one  is File Name & 2nd one is some text to write into the file
// fs.writeFileSync("new.txt","This is new file")


// again doign the same process

// fs.writeFileSync("new.txt","Not a new file")

// to append new text into the file

// fs.appendFileSync("new.txt","      new file is")


// for read data from file you have to do this function
// readfilesync take one parameter which is file name
// const readData = fs.readFileSync("new.txt");
// console.log(readData);

//after runnning file
//<Buffer 4e 6f 74 20 61 20 6e 65 77 20 66 69 6c 65 20 20 20 20 20 
//   20 6e 65 77 20 66 69 6c 65 20 69 73>

//   Node js include an additional data type called buffer
//  (not availaible in Browser's Java Script) 
//  Buffer is mainly used to store binary data.
//  While reading  from a file or reciving packets over the internet

// orgData = readData.toString();
// console.log(orgData);

// TO rename a file 

// fs.renameSync("new.txt","demo.txt")


//  Files using Asyncronusy way


fs.writeFile("demo2.txt","Hello 2nd file",()=>{
    console.log("file is created");
})