# Body Models

[ [Slides](https://docs.google.com/presentation/d/1l_D9syEOAxvoi1ud_urHPrQJ8-xC80GRU2YfkQAC7qw/) \| [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Understanding how to use pre-trained models other than image classification.
-   Ability to work with BodyPose and BodySegmentation models in ml5.js.

## Outline

### Models

-   [BodyPose](https://docs.ml5js.org/#/reference/bodypose)
    -   [ml5js/ml5-next-gen/src/BodyPose](https://github.com/ml5js/ml5-next-gen/tree/main/src/BodyPose)
    -   [tensorflow/tfjs-models/pose-detection](https://github.com/tensorflow/tfjs-models/tree/master/pose-detection)
-   [BodySegmentation](https://docs.ml5js.org/#/reference/body-segmentation)
    -   [ml5js/ml5-next-gen/src/BodySegmentation](https://github.com/ml5js/ml5-next-gen/tree/main/src/BodySegmentation)
    -   [tensorflow/tfjs-models/body-segmentation](https://github.com/tensorflow/tfjs-models/tree/master/body-segmentation)

### Related Projects

-   [PoseNet Sketchbook](https://googlecreativelab.github.io/posenet-sketchbook/) by Maya Man.
-   [Body, Movement, Language: A.I. Sketches with Bill T. Jones](https://experiments.withgoogle.com/billtjonesai) from Google Creative Lab.
-   [Web Olympic](https://vibertthio.com/web-olympic/) by Vibert Thio.
-   [Sidewalk Orchestra](https://github.com/cvalenzuela/sidewalk_orchestra) by Cristóbal Valenzuela.
-   [Pose Music](https://codepen.io/teropa/full/QxLrMp/) by Tero Parviainen.
-   [The Treachery of Sanctuary](https://www.youtube.com/watch?v=I5__9hq-yas&feature=youtu.be) by Chris Milk.
-   [Gait Analysis](https://www.runnersneed.com/expert-advice/gear-guides/gait-analysis.html) from runnersneed.
-   [Moving morrir](https://experiments.withgoogle.com/move-mirror) from Google Creative Lab.
-   [Semi-Conductor](https://experiments.withgoogle.com/semi-conductor) from Google Creative Lab.
-   [Touch Type](https://experiments.withgoogle.com/touch-type) by Richard Yee.
-   [nixel-Body](http://cmuems.com/2018/60212f/nixel/10/12/nixel-body/) from CMU Interactivity & Computation.
-   [Pose Animator](https://github.com/yemount/pose-animator/) by Shan Huang.
-   [AR Body Filters](https://sheeborshee.com/AR-body-filters-2019) by Daria Sazanovich.
-   [ballet rotoscope](https://www.youtube.com/watch?v=yzJk6ww3LD0) by Euphrates.
-   [Dance with Bubbles](https://sihanzhang.wixsite.com/myspace/machine-learning-for-the-web) by Sihan Zhang.
-   [This Is Not A Theremin](https://sofiaitp.wordpress.com/2018/12/04/this-is-not-a-theremin/) by Guillermo Montecinos and Sofía Suazo.
-   [Body Synth](https://experiments.withgoogle.com/body-synth) by Use All Five & Google Creative Lab.

### ml5.js Code Examples

-   [BodyPose - MoveNet Keypoints](https://editor.p5js.org/ml5/sketches/c8sl_hGmN)
-   [BodyPose - MoveNet Skeleton](https://editor.p5js.org/ml5/sketches/vpSI23x0A)
-   [BodyPose - BlazePose Keypoints](https://editor.p5js.org/ml5/sketches/OukJYAJAb)
-   [BodyPose - BlazePose Skeleton](https://editor.p5js.org/ml5/sketches/KWgsAbgkk)
-   [BodyPose - Drawing with Nose](https://editor.p5js.org/jackbdu/sketches/bUsDnrEbv)
-   [BodyPose - Trailing Effect](https://editor.p5js.org/jackbdu/sketches/eQTjLNK35)
-   [BodyPose - Cat or Dog](https://editor.p5js.org/jackbdu/sketches/26sLU0Ub-)
-   [BodySegmentation - Mask Background with SelfieSegmentation](https://editor.p5js.org/ml5/sketches/KNsdeNhrp)
-   [BodySegmentation - Mask Person with SelfieSegmentation](https://editor.p5js.org/ml5/sketches/h6TN8umP5)
-   [BodySegmentation - Mask Body Parts with BodyPix](https://editor.p5js.org/ml5/sketches/ruoyal-RC)
-   [BodySegmentation - Mask Select Body Parts with BodyPix](https://editor.p5js.org/ml5/sketches/R5rug0HKk)
-   [Additional examples from Yining Shi](https://github.com/yining1023/machine-learning-for-the-web/tree/main/week3-pose) (_Note: these demos were created with an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._)

## Supplemental Materials

-   Read [Real-Time Human Pose Estimation in the Browser with TensorFlow.js](https://medium.com/tensorflow/real-time-human-pose-estimation-in-the-browser-with-tensorflow-js-7dd0bc881cd5) by Dan Oved, with editing and illustrations by Irene Alvarado and Alexis Gallo.
-   Read [Introducing BodyPix: Real-time Person Segmentation in the Browser with TensorFlow.js](https://medium.com/tensorflow/introducing-bodypix-real-time-person-segmentation-in-the-browser-with-tensorflow-js-f1948126c2a0) by Dan Oved and Tyler Zhu, with editing by Irene Alvarado.
-   Read [Pose Animator - An open source tool to bring SVG characters to life in the browser via motion capture](https://blog.tensorflow.org/2020/05/pose-animator-open-source-tool-to-bring-svg-characters-to-life.html) by Shan Huang.
-   Read [Feminist Data Set](https://carolinesinders.com/wp-content/uploads/2020/05/Feminist-Data-Set-Final-Draft-2020-0526.pdf), a tool kit to interrogate every step of the AI process by Caroline Sinders.
-   Watch [The Future Is Here!](https://thephotographersgallery.org.uk/whats-on/digital-project/mimi-onuoha-future-here), a commission for The Photographers’ Gallery which examines the process of dataset creation by Mimi Ọnụọha.
-   Watch [Ted Talk: The era of blind faith in big data must end](https://www.youtube.com/watch?v=_2u_eHHzRto) by Cathy O'Neil.
    -   Cathy O'Neil's [Risk Consulting & Algorithmic Auditing firm](https://orcaarisk.com/).

### ml5.js Video Tutorials

_Note: these tutorials were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._

-   [ml5.js Pose Estimation with PoseNet - video tutorial](https://youtu.be/OIo-DIOkNVg?list=PLRqwX-V7Uu6YPSwT06y_AEYTqIwbeam3y) by Daniel Shiffman
-   [ml5.js: Pose Classification with PoseNet and ml5.neuralNetwork() - video tutorial](https://www.youtube.com/watch?v=FYgYyq-xqAw&t=1197s) by Daniel Shiffman
-   [ml5.js: Pose Regression with PoseNet and ml5.neuralNetwork() - video tutorial](https://www.youtube.com/watch?v=lob74HqHYJ0) by Daniel Shiffman

### Assignment 3

1. Read [Mixing movement and machine](https://medium.com/artists-and-machine-intelligence/mixing-movement-and-machine-848095ea5596) by Maya Man.
2. Read [Humans of AI](https://humans-of.ai/editorial) by Philipp Schmitt.
3. Pick one of the models above (BodyPose or BodySegmentation), following the examples above and [ml5.js documentation](https://docs.ml5js.org/), experiment with controlling elements of a p5.js sketch (color, geometry, sound, text, etc) with the output of the model.
4. Read [Open Sourcing the Origin Stories: The ml5.js Model and Data Provenance Project](https://github.com/ellennickles/ml5js-model-and-data-provenance-project) by Ellen Nickles and reflect on the the following questions:
    - What questions do you still have about the model and the associated data? Are there elements you would propose including in the biography?
    - How does understanding the provenance of the model and its data inform your creative process?
5. Document your response to the readings as well as your p5.js sketch in a blog post and add a link to the post and your p5.js sketch on the [Assignment 3 Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-3). In your blog post, include visual documentation such as a recorded screen capture / video / GIFs of your sketch.
