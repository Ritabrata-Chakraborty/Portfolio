---
title: 'CogniPlan: Uncertainty-Guided Path Planning with Conditional Generative Layout Prediction'
summary: CogniPlan leverages conditional generative inpainting models to predict multiple plausible layouts, mirroring human cognitive maps for uncertainty-guided path planning in unknown environments.
tags:
  - robotics
date: '2025-01-01T00:00:00Z'

# Optional external URL for project (replaces project detail page).
external_link: '/publication/cogniplan-corl-2025/'

image:
  caption: CogniPlan Architecture
  focal_point: Smart

links:
  - name: "Project"
    url: "https://yizhuo-wang.com/cogniplan/"
    icon_pack: fas
    icon: external-link-alt
  - name: "PDF"
    url: "https://www.arxiv.org/abs/2508.03027"
    icon_pack: fas
    icon: file-pdf
  - name: "Code"
    url: "https://github.com/marmotlab/CogniPlan"
    icon_pack: fab
    icon: github
url_code: ''
url_pdf: ''
url_slides: ''
url_video: ''

# Slides (optional).
slides: ""
---

Path planning in unknown environments is a crucial yet inherently challenging capability for mobile robots, which primarily encompasses two coupled tasks: autonomous exploration and point-goal navigation. In both cases, the robot must perceive the environment, update its belief, and accurately estimate potential information gain on-the-fly to guide planning. 

CogniPlan is a novel path planning framework that leverages multiple plausible layouts predicted by a conditional generative inpainting model, mirroring how humans rely on cognitive maps during navigation. These predictions, based on the partially observed map and a set of layout conditioning vectors, enable our planner to reason effectively under uncertainty.

## Key Features

- Conditional generative inpainting for layout prediction
- Multiple plausible layout generation
- Graph-attention-based path planning
- Uncertainty-guided reasoning
- Cognitive map-inspired navigation
- Real-world deployment capabilities

## Technologies Used

- Conditional Generative Models
- Graph Attention Networks
- Occupancy mapping
- Mobile robotics platforms
- High-fidelity simulation
- Computer Vision
