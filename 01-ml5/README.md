# Introduction to ml5.js and pre-trained models

[ [Slides](https://docs.google.com/presentation/d/1-J2tNmG0lXD5k_K3jJlTvW3SxCKbSO9FvRXGuSuA5Ic/) | [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Understand the concept of a “machine learning model.”
-   What is a “[pre-trained model](https://docs.ml5js.org/#/learn/ml5-glossary?id=pretrained-model)”?
-   What does it mean to discuss the “architecture” of a machine learning model?
-   Define and diagram an artificial neural network.
-   Understand what [ml5.js](https://ml5js.org/about/) is and how it fits into the TensorFlow and open source machine learning library ecosystem.
-   Learn how to create an image classifier with ml5.js and [MobileNet](https://docs.ml5js.org/#/learn/ml5-glossary?id=mobilenet).
-   Understand how the MobileNet model was trained, specifically the origins and collection methodology for the training.

## Outline

### Defining Machine Learning yet again

-   "Machine learning is programming with examples, not instructions" -- from [Kyle McDonald - Weird Intelligence](https://vimeo.com/304110435).
-   "A computer program is said to learn from experience E with respect to some class of tasks T and performance measure P, if its performance at tasks in T, as measured by P, improves with experience E." -- Tom Mitchell (1998): [Machine Learning book](http://amzn.to/2nLdRgQ).
    -   Example: classifying images of dogs and cats.
        -   E = Watching you classify images as dogs or cats.
        -   T = Classifying images as dogs or cats.
        -   P = The % of images correctly classified.

### Classification and Regression

-   Classification and regression both involve making a "[prediction](https://docs.ml5js.org/#/learn/ml5-glossary?id=prediction)" based on input data.
-   [Classification](https://docs.ml5js.org/#/learn/ml5-glossary?id=classification) refers to predicting an output with a discrete set of possibilities like a set of categories or labels. For example: "Given an input image, is it a dog or cat?"
-   [Regression](https://docs.ml5js.org/#/learn/ml5-glossary?id=regression-analysis) refers to predicting an "continuous" output (a fancy way of saying number). For example: "Given the number of bedrooms, what is the price of a house?" or "Given an input image of a cat, how much does the cat weigh?"

### Image classification code examples

-   [Image Classification - Single Image](https://editor.p5js.org/ml5/sketches/pjPr6XmPY)
-   [Image Classification - Drag and Drop](https://editor.p5js.org/jackbdu/sketches/LKbmAl6o_)
-   [Image Classification - Webcam](https://editor.p5js.org/ml5/sketches/K0sjaEO19)
-   [Image Classification - Webcam with Speech Output](https://editor.p5js.org/jackbdu/sketches/Zja0ej8tn)

## Supplemental Materials

-   Read [A Brief History of Neural Nets and Deep Learning](http://www.andreykurenkov.com/writing/a-brief-history-of-neural-nets-and-deep-learning/) by Andrey Kurenkov.
-   Read [ImageNet: The Data That Transformed AI Research—and Possibly the World](https://qz.com/1034972/the-data-that-changed-the-direction-of-ai-research-and-possibly-the-world/) by Dave Gershgorn.
-   Watch [How we teach computers to understand pictures](https://www.youtube.com/watch?v=40riCqvRoMs) by Fei-Fei Li (_Note: Fei-Fei Li is no longer at Google; she is currently Co-Director of the Stanford Human-Centered AI Institute_).

### ml5.js video tutorials

_Note: these tutorials were taught using an older version of ml5.js, some syntax might have changed._

-   [A Beginner's Guide to Machine Learning with ml5.js - video tutorial](https://youtu.be/jmznx0Q1fP0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman
-   [ml5.js: Image Classification with MobileNet - video tutorial](https://youtu.be/yNkAuWz5lnY?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman
-   [ml5.js: Webcam Image Classification - video tutorial](https://youtu.be/D9BoBSkLvFo?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman

### ml5.js resources

-   [ml5 website](https://ml5js.org)
-   [ml5 glossary](https://docs.ml5js.org/#/learn/ml5-glossary)
-   [ml5 official examples](https://editor.p5js.org/ml5/sketches)

## Assignment 1b

1. Explore [ImageNet](http://image-net.org/index), [ImageNet sample images](https://github.com/EliSchwartz/imagenet-sample-images/blob/master/gallery.md), [Kaggle ImageNet Mini 1000](https://www.kaggle.com/datasets/ifigotin/imagenetmini-1000). What surprises you about this data set? What questions do you have? Thinking back to last week’s assignment, can you think of any ethical considerations around how this data was collected Are there privacy considerations with the data?
2. Using the [ml5.js examples above](#ml5-code-editor-examples), try running image classification on a variety of images. Pick at least 10 objects in your room. How many of these does it recognize? What other aspects of the image affect the classification, including but not limited to position, scale, lighting, etc.
3. Document your thoughts on MobileNet and image classification in a blog post and add a link to the [Assignment 1b Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-1b).
