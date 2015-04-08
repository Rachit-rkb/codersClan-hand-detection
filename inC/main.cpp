#include "opencv2/objdetect/objdetect.hpp"
#include "opencv2/highgui/highgui.hpp"
#include "opencv2/imgproc/imgproc.hpp"

#include <iostream>
#include <stdio.h>

using namespace std;
using namespace cv;

int main( ){

    // Setup the matrix image from file
    Mat image = imread("lena.jpg", CV_LOAD_IMAGE_COLOR);

    // Get the cascade classifier, which is currently just detecting palms.
    // License for it is at root.
    CascadeClassifier hand_classifier;
    hand_classifier.load("C:/OpenCV243/data/Haarcascades/haarcascade_frontalface_alt2.xml");

    // Now do HAAR cascade ontop of the image using the classifier.
    std::vector<Rect> hands;
    hand_classifier.detectMultiScale(image, hands);

    // Go through the detected hands and draw circles around them
    for(int i = 0; i < hands.size(); i++){
        // Given the point, we draw an elipse
        Point center( hands[i].x + hands[i].width*0.5, hands[i].y + hands[i].height*0.5 );
        ellipse( image, center, Size( hands[i].width*0.5, hands[i].height*0.5), 0, 0, 360, Scalar( 255, 0, 255 ), 4, 8, 0 );
    }

    imshow( "Detected Face", image );

    waitKey(0);
    return 0;
}
