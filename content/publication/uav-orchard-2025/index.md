---
title: "Path Planning of Low-Altitude UAV for Tree Canopy Tracking and Orchard Monitoring"
authors:
- K. Kishore
- admin
date: "2025-03-01T00:00:00Z"
doi: ""

# Schedule page publish date (NOT publication's date).
publishDate: "2025-03-01T00:00:00Z"

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ["3"]

# Publication name and optional abbreviated publication name.
publication: Manuscript in preparation
publication_short: In Preparation

abstract: "This paper presents a monocular vision-based approach for treeline following, designed to maintain stability under mild wind disturbances. In structured orchards, where trees are arranged in parallel rows, precise automated navigation is essential. Unlike traditional grid-based or path-trail methods, this work utilises instance segmentation to identify and track individual treelines, ensuring accurate differentiation. A curve-fitting algorithm generates a navigation line, with its offset and slope relative to the image centre guiding yaw and roll corrections, while pitch remains constant. The proposed method improves UAV stability and precision in orchard environments, advancing agricultural automation."

# Summary. An optional shortened abstract.
summary: "Monocular vision-based UAV treeline following system using instance segmentation and curve-fitting algorithms for precise orchard navigation under wind disturbances."

tags:
- UAV Navigation
- Monocular Vision
- Treeline Following
- Instance Segmentation
- Curve Fitting
- Wind Disturbance
- Orchard Automation
- Agricultural UAV
- Computer Vision
- Precision Agriculture

featured: false

# links:
# - name: ""
#   url: ""
url_pdf: ''
url_code: ''
url_dataset: ''
url_poster: ''
url_project: ''
url_slides: ''
url_source: ''
url_video: ''

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder. 
image:
  caption: 'UAV Orchard Monitoring System'
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

This research addresses the challenge of autonomous UAV navigation in structured orchard environments through a novel monocular vision-based treeline following approach. The system is specifically designed to maintain flight stability and precision under mild wind disturbances, which is crucial for reliable agricultural operations.

The key innovation lies in the use of instance segmentation techniques to identify and differentiate individual treelines within the orchard structure. Unlike conventional grid-based or path-trail navigation methods, this approach provides more accurate tree detection and tracking capabilities. The system employs a sophisticated curve-fitting algorithm that processes the segmented treeline data to generate optimal navigation trajectories.

The control strategy utilizes the offset and slope of the fitted navigation line relative to the image center to compute real-time yaw and roll corrections, while maintaining constant pitch for stable flight dynamics. This methodology significantly enhances UAV stability and navigation precision in complex orchard environments, contributing to the advancement of agricultural automation and precision farming technologies.
