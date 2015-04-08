// main.js
/*
  Exports a function that takes in a path of a picture and returns true if
  there are hands, given HAAR-like features.
*/

// OpenCV
var cv = require('opencv');
var color = [0, 255, 0];

/**
  Main exported function
  @param {String} relative_img_path - Relative image path to check for hands.
  (From this file)
  @param {Function} hands_callback - Callback called when hands are detected
  @param {Function} no_hands_callback - Callback called when no hands are
    detected
*/
module.exports = function(relative_img_path, hands_callback, no_hands_callback){
  // Read the image in opencv
  cv.readImage(relative_img_path, function(err, im){
    if (err) throw err;

    // check the size of the image, throw error is image has no size
    if (im.width() < 1 || im.height() < 1) {
      throw new Error('Image has no size : ' + relative_img_path);
    }

    // Perform the cascade using the classfier
    // HARDCODED.
    im.detectObject("../classifiers/palm.xml", {neighbors: 6, scale: 1.1},
    function(err, hands){
      if (err) throw err;
      // Done, check if there are any hands and call the correct callback.
      // There are hands, call hands_callback
      if (hands.length){
        hands_callback();
      } else {
        // No hands, call no hands_callback
        no_hands_callback();
      }
    });
  });
};
