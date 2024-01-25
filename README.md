# Dark-Patterns-Hackathon-2023
This is Team Adeptus Mechanicus's Submission for the Dark Patterns Hackathon 2023 by the Ministry of Consumer Affairs of India

## About
The Dark Patterns Hackathon, specifically the "Dark Patterns Buster Hackathon (DPBH-2023)", was a recent initiative launched by the Department of Consumer Affairs, Government of India, in collaboration with IIT (BHU) Varanasi. Held in October 2023, it aimed to address deceptive design practices (known as dark patterns) employed by e-commerce platforms to manipulate user behavior and potentially harm consumer rights.

## Contents
### 1. Local Host
This directory contains all the files necessary to run a local instance of the LLM [IDEFICS](https://huggingface.co/blog/idefics).
The Input to the LLM is given through the Web Extension through an API call, by making the code take the input through a post request from a Client device. 
### 2. Web Extension
This directory contains all the files necessary to make the Web Extension that runs on the browsers of the user.

## LLM Used 
The LLM used is the IDEFICS(Image-aware Decoder Enhanced à la Flamingo with Interleaved Cross-attentionS), an open-access visual language model. IDEFICS is based on Flamingo, a state-of-the-art visual language model initially developed by DeepMind, which has not been released publicly. Similarly to GPT-4, the model accepts arbitrary sequences of image and text inputs and produces text outputs. IDEFICS is built solely on publicly available data and models (LLaMA v1 and OpenCLIP) and comes in two variants—the base version and the instructed version. Each variant is available at the 9 billion and 80 billion parameter sizes.
The LLM has been fine tuned with the dataset mentioned below in order to work optimally for this use case.

## Dataset
The dataset used to fine train the LLM: [LINK](https://github.com/klarna/product-page-dataset?tab=readme-ov-file)
