# Image Classification

[ [Slides](https://docs.google.com/presentation/d/1-J2tNmG0lXD5k_K3jJlTvW3SxCKbSO9FvRXGuSuA5Ic/) \| [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Understand the concept of a “machine learning model”.
-   What is a “[pre-trained model](https://docs.ml5js.org/#/learn/ml5-glossary?id=pretrained-model)”?
-   What does it mean to discuss the “architecture” of a machine learning model?
-   Define and diagram an artificial neural network.
-   Understand what [ml5.js](https://ml5js.org/about/) is and how it fits into the TensorFlow and open source machine learning library ecosystem.
-   Learn how to create an image classifier with ml5.js and [MobileNet](https://docs.ml5js.org/#/learn/ml5-glossary?id=mobilenet).
-   Understand how the MobileNet model was trained, specifically the origins and collection methodology for the training.

## Lecture Notes

### Tools

-   [ml5.js Website](https://ml5js.org)
    -   [ml5.js Getting Started](https://docs.ml5js.org/)
    -   [ml5.js glossary](https://docs.ml5js.org/#/learn/ml5-glossary)
    -   [ml5.js official examples](https://editor.p5js.org/ml5/sketches)
    -   In order to use ml5.js, include the `<script>` tag below in your index.html file:

```javascript
<script src="https://unpkg.com/ml5@1/dist/ml5.min.js"></script>
```

-   [ml5.imageClassifier Reference](https://docs.ml5js.org/#/reference/image-classifier)
    -   [ml5.imageClassifier Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/ImageClassifier)
    -   [TensorFlow.js MobileNet Source Code](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet)
-   [TensorFlow.js models](https://www.tensorflow.org/js/models)
    -   [TensorFlow.js demos](https://www.tensorflow.org/js/demos)

### Code Examples

-   [Image Classification - Single Image](https://editor.p5js.org/ml5/sketches/pjPr6XmPY)
-   [Image Classification - Drag and Drop](https://editor.p5js.org/jackbdu/sketches/LKbmAl6o_)
-   [Image Classification - Webcam](https://editor.p5js.org/ml5/sketches/K0sjaEO19)
-   [Image Classification - Webcam with Speech Output](https://editor.p5js.org/jackbdu/sketches/Zja0ej8tn)
-   [Image Classification with TensorFlow.js MobileNet - Single Image](https://editor.p5js.org/jackbdu/sketches/5DEdb8_E-)
-   [Image Classification with TensorFlow.js MobileNet - Webcam](https://editor.p5js.org/jackbdu/sketches/FP7PTjj_X)

## Supplemental Materials

-   [A Brief History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/) by Andrey Kurenkov.
-   [ImageNet: The Data That Transformed AI Research—and Possibly the World](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) by Dave Gershgorn.
-   [How we teach computers to understand pictures](https://www.youtube.com/watch?v=40riCqvRoMs) by Fei-Fei Li (_Note: Fei-Fei Li is no longer at Google; she is currently Co-Director of the Stanford Human-Centered AI Institute_).

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._

-   [A Beginner's Guide to Machine Learning with ml5.js - video tutorial](https://youtu.be/jmznx0Q1fP0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5.js: Image Classification with MobileNet - video tutorial](https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5.js: Webcam Image Classification - video tutorial](https://youtu.be/D9BoBSkLvFo?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.

## Assignment 1b

1. Explore [ImageNet](http://image-net.org/index), [ImageNet sample images](https://github.com/EliSchwartz/imagenet-sample-images/blob/master/gallery.md), [Kaggle ImageNet Mini 1000](https://www.kaggle.com/datasets/ifigotin/imagenetmini-1000). What surprises you about this data set? What questions do you have? Thinking back to last week’s assignment, can you think of any ethical considerations around how this data was collected Are there privacy considerations with the data?
2. Using the [code examples above](#code-examples), try running image classification on a variety of images. Pick at least 10 objects in your room. How many of these does it recognize? What other aspects of the image affect the classification, including but not limited to position, scale, lighting, etc.
3. Document your thoughts on MobileNet and image classification in a blog post and add a link to the [Assignment 1b Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-1b).
