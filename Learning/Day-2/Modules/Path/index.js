const path = require("path")


console.log(path.dirname("D:/Web Development MERN\Node Js/Learning/Day-2/Modules/Path/index.js"));

console.log(path.extname("D:/Web Development MERN\Node Js/Learning/Day-2/Modules/Path/index.js"));

console.log(path.basename("D:/Web Development MERN\Node Js/Learning/Day-2/Modules/Path/index.js"));


console.log(path.parse("D:/Web Development MERN\Node Js/Learning/Day-2/Modules/Path/index.js"))

const myPath = path.parse("D:/Web Development MERN\Node Js/Learning/Day-2/Modules/Path/index.js");

console.log(myPath.name);