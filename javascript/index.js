// index.js

var isThereHands = require("./main.js");

var images = [
  "../images/car.jpg",
  "../images/cat.jpg",
  "../images/handback.jpg",
  "../images/random2.jpg",
  "../images/whiteblank.jpg",
  '../images/randomcirc.png'
];

images.forEach(function(image_path){
  isThereHands(image_path,
  function () {
    console.log("We are here because there is hands in the picture "+
      "for picture " + image_path );
  },
  function(){
    console.log("We are here because there is NO hands in the picture " +
      "for picture " + image_path );
  });
});
