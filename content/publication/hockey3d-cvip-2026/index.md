---
title: "Hockey3D: A Public Field Hockey Shot Trajectory Dataset with 3D Reconstruction and Shot Type Classification"
authors:
- admin
- M. Dasgupta
date: "2026-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: Conference on Computer Vision and Image Processing (CVIP)
publication_short: CVIP 2026

abstract: "While sports analytics has advanced significantly for popular sports, many domains remain underserved, particularly field hockey, which lacks comprehensive studies on shot statistics and trajectory analysis. We present a generic computer vision and machine learning pipeline applicable to any sports broadcast video, demonstrated specifically for field hockey shot analysis. Our contributions are threefold: (1) 3D Trajectory Reconstruction: We employ PnLCalib for camera calibration, conduct extensive ablations across detection methods (YOLO, RF-DETR, BlurBall, WASB) with Hough Circle, and formulate 3D localization as a Bayesian optimization problem—assuming parametric 3D trajectories, we project them to 2D image space and iteratively refine parameters to match observed detections. (2) Shot Classification with Comprehensive Ablations: We evaluate multiple ML/DL architectures including temporal models (TCN, LSTM, BiLSTM, GRU, Transformer) and classical methods (XGBoost, Random Forest, SVM, KNN) on seven hockey shot types (Hit/Drive, Slap Shot, Push Shot, Flick, Scoop, Tomahawk/Reverse Hit, Sweep Hit), achieving 96.4% accuracy with our TCN architecture. (3) Real-World Dataset: We make publicly available a dataset extracted from broadcast videos with annotated 3D trajectories and shot labels, addressing critical data scarcity in field hockey analytics. Our modular pipeline achieves sub-meter 3D localization accuracy and provides a reusable framework for trajectory analysis across different sports."

# Summary. An optional shortened abstract.
# summary: "A generic computer vision and ML pipeline for sports trajectory analysis, demonstrated on field hockey. Features PnLCalib-based 3D reconstruction with Bayesian optimization, comprehensive classifier ablations achieving 96.4% accuracy, and a public broadcast video dataset."

tags:
- Sports Analytics
- 3D Trajectory Reconstruction
- Shot Classification
- Field Hockey
- Broadcast Video Analysis
- Bayesian Optimization
- Deep Learning
- Computer Vision
- Temporal Convolutional Networks
- PnLCalib
- Camera Calibration
- YOLO
- RF-DETR
- Machine Learning

featured: false

links:
- name: "Paper"
  url: "https://drive.google.com/file/d/1XSeU50fM_yJUn0u2wcNOM2itZovqAA2V/view?usp=drive_link"
  icon_pack: fas
  icon: file-pdf

url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'Hockey3D Dataset'
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
