# Face and Hand Models

[ [Slides](https://docs.google.com/presentation/d/1otYnpKOQG2iwVMPExmTgppvQ6aeKN2UW7HxxcGktJnc/) | [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Ability to work with HandPose and FaceMesh models in ml5.js.

## Outline

### Models

-   [FaceMesh](https://docs.ml5js.org/#/reference/facemesh)
    -   [ml5js/ml5-next-gen/src/FaceMesh](https://github.com/ml5js/ml5-next-gen/tree/main/src/FaceMesh)
    -   [tensorflow/tfjs-models/face-landmarks-detection](https://github.com/tensorflow/tfjs-models/tree/master/face-landmarks-detection)
-   [HandPose](https://docs.ml5js.org/#/reference/handpose)
    -   [ml5js/ml5-next-gen/src/HandPose](https://github.com/ml5js/ml5-next-gen/tree/main/src/HandPose)
    -   [tensorflow/tfjs-models/hand-pose-detection](https://github.com/tensorflow/tfjs-models/tree/master/hand-pose-detection)

### Related Projects

-   [LipSync by YouTube](https://experiments.withgoogle.com/lipsync) by Google PI & bit.studio.
-   [Customizable AR face masks - Made with TensorFlow.js](https://www.youtube.com/watch?v=TpiGFaHC_5U) by Samarth Gulati and Praveen Sinha.
-   [Eye Conductor](https://www.andreasrefsgaard.dk/projects/eye-conductor/) by Andreas Refsgaard.
-   [Sampler](https://experiments.withgoogle.com/sampler) by Use All Five & Google Creative Lab.
-   [Keyboard](https://experiments.withgoogle.com/keyboard) by Use All Five & Google Creative Lab.
-   [Fingerspelling](https://www.hellomonday.com/work/fingerspelling) by Hello Monday.
-   [Finger Talk](https://www.media.mit.edu/projects/finger-talk/overview/) by Future Sketches.
-   [Mouth-Controlled Synthesizer with FaceMesh](https://www.instagram.com/p/C41i1VQsfs0/) by Jack B. Du. [ [Live Demo](https://editor.p5js.org/jackbdu/full/lNFGj9ENL) ]
-   [Melody Painter with HandPose](https://www.instagram.com/p/C4WozrtsZ4r/) by Jack B. Du. [ [Live Demo](https://editor.p5js.org/jackbdu/full/jIvzImJMb) ]

### ml5.js Code Examples

-   [FaceMesh - Single Image](https://editor.p5js.org/ml5/sketches/lqQZrDJHF)
-   [FaceMesh - Face Keypoints](https://editor.p5js.org/ml5/sketches/lCurUW1TT)
-   [FaceMesh - Face Bounding Box](https://editor.p5js.org/ml5/sketches/fMCIspRD7_)
-   [FaceMesh - Parts Keypoints](https://editor.p5js.org/ml5/sketches/EjynWxazD4)
-   [FaceMesh - Parts Bounding Box](https://editor.p5js.org/ml5/sketches/F9jRILxn2)
-   [FaceMesh - Shapes from Parts](https://editor.p5js.org/ml5/sketches/6qj0M3ElM)
-   [FaceMesh - Emoji Face](https://editor.p5js.org/jackbdu/sketches/yZaBHBH6S)
-   [FaceMesh - Triangulation](https://editor.p5js.org/jackbdu/sketches/J_NYWKtT7)
-   [FaceMesh - Face Masks](https://editor.p5js.org/jackbdu/sketches/O6BB8iRHv)
-   [HandPose - Single Image](https://editor.p5js.org/ml5/sketches/8VK_l3XwE)
-   [HandPose - Keypoints](https://editor.p5js.org/ml5/sketches/QGH3dwJ1A)
-   [HandPose - Keypoints 3D](https://editor.p5js.org/jackbdu/sketches/DZoGg02Sx)
-   [HandPose - Parts](https://editor.p5js.org/ml5/sketches/DNbSiIYKB)
-   [HandPose - Detect Start and Stop](https://editor.p5js.org/ml5/sketches/W9vFFT5RM)
-   [HandPose - Particles](https://editor.p5js.org/jackbdu/sketches/4Pd5XgWtC)
-   [HandPose - Quadrilateral](https://editor.p5js.org/jackbdu/sketches/s3uqE-9fA)
-   [HandPose - Quadrilateral with Texture](https://editor.p5js.org/jackbdu/sketches/JwMBQyES3)

## Supplemental Materials

-   Read [Face and hand tracking in the browser with MediaPipe and TensorFlow.js](https://blog.tensorflow.org/2020/03/face-and-hand-tracking-in-browser-with-mediapipe-and-tensorflowjs.html) by Ann Yuan and Andrey Vakunov.
-   Read [On-Device, Real-Time Hand Tracking with MediaPipe](https://research.google/blog/on-device-real-time-hand-tracking-with-mediapipe/) by Valentin Bazarevsky and Fan Zhang.

## Assignment 4

1. Research and find a project (experiments, websites, art installations, games, etc) that utilizes machine learning in a creative way. Consider the following:
    - What type of machine learning models did the creator use?
    - What data might have been used to train the machine learning model?
    - Why did the creator of the project choose to use this machine learning model?
2. Pick one of the models above (FaceMesh or HandPose), following the examples above and the [ml5.js documentation](https://docs.ml5js.org/), experiment with controlling elements of a p5.js sketch (color, geometry, sound, text, etc) with the output of the model. Try to create an interaction that is surprising or one that is inspired by the project you find.
3. Document your research, your response, and your p5.js sketch in a blog post. Add a link to the post and your p5.js sketch on the [Assignment 4 Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-4). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.
