---
title: 3D Lunar Surface Modeling Using Chandrayaan-2 TMC DEM Data
summary: Advanced planetary simulation system leveraging Unreal Engine 5 and Chandrayaan-2 Terrain Mapping Camera data for high-fidelity lunar surface modeling and rover mission planning applications.
tags:
  - robotics
  - sim
date: "2025-08-01T00:00:00Z"

authors:
- admin
# Optional external URL for project (replaces project detail page).
external_link: ''

image:
  caption: 3D Lunar Surface Simulation Environment
  focal_point: Smart
  preview_only: false

links:
  - name: "Presentation"
    url: "https://drive.google.com/file/d/1QHn3U-iJFZyzYMW3TUlMg7MbXFU9p19_/view"
    icon_pack: fas
    icon: presentation
---

**Research Focus: Planetary Surface Simulation & Rover Mission Planning**  
**Duration: Current Development**

This project develops an advanced 3D lunar surface modeling system using Chandrayaan-2 Terrain Mapping Camera (TMC) Digital Elevation Model (DEM) data, creating highly realistic planetary simulation environments optimized for autonomous rover navigation and mission planning.

## Project Overview

The research addresses limitations in current ROS-based simulators for large-scale planetary surface modeling by leveraging Unreal Engine 5's advanced rendering capabilities and Nanite technology to create photorealistic lunar terrain simulations from authentic satellite data.

## Technical Innovation

### Current ROS Simulator Limitations
• **Terrain Import Constraints**: Existing open-source simulators (AirSim, CARLA) support basic terrain import but lack optimization for large-scale planetary datasets
• **Engine Limitations**: Most ROS simulators utilize UE4 (4.26/4.27) without access to Nanite technology for efficient large-world rendering
• **Scalability Issues**: Traditional approaches struggle with the massive scale and detail requirements of planetary surface modeling

### Why Unreal Engine 5 Over Gazebo
• **Photorealistic Environments**: Highly realistic visual fidelity essential for computer vision algorithm development and testing
• **Nanite Technology**: Revolutionary virtualized geometry system enabling efficient large-world rendering and seamless terrain loading
• **Advanced Materials**: Sophisticated material systems for accurate surface property simulation

## Current Development Status

### Implemented Features
• **Local Terrain Data Import**: Successfully developed plugin capability for importing Chandrayaan-2 TMC DEM data into Unreal Engine 5 environment
• **High-Fidelity Surface Reconstruction**: Implemented algorithms for converting satellite elevation data into detailed 3D terrain meshes
• **Optimized Rendering Pipeline**: Leveraged Nanite technology for efficient rendering of large-scale planetary surfaces

## Future Development Roadmap

### Phase 1: ROS Integration
🔹 **ROS Bridge Development**: Implement comprehensive ROS integration for seamless rover mission planning and simulation
🔹 **Communication Protocols**: Establish robust data exchange between UE5 simulation environment and ROS navigation stack

### Phase 2: Advanced Data Integration
🔹 **Direct Satellite Data Import**: Develop automated pipeline for importing real-time satellite data for dynamic planetary simulation updates
🔹 **Multi-Source Data Fusion**: Integrate multiple satellite datasets for enhanced surface accuracy and detail

### Phase 3: Autonomous Navigation Systems
🔹 **SLAM Integration**: Implement Simultaneous Localization and Mapping capabilities for autonomous rover navigation in simulated environments
🔹 **Path Planning Algorithms**: Develop sophisticated navigation algorithms optimized for planetary terrain challenges

### Phase 4: Robotic Task Integration
🔹 **MoveIt Integration**: Seamless integration with MoveIt motion planning framework for robotic arm manipulation tasks
🔹 **Mission Simulation**: Complete rover mission simulation capabilities including sample collection and scientific operations

## Technical Stack

**Simulation Engine**: Unreal Engine 5 with Nanite technology  
**Data Source**: Chandrayaan-2 TMC DEM datasets  
**Future Integration**: ROS, SLAM algorithms, MoveIt framework  
**Development**: C++, Blueprint Visual Scripting  
**Optimization**: Large-world rendering, streaming LOD systems

## Research Impact

This project represents a significant advancement in planetary simulation technology, providing researchers and mission planners with unprecedented fidelity in lunar surface modeling while maintaining computational efficiency through cutting-edge rendering technologies. The system enables comprehensive testing of rover navigation algorithms in realistic lunar conditions before actual deployment.
