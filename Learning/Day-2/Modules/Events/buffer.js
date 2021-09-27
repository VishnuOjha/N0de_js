// stream and buffers 

// stream are objects that let you read data from a source  or write  data to a destincation in continuos fashion. 
// in node js , there are  four types of streams 
// streaming means listining to music or watching in real time, where we don't have to download the data in local storage

// Readable : stream which is used for reading data from paticular resouces 
// Writable :   stream which is used for writting a data
// Duplex : stream which can be used for both reading and writting the data
// Transform : a type of duplex where output is calculated on the base of input


/* 

 Each type of Stream is EventEmmiter instance and  throws serval events at diffrent instance of times'

 for examples : some of  the commmon use of the events are

 data : this event is fired when data is availaible to read
 
 end : This event is fired when there is more data is avalaible to read

 error : this event is fired when error is genrated while reciving and writitng the data

 finish : this event is fired when all the data flushed to underlying system
 */

 // 2nd way 
 // Reading from a Stream
 // Create a redable Stream
 // Handle Stream events -> data, end and error


 const fs = require("fs")
 const http = require("http")

 const server = http.createServer();

 server.on("request",(req,res)=>{

    // fs.readFile("data.txt",(err,data)=>{
    //     if(err){
    //         return console.log(err);
    //     }
    //     res.end(data.toString());
    // })

    // 2nd way of reading through streaming

    const rstream = fs.createReadStream("data.txt")

//     rstream.on("data",(chunkdata)=>{
//         res.write(chunkdata);
//     })

//     rstream.on("end",()=>{
//         res.end();
//     })
//     rstream.on("error",(err)=>{
//         console.log(err);
//         res.end("file not found")
//     })

//     rstream.on("finish",()=>{

//     })

// Stream Pipe method

  // stream.pipe() - this method is used for to take redable stream and connect it to writable stream 

  // 3rd way

  rstream.pipe(res);

 })
 
 

 server.listen(8000,"127.0.0.1");