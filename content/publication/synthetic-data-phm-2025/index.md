---
title: "An Efficient Approach for Synthetic Data Generation and Fault Diagnosis for Rotating Machinery"
authors:
- admin
- T. Mian
- P. Kundu
date: "2025-07-05T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-07-05T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Prognostics and System Health Management Conference (PHM), Published in IET Conference Proceedings
publication_short: PHM 2025

abstract: "This study explores the use of an Auxiliary Classifier Wasserstein GAN with Gradient Penalty (ACWGAN-GP) for synthetic data generation and fault diagnosis in rotating machinery. The proposed framework addresses data scarcity and class imbalance by generating diverse time-series signals using a 1D-CNN generator and a Temporal Convolutional Network (TCN)-based discriminator, both enhanced with positional embeddings. The discriminator also functions as a fault classifier. Statistical similarity metrics including PCC, Cosine Similarity, KL Divergence, and MMD are used to validate sample quality. Experiments on the CWRU-bearing dataset demonstrate improved classification robustness and effectiveness, reaching ~100% classification accuracy."

# Summary. An optional shortened abstract.
summary: "This study explores the use of an Auxiliary Classifier Wasserstein GAN with Gradient Penalty (ACWGAN-GP) for synthetic data generation and fault diagnosis in rotating machinery, addressing data scarcity and class imbalance challenges."

tags:
- Fault Diagnosis
- Synthetic Data
- Rotating Machinery
- ACWGAN-GP
- Temporal Convolutional Networks
- Deep Learning
- Predictive Maintenance

featured: false

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
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Synthetic Sensory Data Generation Pipeline'
  focal_point: ""
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder name, e.g. `internal-project`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---

This work addresses the challenge of limited fault data in rotating machinery by developing efficient synthetic data generation techniques using auxiliary classifier Wasserstein GANs and conditional latent denoising diffusion models.
