# Training a Neural Network

[ [Slides](https://docs.google.com/presentation/d/1OKT_80niROeM37g5XLW-M8L_JHCGCxtJ2HIExuOFQCk/) \| [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Learn steps to construct a vanilla neural network and train a classification model with ml5.js.
-   Understand Neural Network architecture.
    -   What is a perceptron?
    -   What is a multi-layered perceptron?
    -   What are activation functions?
-   Understand the terminology of the training process.
    -   Training
    -   Learning rate
    -   [Epochs](https://docs.ml5js.org/#/learn/ml5-glossary?id=epochs)
    -   [Batch size](https://docs.ml5js.org/#/learn/ml5-glossary?id=batch-size)
    -   Loss
-   Understand the difference between training and inference.
-   Revisit and examine the concepts of classification and regression as applied to real-time interaction.

## Lecture Notes

### Tools

-   [ml5.neuralNetwork Reference](https://docs.ml5js.org/#/reference/neural-network)
    -   [ml5.neuralNetwork Source Code](https://github.com/ml5js/ml5-next-gen/tree/main/src/NeuralNetwork)
    -   [TensorFlow.js Source Code](https://github.com/tensorflow/tfjs)

### Code Examples

-   [NeuralNetwork - Color Classifier](https://editor.p5js.org/ml5/sketches/eGHBdmCLe)
-   [NeuralNetwork - Mouse Gesture](https://editor.p5js.org/ml5/sketches/FdXAgrA3N)
-   [NeuralNetwork - Train and Save](https://editor.p5js.org/ml5/sketches/rR51vvi-u)
-   [NeuralNetwork - Load Model](https://editor.p5js.org/ml5/sketches/U-aljtx7x)
-   [Neural Network demos](https://github.com/yining1023/machine-learning-for-the-web/tree/main/week8-diynn) from Yining Shi. (_Note: these demos were created with an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._)

## Supplemental Materials

-   [The 7 steps of machine learning](https://www.youtube.com/watch?v=nKW8Ndu7Mjw) from Google Cloud Tech.
-   [But what _is_ a Neural Network?](https://youtu.be/aircAruvnKk?list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi) by 3Blue1Brown.
-   [10. Neural Networks - Nature of Code - video tutorials](https://youtu.be/XJ7HLz9VYz0?list=PLRqwX-V7Uu6aCibgK1PTWWu9by6XFdCfh) by Daniel Shiffman.
-   [Chapter 10: Neural Network, Nature of Code](https://natureofcode.com/book/chapter-10-neural-networks/) by Daniel Shiffman.
-   [Machine Learning Crash Course with TensorFlow APIs](https://developers.google.com/machine-learning/crash-course/) from Google.

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._

#### Neural Network Concepts

-   [Neural Networks: Perceptron Part 1 - video tutorial](https://www.youtube.com/watch?v=ntKn5TPHHAk) by Daniel Shiffman.
-   [Neural Networks: Perceptron Part 2 - video tutorial](https://www.youtube.com/watch?v=DGxIcDjPzac) by Daniel Shiffman.
-   [Neural Networks: Multilayer Perceptron Part 1 - video tutorial](https://www.youtube.com/watch?v=u5GAVdLQyIg) by Daniel Shiffman.
-   [Neural Networks: Multilayer Perceptron Part 2 - video tutorial](https://www.youtube.com/watch?v=IlmNhFxre0w) by Daniel Shiffman.
-   [Neural Networks: Matrix Math Part 1 - video tutorial](https://www.youtube.com/watch?v=uSzGdfdOoG8) by Daniel Shiffman.
-   [Neural Networks: Matrix Math Part 2 - video tutorial](https://www.youtube.com/watch?v=n6q9D2wd1bE) by Daniel Shiffman.

#### Neural Network Training

-   [ml5.js: Train Your Own Neural Network - video tutorial](https://youtu.be/8HEgeAbYphA?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5.js: Save Neural Network Training Data - video tutorial](https://youtu.be/q6cwxORPDo8?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5: Neural Network Regression - video tutorial](https://youtu.be/fFzvwdkzr_c?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork() - video tutorial](https://youtu.be/FYgYyq-xqAw?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [ml5.js: Pose Regression with PoseNet and ml5.neuralNetwork() - video tutorial](https://youtu.be/lob74HqHYJ0?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman.
-   [Hand Pose Classifier with ml5.neuralNetwork() - demo video](https://www.loom.com/share/420fa5941dea411491af817011622c86) by Yining Shi. [ [Data Collection Code](https://editor.p5js.org/yining/sketches/dCoPm-Opb) \| [Model Training Code](https://editor.p5js.org/yining/sketches/IrBFfXbSF) \| [Classification Code](https://editor.p5js.org/yining/sketches/6cFF9-L-Z) ]

## Assignment 5

1. Watch [Machine Learning for Human Creative Practice](https://vimeo.com/287094397) by Dr. Rebecca Fiebrink at Eyeo 2018. Write a response to the following question posed by Dr. Fiebrink:
    - How can machine learning support people's existing creative practices? Expand people's creative capabilities?
2. Create your own p5.js sketch that trains a model with real-time interactive data. This can be a prototype of a project idea or a simple exercise where you run this week's code examples with your own data. Here are some exercise suggestions:
    - Try to invent more elegant and intuitive interaction for collecting real-time data beyond pressing keys.
    - What other real-time inputs might you consider beyond mouse position, image pixels, or face/pose/hand tracking? Could you use real-time sensor data?
    - What other real-time outputs might you consider beyond text? Could the output be sound/color modulation? Could there be multiple outputs like R, G, B values? Could the output be a physical computing device?
    - Improve the the sketch we built in class:
        - Can you add more classification categories?
        - Can you create an interface for training and showing the results of model's prediction?
        - Can you turn this into a regression model?
3. Document your response to the readings as well as your p5.js sketch in a blog post and add a link to the post and your p5.js sketch on the [Assignment 5 Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-5). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.
