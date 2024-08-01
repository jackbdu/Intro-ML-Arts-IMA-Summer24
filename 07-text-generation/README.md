# Text Generation

[ [Slides](https://docs.google.com/presentation/d/1T1nzvo6CnQrImMm1GkSxvFiw-iYG18XA8O6xzmIQ1rk/) \| [Sketches](https://editor.p5js.org/jackbdu/collections/kjuPKBzeH) ]

## Objectives

-   Learn about sequential data and Markov Chains.
-   Learn about Recurrent Neural Network (RNN) architectures.
-   Learn about transformer architecture.
-   Learn to work with large language models (LLMs) in JavaScript.

## Outline

### Large Language Models

-   Tokenizer
    -   [OpenAI Tokenizer Demo](https://platform.openai.com/tokenizer)
-   [Ollama](https://ollama.com)
    -   [Ollama Open-Source Large Language Model Library](https://ollama.com/library)
    -   [Ollama JavaScript Library](https://github.com/ollama/ollama-js)
    -   [Unofficial Ollama JS Library](https://github.com/dditlev/ollama-js-client)
-   [OpenAI API](https://openai.com/api/)
    -   [OpenAI API Reference](https://platform.openai.com/docs/api-reference/)
    -   [OpenAI API Playground](https://platform.openai.com/playground/)

### Related Projects

-   [ITP Course Generator](http://static.decontextualize.com/toys/next_semester) by Allison Parrish.
-   [Sunspring](https://arstechnica.com/gaming/2016/06/an-ai-wrote-this-movie-and-its-strangely-moving/) by Oscar Sharp, Ross Goodwin, et al.
-   [Double Agent](http://littlepig.org.uk/installations/doubleagent/index.htm) by Simon Biggs.
-   [Four Experiments in Handwriting with a Neural Network](https://distill.pub/2016/handwriting/) by Shan Carter, et al.
-   [10 things artificial intelligence did in 2018](http://aiweirdness.com/post/181621835642/10-things-artificial-intelligence-did-in-2018) by Janelle Shane.
-   [Writing with the Machine](https://www.robinsloan.com/notes/writing-with-the-machine/) by Robin Sloan.
-   [Magenta: Make Music and Art Using Machine Learning](https://magenta.tensorflow.org/) by Google AI.
-   [Handwriting Generation with RNN and p5.js](http://blog.otoro.net/2017/01/01/recurrent-neural-network-artist/) by @hardmaru.
-   [RNN for generating Baroque Music video](https://www.youtube.com/watch?v=SacogDL_4JU) by @carykh.
-   [Let's Read a Story](https://medium.com/ml5js/lets-read-a-story-talking-to-books-using-semantic-similarity-f283168b4264) by Itay Niv.
-   [Using ChatGPT to Implement Sol LeWitt's Wall Drawings](https://www.amygoodchild.com/blog/chatgpt-sol-lewitt-wall-drawings) by Amy Goodchild.

### p5.js Code Example

_Note: Ollama examples below can only be run [locally](https://github.com/processing/p5.js/wiki/Local-server) in conjunction with [Ollama](https://ollama.com)._

-   [Markov Chain Demo](https://editor.p5js.org/ima_ml/sketches/FW9u9zhz0)
-   [Ollama - Minimal Example](https://editor.p5js.org/jackbdu/sketches/qOuNl1GWk)
-   [Ollama - Click for New Response without Context](https://editor.p5js.org/jackbdu/sketches/0mCK8Y2CC)
-   [Ollama - Predetermined Prompts with Context](https://editor.p5js.org/jackbdu/sketches/TWijt5Q0x)
-   [Ollama - Chat Completion with Context](https://editor.p5js.org/jackbdu/sketches/DlzGP3mI7)
-   [OpenAI API - Chat Completion without Context](https://editor.p5js.org/jackbdu/sketches/lNVAh3F5E)
-   [OpenAI API - Chat Completion with Context](https://editor.p5js.org/jackbdu/sketches/DG-p-4d83)
-   [OpenAI API - Image Generation](https://editor.p5js.org/jackbdu/sketches/X8GCfwd3H)

## Supplemental Materials

-   Read [Markov Chains](http://setosa.io/blog/2014/07/26/markov-chains/) by Victor Powell and Lewis Lehe.
-   Read [N-Grams and Markov Chains](http://www.decontextualize.com/teaching/rwet/n-grams-and-markov-chains/) by Allison Parrish.
-   Read [Understanding LSTM Networks](http://colah.github.io/posts/2015-08-Understanding-LSTMs/) by Christopher Olah.
-   Read [The Unreasonable Effectiveness of RNNs](http://karpathy.github.io/2015/05/21/rnn-effectiveness/) by Andrei Karpathy.
-   Read [Recurrent Neural Networks & LSTMs](https://ayearofai.com/rohan-lenny-3-recurrent-neural-networks-10300100899b) by Lenny Khazan and Rohan Kapur.
-   Watch [But what is a GPT? Visual intro to transformers](https://www.youtube.com/watch?v=wjZofJX0v4M) by 3Blue1Brown.
-   Watch [Attention in transformers, visually explained](https://www.youtube.com/watch?v=eMlx5fFNoYc) by 3Blue1Brown.
-   Read [The Foundation Model Transparency Index](https://crfm.stanford.edu/fmti/May-2024/index.html) from Center for Research on Foundation Models at Stanford University.

### Video Tutorials

_Note: ml5.js tutorials below were taught using an older version of ml5.js, refer to the [ml5.js Resources Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/ml5.js-Resources) for more information._

-   [Markov Chains - Part 1 - video tutorial](https://www.youtube.com/watch?v=eGFJ8vugIWA) by Daniel Shiffman.
-   [Markov Chains - Part 2 - video tutorial](https://www.youtube.com/watch?v=9r8CmofnbAQ) by Daniel Shiffman.
-   [Context-Free Grammar - video tutorial](https://www.youtube.com/watch?v=8Z9FRiW2Jlc) by Daniel Shiffman.
-   [What is word2vec? - Programming with Text - video tutorial](https://www.youtube.com/watch?v=LSS_bos_TPI) by Daniel Shiffman.
-   [Sketch-RNN Snowflakes with ml5.js - video tutorial](https://www.youtube.com/watch?v=pdaNttb7Mr8) by Daniel Shiffman.
-   [Interactive Drawing with Machine Learning Model (SketchRNN) - video tutorial](https://www.youtube.com/watch?v=ZCXkvwLxBrA) by Daniel Shiffman.
-   [RDP Line Simplification Algorithm - video tutorial](https://www.youtube.com/watch?v=nSYw9GrakjY) by Daniel Shiffman.

### Assignment 7

1.  Read [What Can Machine Learning Teach Us About Ourselves?](https://medium.com/processing-foundation/what-can-machine-learning-teach-us-about-ourselves-65b268431890), interview with Emily Martinez, ml5.js Fellow 2020.
2.  Read [The Subtext of a Black Corpus](https://medium.com/ml5js/the-subtext-of-a-black-corpus-4440de02eb32), in conversation with ITP research fellows Nikita Huggins & Ayodamola Okunseinde by Ashley Lewis.
3.  Emily Martinez proposes a set of questions to ask related to working with a corpus of text data. Pick one (or two) of the questions to reflect on as you respond to the above two readings:
    -   How can we be more intentional about what we build given the current limitations, problems, and constraints of ML algorithms?
    -   How do we prepare datasets and set up guidelines that protect the bodies of knowledge of our communities, that honors lineage, that upholds ethical frameworks rooted in shared, agreed-upon values?
    -   How do we work in consensual and respectful ways with texts by marginalized authors that are not as well-represented, and by virtue of that fact alone, much more likely to be misrepresented, misappropriated, or misunderstood if we are not careful?
    -   How well can we ensure that the essence of these texts doesn’t dissolve into a word-soup that gets misconstrued?
    -   Given that so many of the existing “big data” language models are trained with Western texts and proprietary datasets, what does it even mean to try to decolonize AI?
    -   Who do we entrust to do this work?
    -   How do we deal with credit and attribution of our new creations?
    -   How do we really do ethics with machine learning?
    -   How do we get through this whole list of concerns and still build AI that is fun, respectful, tender, pleasurable, kind?
4.  Document your response to the readings in a blog post and add a link to the post on the [Assignment 7 Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Assignment-7).
5.  Review the [final project proposal guidelines](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/tree/main/08-final-project#proposal-guidelines) and post your final project proposal and slides on the [Final Proposal Wiki page](https://github.com/jackbdu/Intro-ML-Arts-IMA-Summer24/wiki/Final-Proposals).
