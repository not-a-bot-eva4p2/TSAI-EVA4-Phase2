
Custom training of Mobilenet_v2 for four classes and deploying on AWS 

Classes were Flying Birds(FB), Large quadcopter(LQ), Small Quadcopter(SQ) and Wingd Drones(WD)

Approach for custom training:

1. Downloaded pretrained model of mobilenet_V2
2. Parameters update were set to last layer of mobilenet_v2 only i:e classifier layer and retained all parameters
3. Images were transformed to 256 size images and cropped to 224 images and applied trained transforms and test transforms.
4. Trained and had test accuracy of 88.81 with in 10 epochs

Accuracy graph for train and test set:

![S3_train_test_accrycy graphs](https://user-images.githubusercontent.com/68057947/89715102-13a94f80-d9c1-11ea-8404-9189878c1603.JPG)





