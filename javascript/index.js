// index.js

var isThereHands = require("./main.js");

isThereHands("../images/handback.jpg",
function () {
  console.log("We are here because there is hands in the picture");
},
function(){
  console.log("We are here because there is NO hands in the picture");
});
