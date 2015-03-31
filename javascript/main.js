var cv = require('opencv');

cv.readImage("../images/handback.jpg", function(err, im){
  if (err) throw err;
  if (im.width() < 1 || im.height() < 1) throw new Error('Image has no size');

  im.detectObject("../classifiers/palm.xml", {}, function(err, hands){
    if (err) throw err;

    for (var i = 0; i < hands.length; i++){
      var hand = hands[i];
      im.ellipse(hand.x + hand.width / 2, hand.y + hand.height / 2, hand.width / 2, hand.height / 2);
    }

    im.save('./tmp/hand-detection.png');
    console.log('Image saved to ./tmp/hand-detection.png');
  });
});
