---
# An instance of the Experience widget.
# Documentation: https://wowchemy.com/docs/page-builder/
widget: experience

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 40

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

  - title: ML Research Intern
    company: Uber
    company_url: 'https://uber.com'
    company_logo: org-uber
    location: Remote
    date_start: '2025-07-01'
    date_end: 
    description: |2-
    
        * Enhanced annotation quality in uLabel by integrating foundation models for image (RGB/IR) auto-labelling, cutting manual labelling time significantly
        * Built deep learning pipelines for model-assisted pre-annotation, speeding up data curation in autonomy workflows
        * **Tech Stack**: PyTorch, Python, C++


  - title: Research Assistant - Uncertainty-Guided Path Planning
    company: National University of Singapore (NUS)
    company_url: 'https://nus.edu.sg'
    supervisor: Dr. Guillaume Sartoretti
    supervisor_url: 'https://www.comp.nus.edu.sg/~guillaume/'
    company_logo: org-kul
    location: Singapore (Remote)
    date_start: '2025-03-01'
    date_end: '2025-07-31'
    description: |2-
    
        * Co-developed CogniPlan, integrating a Wasserstein GAN-based conditional inpainting model and graph attention network for uncertainty-aware navigation
        * Achieved 17.7% shorter exploration paths and 3.9% better navigation efficiency across 100+ maps
        * **Tech Stack**: ROS Noetic (with Rviz), PyTorch, Python

  - title: Research Assistant - Synthetic Sensor Data Generation
    company: KU Leuven
    company_url: 'https://kuleuven.be'
    supervisor: Dr. Pradeep Kundu
    supervisor_url: 'https://www.kuleuven.be/wieiswie/en/person/00135940'
    company_logo: org-kul
    location: Belgium (Remote)
    date_start: '2024-10-01'
    date_end: '2025-07-31'
    description: |2-
    
        * Employed Auxiliary Classifier Wasserstein GAN to synthesize time-series sensor data across multiple fault classes
        * Devising Conditional Latent Denoising Diffusion GAN for generating CWT-based time-frequency images
        * Improving LiteFormer, an attention-free, transformer-inspired classifier for fault classification
        * **Tech Stack**: PyTorch, Python

  - title: Research Assistant - UAV Navigation for Orchard Monitoring
    company: CSIR-CEERI
    company_url: 'https://ceeri.res.in'
    supervisor: Dr. Kaushal Kishore
    supervisor_url: 'https://www.ceeri.res.in/profiles/kaushal-kishore/'
    company_logo: org-ceeri
    location: Rajasthan, India
    date_start: '2024-01-01'
    date_end: '2025-02-28'
    description: |2-
    
        * Created UAV-based orchard monitoring system using YOLOv11 (Box mAP50: 95.5%, Mask mAP50: 96.5%)
        * Devised B-spline trajectory logic and implemented custom yaw-roll controller, ensuring minimal drift under mild wind
        * **Tech Stack**: YOLOv11, ROS Noetic, AirSim, NVIDIA Jetson Orin NX

  - title: Research Assistant - Automated Radar Control
    company: Bhabha Atomic Research Centre (BARC)
    company_url: 'https://barc.gov.in'
    supervisor: Dr. Rishi Verma
    supervisor_url: 'https://www.barc.gov.in/'
    company_logo: org-barc
    location: Mumbai, India
    date_start: '2024-06-01'
    date_end: '2024-07-31'
    description: |2-
    
        * Automated radar alignment using YOLOv8 + DeepSORT, improving tracking recall to 91% and speed by 13%
        * Integrated PLC-based actuation system enabling continuous UAV lock-in
        * **Tech Stack**: YOLOv8, DeepSORT, Python

design:
  columns: '2'
---
