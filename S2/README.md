
Custom training of Mobilenet_v2 for four classes and deploying on AWS 

Classes were Flying Birds, Large quadcopter, Small Quadcopter and Wingd Drones

Approach for custom training:

1. Downloaded pretrained model of mobilenet_V2
2. Parameters update were set to last layer of mobilenet_v2 only i:e classifier layer and retained all parameters
3. Images were transformed to 256 size images and cropped to 224 images and applied trained transforms and test transforms.
4. Trained and had test accuracy of 88.81 with in 0 epochs

Accuracy graph for train and test set:




