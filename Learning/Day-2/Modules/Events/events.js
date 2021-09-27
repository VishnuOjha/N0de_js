// Events MOdule
// Node js has  Built in Module called Events
// Where you can fire-, create-- and listen for- any events.



const EventEmitter = require("events")

const event = new EventEmitter();

event.on("MyName",()=>{
    console.log("HEllo");
})

event.emit("MyName")





