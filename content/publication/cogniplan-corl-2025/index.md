---
title: "CogniPlan: Uncertainty-Guided Path Planning with Conditional Generative Layout Prediction"
authors:
- Yizhuo Wang
- Haodong He  
- Yuhong Cao
- Jingsong Liang
- admin
- Guillaume Adrien Sartoretti
date: "2025-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-01-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["1"]

# Publication name and optional abbreviated publication name.
publication: Conference on Robot Learning (CoRL)
publication_short: CoRL 2025

abstract: "Path planning in unknown environments is a crucial yet inherently challenging capability for mobile robots, which primarily encompasses two coupled tasks: autonomous exploration and point-goal navigation. In both cases, the robot must perceive the environment, update its belief, and accurately estimate potential information gain on-the-fly to guide planning. In this work, we propose CogniPlan, a novel path planning framework that leverages multiple plausible layouts predicted by a conditional generative inpainting model, mirroring how humans rely on cognitive maps during navigation. These predictions, based on the partially observed map and a set of layout conditioning vectors, enable our planner to reason effectively under uncertainty. We demonstrate strong synergy between generative image-based layout prediction and graph-attention-based path planning, allowing CogniPlan to combine the scalability of graph representations with the fidelity and predictiveness of occupancy maps, yielding notable performance gains in both exploration and navigation. We extensively evaluate CogniPlan on two datasets (hundreds of maps and realistic floor plans), consistently outperforming state-of-the-art planners. We further deploy it in a high-fidelity simulator and on hardware, showcasing its high-quality path planning and real-world applicability."

# Summary. An optional shortened abstract.
summary: "CogniPlan leverages conditional generative inpainting models to predict multiple plausible layouts, mirroring human cognitive maps for uncertainty-guided path planning in unknown environments."

tags:
- Path Planning
- Robotics
- Uncertainty
- Conditional Generative Models
- Graph Attention Networks
- Cognitive Maps
- Mobile Robots
- Navigation
- Exploration

featured: true

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
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'CogniPlan Architecture'
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
