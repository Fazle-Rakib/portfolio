---
id: 461327
title: 'OOD-Speech: A Benchmark Dataset for Bengali ASR'
slug: ood-speech-benchmark-dataset-bengali-asr
published_at: 2023-09-23T16:00:00.000Z
tags: nlp, asr, bengali, dataset
excerpt: OOD-Speech is the largest Bengali ASR dataset designed for out-of-distribution benchmarking. Learn about its significance and applications in improving robust speech recognition.
crosspostedOn:
crosspostLink:
url: https://arxiv.org/abs/2305.09688
path: /articles/ood-speech-benchmark-dataset-bengali-asr
canonicalUrl:
cover_image: https://bengali-ai.org/images/ood-speech-cover.png
---

The OOD-Speech dataset is a groundbreaking step toward building robust and inclusive speech recognition systems for Bengali speakers. In this post, we'll explore the purpose behind the dataset, its core features, and why it's a significant benchmark for improving Automatic Speech Recognition (ASR) in out-of-distribution (OOD) contexts.

## Table of contents

- [Introduction to OOD-Speech](#introduction-to-ood-speech)
- [Key Features of OOD-Speech](#key-features-of-ood-speech)
- [Challenges Addressed](#challenges-addressed)
- [How OOD-Speech is Built](#how-ood-speech-is-built)
- [Applications and Benchmarking](#applications-and-benchmarking)
- [Further Reading](#further-reading)

## Introduction to OOD-Speech

**OOD-Speech** is the largest dataset for Bengali ASR, designed to handle out-of-distribution benchmarking. Released in **May 2023**, it offers a collection of **1177.94 hours of speech data** from over **22,000 speakers** across diverse Bengali-speaking regions in South Asia.

This dataset was created to address one of the most significant hurdles in modern ASR: **distribution shifts**. Traditional ASR models struggle with out-of-distribution speech variations, such as regional dialects or conversational prosody, making OOD-Speech a critical resource for training models that can perform better in real-world environments.

## Key Features of OOD-Speech

- **Largest Bengali ASR Dataset**: The dataset includes **1177.94 hours of speech** from over 22,000 speakers.
- **Diverse Speech Sources**: The dataset captures speech from religious sermons, talk shows, TV series, audiobooks, and more, ensuring coverage of different speech contexts.
- **High-Quality Annotations**: Annotated text accompanies the audio, making it ideal for training and benchmarking ASR models.
- **OOD Test Dataset**: A dedicated **23.03 hours** test dataset comprising speech from **17 different domains**, designed to test model robustness against unseen data.

## Challenges Addressed

Bengali is a highly **morphologically rich** language with numerous dialects, tonal variations, and regional prosodic differences. The key challenge OOD-Speech aims to address is building speech recognition models that work effectively across different **domains**, **contexts**, and **speakers**.

By offering out-of-distribution speech data, the dataset pushes the boundaries of ASR models to handle:

- **Varying accents and dialects** from different parts of South Asia.
- **Noisy environments** like street noise or background conversations.
- **Different registers** of speech, such as formal vs. conversational.

## How OOD-Speech is Built

The dataset was built through large-scale **crowdsourcing** efforts, with careful curation to ensure the inclusion of various speech domains. The primary goal was to gather data that simulates real-world Bengali speech across various settings. Here’s how it was structured:

- **Source Diversity**: Data was collected from speakers of different ages, regions, and educational backgrounds to provide wide linguistic coverage.
- **Annotations**: Each speech sample was annotated for phonetic clarity and context, ensuring the highest quality for training robust models.

## Applications and Benchmarking

Researchers and developers can leverage the OOD-Speech dataset to:

- **Benchmark ASR models** for Bengali under out-of-distribution conditions.
- Train **speech-to-text systems** that perform well across dialects and speech contexts.
- Develop more **inclusive language technologies**, making Bengali ASR available to more people globally.

As an **open dataset**, it enables comparison across models and encourages collaborative improvements in Bengali language technology.

## Further Reading

To learn more about OOD-Speech and access the dataset, check out the official paper and project page:

- **Project Page**: [OOD-Speech on Bengali.AI](https://bengaliai.github.io/asr)
- **Research Paper**: [OOD-Speech: A Large Bengali Speech Recognition Dataset for Out-of-Distribution Benchmarking](https://arxiv.org/abs/2305.09688)
