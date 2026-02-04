---
title: "Importance Sampling for Deep Deterministic Policy Gradient"
authors:
- admin
date: "2026-01-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2026-02-04T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: "Under Review at IEEE Transactions on Artificial Intelligence (TAI)"
publication_short: "Under Review"

abstract: "This paper presents a novel Deep Deterministic Policy Gradient (DDPG)-based framework for autonomous in-door drone navigation in confined, unmapped environments. The proposed method employs a multi-layered DDPG control architecture coupled with a hybrid reward formulation that explicitly decomposes navigation into three complementary objectives: (i) obstacle avoidance via artificial repulsive potential fields, (ii) corridor centering through attraction-based alignment rewards, and (iii) adaptive pitch control to enable velocity modulation for efficient exploration. By jointly optimizing multiple control objectives, the drone achieves a higher degree of autonomy and robustness in complex indoor settings. We provide a detailed mathematical formulation of the control policy and reward structure, and validate the approach through extensive simulation experiments. The results demonstrate improved safety, stability, and exploration efficiency compared to baseline navigation strategies in cluttered indoor environments."

# Summary. An optional shortened abstract.
# summary: "A novel approach combining importance sampling with DDPG for improved deep reinforcement learning performance and sample efficiency."

tags:
- Drone Navigation
- Reinforcement Learning
- DDPG
- Hybrid Reward Structure
- Indoor Exploration

featured: true

links:
- name: "Paper"
  url: "#"
  icon_pack: fas
  icon: file-pdf
- name: "Code"
  url: "#"
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
  caption: 'IS-DDPG Architecture'
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

## Abstract

Deep Deterministic Policy Gradient (DDPG) is a widely used algorithm for continuous control tasks in reinforcement learning. However, like many off-policy algorithms, DDPG can suffer from inefficient sample utilization and slow convergence. This paper introduces Importance Sampling for DDPG (IS-DDPG), a novel approach that combines importance sampling techniques with the DDPG algorithm to improve sample efficiency and learning performance.

## Key Contributions

- Novel integration of importance sampling with DDPG
- Improved sample efficiency in continuous control tasks
- Theoretical analysis of convergence properties
- Extensive experimental validation on benchmark tasks

## Results

IS-DDPG demonstrates significant improvements over baseline DDPG across multiple continuous control benchmarks, achieving faster convergence and higher final performance.
