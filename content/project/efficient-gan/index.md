---
title: An Efficient Approach for Synthetic Data Generation and Fault Diagnosis for Rotating Machinery
summary: This study explores the use of an Auxiliary Classifier Wasserstein GAN with Gradient Penalty (ACWGAN-GP) for synthetic data generation and fault diagnosis in rotating machinery, addressing data scarcity and class imbalance challenges.
tags:
  - generative-ai
date: '2025-07-05T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: '/publication/synthetic-data-phm-2025/'

image:
  caption: Synthetic Data Generation Pipeline
  focal_point: Smart

links:
  - name: "DOI"
    url: "https://doi.org/10.1049/icp.2025.2364"
    icon_pack: ai
    icon: doi
  - name: "PDF"
    url: "https://digital-library.theiet.org/doi/10.1049/icp.2025.2364"
    icon_pack: fas
    icon: file-pdf
  - name: "Code"
    url: "https://github.com/Ritabrata-Chakraborty/An-Efficient-Approach-for-Synthetic-Data-Generation-and-Fault-Diagnosis-for-Rotating-Machinery"
    icon_pack: fab
    icon: github
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
slides: ""
---

This study explores the use of an Auxiliary Classifier Wasserstein GAN with Gradient Penalty (ACWGAN-GP) for synthetic data generation and fault diagnosis in rotating machinery. The proposed framework addresses data scarcity and class imbalance by generating diverse time-series signals using a 1D-CNN generator and a Temporal Convolutional Network (TCN)-based discriminator, both enhanced with positional embeddings. The discriminator also functions as a fault classifier. Statistical similarity metrics, PCC, Cosine Similarity, KL Divergence, and MMD, are used to validate sample quality. Experiments on the CWRU-bearing dataset demonstrate improved classification robustness and effectiveness.

## Key Features

- Auxiliary Classifier Wasserstein GAN with Gradient Penalty (ACWGAN-GP)
- 1D-CNN generator with positional embeddings
- Temporal Convolutional Network (TCN)-based discriminator
- Statistical similarity validation metrics
- Fault diagnosis capabilities

## Technologies Used

- Deep Learning frameworks
- Generative Adversarial Networks
- Temporal Convolutional Networks
- Statistical analysis tools
- CWRU-bearing dataset
