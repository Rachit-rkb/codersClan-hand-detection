// index.js

var isThereHands = require("./main.js");

isThereHands(image_path,
  function () {
    console.log("We are here because there is hands in the picture "+
      "for picture " + image_path );
  },
  function(){
    console.log("We are here because there is NO hands in the picture " +
      "for picture " + image_path );
  }
);
