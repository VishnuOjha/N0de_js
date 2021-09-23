const fs = require("fs")

const Data = {

    name : "ram",
    sname:"prajapati",
    age: 24,
    city : "Ahmedabad",

}


// Json 2 methods which is very useful
// 1) Convert JsonObject into Json
// 2} Convert Json into jsonObject

// let's see first method
// using Strigify() method we can create a json forom Object
const jsonObject = JSON.stringify(Data);
// console.log(jsonObject);
fs.writeFile("data.json",jsonObject,()=>{
    console.log("Done");
})

fs.readFile("data.json","utf-8",(err,data)=>{
    console.log("Data :",data);
})


// Second method
// using parse() method we can create Object from Json

const objData = JSON.parse(jsonObject);
console.log(objData)
