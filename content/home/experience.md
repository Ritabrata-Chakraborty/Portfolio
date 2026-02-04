---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 20

title: Experience
subtitle:

# Date format for experience
#   Refer to https://wowchemy.com/docs/customization/#date-format
date_format: Jan 2006

# Experiences.
#   Add/remove as many `experience` items below as you like.
#   Required fields are `title`, `company`, and `date_start`.
#   Leave `date_end` empty if it's your current employer.
#   Begin multi-line descriptions with YAML's `|2-` multi-line prefix.
experience:

  - title: ML Intern
    company: Uber
    company_url: 'https://uber.com'
    supervisor: Mr. Siddarth Malreddy
    supervisor_url: 'https://in.linkedin.com/in/malreddysid'
    company_logo: org-uber
    location: Bangalore, India
    date_start: '2025-07-01'
    date_end: '2025-12-01'
    description: |2-
    
        **Supervisor:** [Mr. Siddarth Malreddy](https://in.linkedin.com/in/malreddysid), Tech Lead Manager & [Mr. Ishan Nigam](https://www.linkedin.com/in/ishannigam/), Senior ML Engineer, Uber
        
        * Augmented uLabel with deep learning object tracking for automated RGB/IR video annotation, reducing manual effort
        * Deployed XGBoost anomaly detection in human-in-the-loop tracking validation for frame-level annotation accuracy
        
        **Tech Stack:** PyTorch, Python, C++

  - title: Research Intern
    company: National University of Singapore (NUS)
    company_url: 'https://nus.edu.sg'
    supervisor: Dr. Guillaume Sartoretti
    supervisor_url: 'https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/'
    company_logo: org-nus
    location: Singapore (Remote)
    date_start: '2025-03-01'
    date_end: 
    description: |2-
    
        **Supervisor:** [Dr. Guillaume Sartoretti](https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/), Assistant Professor, MARMoT Lab, NUS
        
        **Vision-Attention-Driven Autonomous Navigation with Semantic Understanding**
        * Enhanced CogniPlan with cross-attention between frontier and node embeddings to enrich node representations
        * Incorporated Visual Navigation Transformer (ViNT) to capture semantic context for adaptive exploration strategies
        
        **Uncertainty-Guided Path Planning via Conditional Layout Prediction**
        * Architected CogniPlan, integrating Wasserstein GAN-based conditional inpainting model and graph attention network for uncertainty-aware navigation
        * Achieved up to 17.7% shorter exploration paths and 3.9% improved navigation efficiency over state-of-the-art baselines across 100+ unseen maps, using a lightweight model with fewer than 0.35M parameters enabling real-time CPU inference
        
        **Tech Stack:** ROS Noetic (with Gazebo, Rviz), PyTorch, Python

  - title: Research Intern
    company: KU Leuven
    company_url: 'https://kuleuven.be'
    supervisor: Dr. Pradeep Kundu
    supervisor_url: 'https://www.kuleuven.be/wieiswie/en/person/00155770'
    company_logo: org-kul
    location: Belgium (Remote)
    date_start: '2024-09-01'
    date_end: 
    description: |2-
    
        **Supervisor:** [Dr. Pradeep Kundu](https://www.kuleuven.be/wieiswie/en/person/00155770), Assistant Professor, KU Leuven
        
        **Auxiliary Classifier WGAN-GP for Time-Series Sensor Data Generation**
        * Built ACWGAN-GP with TCN discriminator to augment minority fault classes, reaching ~100% classification accuracy
        * Evaluated synthetic data by comparing real and generated FFT spectra using PCC, Cosine Similarity, MMD, and KL Div
        
        **Conditional Latent Diffusion-GAN for CWT Generation and LiteFormer-based Classification**
        * Developed Conditional Latent Denoising Diffusion GAN (LDDGAN) with Supervised Contrastive Loss (SCL) for latent class separation (99.9% AE accuracy, 16× compression with EvoNorm-S0)
        * Designed LiteFormer variants integrating Continuous Wavelet Convolution (CWC), Haar DWT, WDCNN-BiLSTM-Siamese Network, and CWMS-GAN-inspired architectures, achieving up to 99.18% fault classification accuracy
        
        **Tech Stack:** PyTorch, Python

  - title: Research Intern
    company: CSIR-CEERI
    company_url: 'https://ceeri.res.in'
    supervisor: Dr. Kaushal Kishore
    supervisor_url: 'https://ieeexplore.ieee.org/author/37085653936'
    company_logo: org-ceeri
    location: Rajasthan, India
    date_start: '2024-01-01'
    date_end: 
    description: |2-
    
        **Supervisor:** [Dr. Kaushal Kishore](https://ieeexplore.ieee.org/author/37085653936), Principal Scientist, CSIR-CEERI
        
        **Exploring Unknown Indoor Environments with Drones Using a Multi-Critic DDPG Architecture**
        * Orchestrated a multi-critic DDPG control system for continuous pitch–yaw–roll drone navigation in indoor spaces
        * Implemented a hybrid reward structure with artificial potential fields and precision replay into DDPG, improving navigation

        **Monocular Vision-Based UAV Navigation for Orchard Monitoring**
        * Engineered a UAV-based orchard monitoring system using YOLOv11 (Box mAP50: 95.5%, Mask mAP50: 96.5%)
        * Programmed B-spline trajectory logic and implemented custom yaw-roll controller to minimize drift under wind
        
        **Tech Stack:** PyTorch, Python, ROS Noetic, AirSim, NVIDIA Jetson Orin NX

  - title: Summer Research Intern
    company: Bhabha Atomic Research Centre (BARC)
    company_url: 'https://barc.gov.in'
    supervisor: Dr. Rishi Verma
    supervisor_url: 'https://www.researchgate.net/profile/Rishi-Verma-3'
    company_logo: org-barc
    location: Visakhapatnam, India
    date_start: '2024-06-01'
    date_end: '2024-07-31'
    description: |2-
    
        **Supervisor:** [Dr. Rishi Verma](https://www.researchgate.net/profile/Rishi-Verma-3), PPEMD Head, Bhabha Atomic Research Centre (BARC)
        
        **Image-Based Visual Servoing for Automated Radar Control and UAV Tracking**
        * Orchestrated radar alignment using YOLOv8 + DeepSORT, boosting tracking recall to 91% and speed by 13%
        * Implemented PLC-based actuation system for continuous UAV lock-in
        
        **Tech Stack:** YOLOv8, DeepSORT, Python

design:
  columns: '2'
---
