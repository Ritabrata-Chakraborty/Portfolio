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
    date_end: 
    description: |2-
    
        Supervisor: [Mr. Siddarth Malreddy](https://in.linkedin.com/in/malreddysid), Tech Lead Manager & [Mr. Ishan Nigam](https://www.linkedin.com/in/ishannigam/), Senior ML Engineer, Uber
        
        * Augmented [uLabel](https://www.uber.com/us/en/ai-solutions/annotation/) with deep learning object tracking for automated RGB/IR video annotation, reducing manual effort
        * Deployed XGBoost anomaly detection in human-in-the-loop tracking validation for frame-level annotation accuracy

  - title: Vision-Attention-Driven Autonomous Navigation with Semantic Understanding
    company: National University of Singapore (NUS)
    company_url: 'https://nus.edu.sg'
    supervisor: Dr. Guillaume Sartoretti
    supervisor_url: 'https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/'
    company_logo: org-nus
    location: Singapore (Remote)
    date_start: '2025-08-01'
    date_end: 
    description: |2-
    
        Supervisor: [Dr. Guillaume Sartoretti](https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/), Assistant Professor, MARMoT Lab, NUS
        
        * Enhanced CogniPlan with cross-attention between frontier and node embeddings to enrich node representations
        * Incorporated [Visual Navigation Transformer (ViNT)](https://general-navigation-models.github.io/vint/) to capture semantic context for adaptive exploration strategies

  - title: Design and Development of Smart Automated Field Hockey Ball Launcher
    company: BITS Pilani
    company_url: 'https://bits-pilani.ac.in'
    supervisor: Dr. Mani Shankar Dasgupta
    supervisor_url: 'https://www.bits-pilani.ac.in/pilani/m-s-dasgupta/'
    company_logo: org-bitsp
    location: Rajasthan, India
    date_start: '2024-04-01'
    date_end: '2025-10-31'
    description: |2-
    
        Supervisor: [Dr. Mani Shankar Dasgupta](https://www.bits-pilani.ac.in/pilani/m-s-dasgupta/), Senior Professor, BITS Pilani
        [🔗 Project Proposal](https://drive.google.com/file/d/1h7X9fIiih37ivgERVR-wbWsDEil0qvpI/view?usp=drive_link)
        
        **Physics-Based Launcher Mechanical Design and FEM Analysis**
        * Fabricated programmable launcher achieving 150 km/h using CFRP composite and stainless steel components
        * Performed FEM analysis and CAD using Fusion 360, achieving safety factor 2.07 at 496 RPM
        
        **Computer Vision Pipeline for 3D Trajectory Reconstruction and Shot Classification**
        * Devised 3D ball localization from monocular videos using diameter-based depth and [PnLCalib](https://github.com/mguti97/PnLCalib) (0.76m RMSE)
        * Developed TCN-attention classifier fusing trajectory and statistical features, achieving 95.2% classification accuracy

  - title: Uncertainty-Guided Path Planning via Conditional Layout Prediction
    company: National University of Singapore (NUS)
    company_url: 'https://nus.edu.sg'
    supervisor: Dr. Guillaume Sartoretti
    supervisor_url: 'https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/'
    company_logo: org-nus
    location: Singapore (Remote)
    date_start: '2025-03-01'
    date_end: '2025-08-31'
    description: |2-
    
        Supervisor: [Dr. Guillaume Sartoretti](https://cde.nus.edu.sg/me/staff/sartoretti-guillaume-a/), Assistant Professor, MARMoT Lab, NUS
        [🔗 Project Website](https://yizhuo-wang.com/cogniplan/)
        
        * Architected CogniPlan, integrating Wasserstein GAN-based conditional inpainting model and graph attention network for uncertainty-aware navigation
        * Achieved up to 17.7% shorter exploration paths and 3.9% improved navigation efficiency over state-of-the-art baselines across 100+ unseen maps, using a lightweight model with fewer than 0.35M parameters enabling real-time CPU inference

  - title: Monocular Vision-Based UAV Navigation for Orchard Monitoring
    company: CSIR-CEERI
    company_url: 'https://ceeri.res.in'
    supervisor: Dr. Kaushal Kishore
    supervisor_url: 'https://ieeexplore.ieee.org/author/37085653936'
    company_logo: org-ceeri
    location: Rajasthan, India
    date_start: '2024-01-01'
    date_end: '2025-02-28'
    description: |2-
    
        Supervisor: [Dr. Kaushal Kishore](https://ieeexplore.ieee.org/author/37085653936), Senior Scientist, CSIR-CEERI
        [🔗 GitHub Repository](https://github.com/Ritabrata-Chakraborty/Monocular-Vision-Based-UAV-Navigation-for-Orchard-Monitoring.git)
        
        * Engineered a UAV-based orchard monitoring system using YOLOv11 (Box mAP50: 95.5%, Mask mAP50: 96.5%)
        * Programmed B-spline trajectory logic and implemented custom yaw-roll controller to minimize drift under wind

  - title: Image-Based Visual Servoing for Automated Radar Control and UAV Tracking
    company: Bhabha Atomic Research Centre (BARC)
    company_url: 'https://barc.gov.in'
    supervisor: Dr. Rishi Verma
    supervisor_url: 'https://www.researchgate.net/profile/Rishi-Verma-3'
    company_logo: org-barc
    location: Visakhapatnam, India
    date_start: '2024-06-01'
    date_end: '2024-07-31'
    description: |2-
    
        Supervisor: [Dr. Rishi Verma](https://www.researchgate.net/profile/Rishi-Verma-3), PPEMD Head, Bhabha Atomic Research Centre (BARC)
        
        * Orchestrated radar alignment using YOLOv8 + [DeepSORT](https://arxiv.org/abs/1703.07402), boosting tracking recall to 91% and speed by 13%
        * Implemented PLC-based actuation system for continuous UAV lock-in

  - title: Synthetic Sensor Data Generation and Fault Classification for Bearing Systems
    company: KU Leuven
    company_url: 'https://kuleuven.be'
    supervisor: Dr. Pradeep Kundu
    supervisor_url: 'https://www.kuleuven.be/wieiswie/en/person/00155770'
    company_logo: org-kul
    location: Belgium (Remote)
    date_start: '2024-09-01'
    date_end: '2025-10-31'
    description: |2-
    
        Supervisor: [Dr. Pradeep Kundu](https://www.kuleuven.be/wieiswie/en/person/00155770), Assistant Professor, KU Leuven
        
        **Auxiliary Classifier WGAN-GP for Time-Series Sensor Data Generation**
        [🔗 GitHub Repository](https://github.com/Ritabrata-Chakraborty/An-Efficient-Approach-for-Synthetic-Data-Generation-and-Fault-Diagnosis-for-Rotating-Machinery)
        * Built ACWGAN-GP with TCN discriminator to augment minority fault classes, reaching ~100% classification accuracy
        * Evaluated synthetic data by comparing real and generated FFT spectra using PCC, Cosine Similarity, MMD, and KL Div
        
        **Conditional Latent Diffusion-GAN for CWT Generation and LiteFormer-based Classification**
        * Developed Conditional [Latent Denoising Diffusion GAN (LDDGAN)](https://ieeexplore.ieee.org/document/10540088) with [Supervised Contrastive Loss (SCL)](https://arxiv.org/abs/2004.11362) for latent class separation (99.9% AE accuracy, 16× compression with [EvoNorm-S0](https://arxiv.org/abs/2004.02967))
        * Designed [LiteFormer](https://ieeexplore.ieee.org/document/10294257) variants integrating [Continuous Wavelet Convolution (CWC)](https://arxiv.org/pdf/1911.07925), Haar DWT, [WDCNN-BiLSTM-Siamese Network](https://www.researchgate.net/publication/394458522_Rolling_bearing_fault_diagnosis_under_small_sample_conditions_based_on_WDCNN-BiLSTM_Siamese_network), and [CWMS-GAN](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0319202)-inspired architectures, achieving up to 99.18% fault classification accuracy

design:
  columns: '2'
---
