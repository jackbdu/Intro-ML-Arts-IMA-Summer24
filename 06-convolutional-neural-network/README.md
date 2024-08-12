# Convolutional Neural Network

[ [Slides](https://docs.google.com/presentation/d/13OJn63i2PpE8Q_F8oQb0ynNNVRHMBdGeWjINQ2oQCfA/) \| [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Understand when and why you might train your own model from scratch versus use a pre-trained model or transfer learning.
-   Understand how to work with image data for training your own model.
-   Learn about different datasets and their formats.
-   Learn to feed the input of a graphics canvas into a machine learning model.
-   Learn to train an image classifier (with and without convolutional layers) with ml5.js.
-   Learn the distinction between different types of layers of a neural network, especially a convolutional layer and a pooling layer.

## Lecture Notes

### Tools

-   [ml5.neuralNetwork Reference](https://docs.ml5js.org/#/reference/neural-network)
    -   [ml5.neuralNetwork Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/NeuralNetwork)
    -   [TensorFlow.js Source Code](https://github.com/tensorflow/tfjs)

### Datasets

-   [The Quick, Draw! Dataset](https://github.com/googlecreativelab/quickdraw-dataset) from Google Creative Lab.
-   [The MNIST Dataset](https://yann.lecun.com/exdb/mnist/) by Yann LeCun el al.

### Related Projects

-   [MegaPixels](https://ahprojects.com/megapixels-glassroom/) curated by Tactical Tech, design and development by Adam Harvey.
-   [What Neural Networks See](https://experiments.withgoogle.com/what-neural-nets-see) by Gene Kogan.

#### Quick Draw! Dataset

-   [Letter Collages](http://frauzufall.de/en/2017/google-quick-draw/) by Deborah Schmidt.
-   [Face Tracking Experiment](https://www.instagram.com/p/BUU8TuQD6_v/) by Neil Mendoza.
-   [Faces of Humanity](http://project.laboiteatortue.com/facesofhumanity/) by La Boite à Tortue.
-   [Scribbling Speech](http://xinyue.de/scribbling-speech.html) by Xinyue Yang.
-   [How do you draw a circle?](https://qz.com/994486/the-way-you-draw-circles-says-a-lot-about-you/) by Thu-Huong Ha and Nikhil Sonnad.
-   [Machine Learning for Visualization](https://medium.com/@enjalot/machine-learning-for-visualization-927a9dff1cab) by Ian Johnson.

### Code Examples

#### Working with Datasets

-   [Loading and Displaying Quick, Draw! Dataset](https://editor.p5js.org/jackbdu/sketches/UC_KqRr121)
-   [Loading and Displaying MNIST Dataset](https://editor.p5js.org/jackbdu/sketches/E1Bb3KmLl)

#### Convolution Neural Network Layers

-   [Convolutional Neural Network - Filter Demo](https://editor.p5js.org/codingtrain/sketches/BN1lE-gyl)
-   [Convolutional Neural Network - Max Pooling Demo](https://editor.p5js.org/codingtrain/sketches/GMRfsK7Wn)

#### Training Image Classifiers

-   [Training a Doodle Classifier without Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/45pxCfFKh)
-   [Training a Doodle Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/Id2cg4UQL)
-   [Training a Handwritten Digit Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/ab7lfmRyH)
-   [Training a Webcam Image Classifier with Convolutional Layers](https://editor.p5js.org/jackbdu/sketches/7Y6VDvUO6)
-   [Doodle Classification with DoodleNet](https://editor.p5js.org/jackbdu/sketches/ts3fuRZGW) (model trained by [@yining1023](https://github.com/yining1023))

## Supplemental Materials

-   [An Intuitive Explanation of Convolutional Neural Networks](https://ujjwalkarn.me/2016/08/11/intuitive-explanation-convnets/) by Ujjwal Karn.
-   ["Gradient-Based Learning Applied to Document Recognition"](http://yann.lecun.com/exdb/publis/pdf/lecun-01a.pdf) by Y. LeCun, L. Bottou, Y. Bengio, P. Haffner.
-   [How computers got shockingly good at recognizing images](https://arstechnica.com/science/2018/12/how-computers-got-shockingly-good-at-recognizing-images/) by Timothy B. Lee.
-   [A visual and intuitive understanding of deep learning, CNNs](https://www.youtube.com/watch?v=Oqm9vsf_hvU) (0:00–9:40) by Octavio Good.
-   [Recognizing Human Facial Expressions With Machine Learning](https://thoughtworksarts.io/blog/recognizing-facial-expressions-machine-learning/) by Angelica Perez.
-   [Convolutional Neural Networks - The Math of Intelligence](https://www.youtube.com/watch?v=FTr3n7uBIuE) by Siraj Raval.

### Visualizations and Demos

-   [Image Kernels Explained Visually](http://setosa.io/ev/image-kernels/) by Victor Powell.
-   [Interactive Node-Link Visualizations of Convolutional Neural Networks](https://adamharley.com/nn_vis/) by Adam W. Harley.
-   [Convolution Operation Demo](https://deeplizard.com/resource/pavq7noze2) by Deeplizard.
-   [Convolutional Neural Network demos](https://github.com/yining1023/machine-learning-for-the-web/tree/main/cnn) from Yining Shi. (_Note: these demos were created with an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._)

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._

#### Working with Quick, Draw! Dataset

-   [Replaying Drawings with Node Server - video tutorial](https://www.youtube.com/watch?v=yLuk0twx8Hc) by Daniel Shiffman.
-   [Replaying Drawings with Google Web API - video tutorial](https://www.youtube.com/watch?v=EcRK6oFddPQ) by Daniel Shiffman.

#### Convolution Neural Network

-   [ml5.js: What is Convolutional Neural Network Part 1 - Filters - video tutorial](https://youtu.be/qPKsVAI_W6M) by Daniel Shiffman.
-   [ml5.js: What is Convolutional Neural Network Part 2 - Max Pooling - video tutorial](https://youtu.be/pRWq_mtuppU) by Daniel Shiffman.

#### Training Neural Networks

-   [Doodle Classifier: Prepping Quick Draw! Data in p5.js - video tutorial](https://www.youtube.com/watch?v=wMe6qcpD8jI) by Daniel Shiffman.
-   [ml5.js: Training a Neural Network with Pixels as Input - video tutorial](https://www.youtube.com/watch?v=UaKab6h9Z0I) by Daniel Shiffman.
-   [ml5.js: Training a Convolutional Neural Network for Image Classification - video tutorial](https://www.youtube.com/watch?v=hWurN0XhzLY) by Daniel Shiffman.

## Assignment 6

1.  Read [Exploring and Visualizing an Open Global Dataset](https://research.googleblog.com/2017/08/exploring-and-visualizing-open-global.html) by Google Research.
2.  Choose a neural network we trained in class or one from the code examples above. Experiment with the hyperparameters (`learningRate`, `batchSize`, `epochs`, etc) and observe how it affects the training performance.
3.  Document your response to the readings as well as your experiments and observations in a blog post and add a link to the post and your p5.js sketch on the [Assignment 6 Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-6). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.
4.  Lastly, be prepared to share preliminary ideas on your final project in the next class.
