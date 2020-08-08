
Custom training of Mobilenet_v2 for four classes and deploying on AWS 

Classes were 0:Flying Birds(FB), 1:Large quadcopter(LQ), 2:Small Quadcopter(SQ) and 3:Wingd Drones(WD)

Approach for custom training:

1. Downloaded pretrained model of mobilenet_V2
2. Parameters update were set to last layer of mobilenet_v2 only i:e classifier layer and retained all parameters
3. Images were transformed to 256 size images and cropped to 224 images and applied trained transforms and test transforms.
4. Trained and had test accuracy of 88.81 with in 10 epochs

Accuracy graph for train and test set:

![S3_train_test_accrycy graphs](https://user-images.githubusercontent.com/68057947/89715102-13a94f80-d9c1-11ea-8404-9189878c1603.JPG)

Missclassified images for 4 classes:

Flaying Birds:

![missclassified images for flying birds](https://user-images.githubusercontent.com/68057947/89715271-2f612580-d9c2-11ea-8e6d-cfbef5cde824.JPG)

Large Quadcopter:

![missclassified images for Large quadcopters](https://user-images.githubusercontent.com/68057947/89715276-3851f700-d9c2-11ea-925c-c5c9dd91bb0a.JPG)

Small Quadcopter:

![missclassified images for Small quadcopters](https://user-images.githubusercontent.com/68057947/89715283-3be57e00-d9c2-11ea-9c58-af97980a860e.JPG)

Wingd Drones:

![missclassified images for winged drones](https://user-images.githubusercontent.com/68057947/89715288-3f790500-d9c2-11ea-90d5-ed6fb2d88813.JPG)


Insomnia Endpoint image:

Flying bird given as input and predicted as flying bird:

![S3_endpoint](https://user-images.githubusercontent.com/68057947/89715733-6be25080-d9c5-11ea-9437-9b5cafe540b3.JPG)







