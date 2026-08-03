export const portfolioData = {
  personalInfo: {
    name: "Ritabrata Chakraborty",
    email: "ritabratabits@gmail.com",
    phone: "+91 89107 83548",
    github: "https://github.com/Ritabrata-Chakraborty",
    googleScholar: "https://scholar.google.com/citations?user=JikCewwAAAAJ&hl=en",
    portfolio: "https://ritabrata-chakraborty.github.io/Portfolio/",
    cv: "https://drive.google.com/file/d/1xoP2CaMMK-wV4_ZoMH2P9Vc9vkb0acPv/view?usp=drive_link",
    linkedin: "https://www.linkedin.com/in/ritabrata-chakraborty-a63268251/",
    researchGate: "https://www.researchgate.net/profile/Ritabrata-Chakraborty-3/research",
  },
  education: [
    {
      institution: "University of Pennsylvania (UPenn)",
      institutionLink: "https://www.upenn.edu/",
      location: "Philadelphia, USA",
      degree: "M.S.E in Robotics",
      gpa: "-/4.0",
      duration: "Aug '26 – May '28",
      achievements: [
        "Deputy Director of Academic Programming — Graduate and Professional Student Assembly (GAPSA)",
        "Vice President — South Asian Association (Rangoli)",
      ],
      image: "org-upenn.webp"
    },
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      institutionLink: "https://www.bits-pilani.ac.in/",
      location: "Rajasthan, India",
      degree: "B.E. in Mechanical Engineering — Minor in Data Science",
      gpa: "8.57/10",
      duration: "Oct '22 – May '26",
      achievements: [
        "Merit-cum-Need Scholarship — Institute (Consecutive Recipient, Top 8%)",
        "President & Secretary — Mechanical Engineering Association (MEA)",
        "President & Tech Fest Coordinator — ISHRAE BITS Pilani Chapter",
        "Project Manager — Tinkerer's Lab (TL)",
        "Treasurer — Bengali Cultural Association (Moruchhaya)",
        "Volunteer — Junoon, National Service Scheme (NSS)",
        "Teaching Assistant — Foundations of Data Science, Advanced Mechanics of Solids, Materials Science",
      ],
      image: "org-bitsp.webp"
    }
  ],
  publications: [
    {
      title: "GS-SDE: 3D Gaussian Splatting-based Adaptive Scene Modeling in Semi-Dynamic Environments.",
      authors: "Anonymous et al.",
      venue: "IEEE Transactions on Automation Science and Engineering (T-ASE)",
      shortVenue: "IEEE-TASE",
      status: "Peer Review Completed for IEEE T-ASE",
      year: "2026",
      type: "Journal",
      role: "Peer Reviewer",
      image: "proj-gs.webp",
      links: {}
    },
    {
      title: "Limits of Wearable Gait Analysis for Age Classification in Young Adults: Anthropometry Over Age.",
      authors: "Anonymous et al.",
      venue: "7th IEEE India Council International Subsections Conference (INDISCON 2026)",
      shortVenue: "IEEE INDISCON",
      status: "Peer Review Completed for IEEE INDISCON",
      year: "2026",
      type: "Conference",
      role: "Peer Reviewer",
      image: "proj-gait.webp",
      links: {}
    },
    {
      title: "Anonymous.",
      authors: "Anonymous et al.",
      venue: "IEEE Gujarat Section Conference 2026",
      shortVenue: "IEEE GSC",
      status: "Peer Review in Progress for IEEE Gujarat Section Conference",
      year: "2026",
      type: "Conference",
      role: "Peer Reviewer",
      image: "proj-gs.webp",
      links: {}
    },
    {
      title: "Navigating Without Satellites: A Critical Survey of GNSS-Denied UAV Navigation.",
      authors: "R. Chakraborty, and K. Kishore",
      venue: "IEEE Transactions on Artificial Intelligence (T-AI)",
      shortVenue: "IEEE T-AI",
      status: "Submitted to IEEE T-AI",
      year: "2026",
      type: "Journal",
      image: "proj-gnss-denied.webp",
      links: {
          paper: "https://drive.google.com/file/d/1y3PC6fdyNwgKXBCm4wfoiL4wZD5VuxfH/view?usp=drive_link"
      }
    },
    {
      title: "Multi-Critic Off-Policy Reinforcement Learning for Quadrotor Velocity Control in Unknown Indoor Environments.",
      authors: "R. Chakraborty, and K. Kishore",
      venue: "IEEE Transactions on Artificial Intelligence (T-AI)",
      shortVenue: "IEEE T-AI",
      status: "Manuscript in Preparation for IEEE T-AI",
      year: "2026",
      type: "Journal",
      image: "proj-rl.webp",
      links: {
        paper: "https://drive.google.com/file/d/1ZbXVK82uE7esc_MJddMygPwYf34Kf8oD/view?usp=drive_link",
        code: "https://github.com/Ritabrata-Chakraborty/Quadcopter-RL-Off-Policy-Velocity-Control"
      }
    },
    // {
    //   title: "Hockey3D: A Public Field Hockey Shot Trajectory Dataset with 3D Reconstruction and Shot Type Classification.",
    //   authors: "R. Chakraborty and M. Dasgupta",
    //   venue: "Conference on Computer Vision and Image Processing (CVIP)",
    //   shortVenue: "CVIP '26",
    //   status: "In Ppreparation for CVIP 2026",
    //   year: "2026",
    //   type: "Conference",
    //   image: "pub-hockey3d.webp",
    //   links: {
    //     paper: "https://drive.google.com/file/d/1XSeU50fM_yJUn0u2wcNOM2itZovqAA2V/view?usp=drive_link"
    //   }
    // },
    // {
    //   title: "A Physics-Informed Comparative Study of Continuous and Discrete Latent Generative Augmentation for Bearing Fault Diagnosis Under Extreme Data Scarcity.",
    //   authors: "R. Chakraborty, and P. Kundu",
    //   venue: "IEEE Transactions on Industrial Informatics (T-II)",
    //   shortVenue: "IEEE T-II",
    //   status: "In Preparation for IEEE T-II",
    //   year: "2026",
    //   type: "Journal",
    //   image: "proj-clddgan.webp",
    //   links: {}
    // },
    {
      title: "CogniPlan: Uncertainty-Guided Path Planning with Conditional Generative Layout Prediction.",
      authors: "Y. Wang, H. He, Y. Cao, J. Liang, R. Chakraborty, and G. Sartoretti",
      venue: "Conference on Robot Learning (CoRL), South Korea",
      shortVenue: "CoRL",
      status: "Published in Proceedings of Machine Learning Research (PMLR)",
      year: "2025",
      type: "Conference",
      image: "proj-cogniplan.webp",
      links: {
        paper: "https://www.arxiv.org/abs/2508.03027",
        code: "https://github.com/marmotlab/CogniPlan",
        project: "https://yizhuo-wang.com/cogniplan/"
      }
    },
    {
      title: "An Efficient Approach for Synthetic Data Generation and Fault Diagnosis for Rotating Machinery.",
      authors: "R. Chakraborty, T. Mian, and P. Kundu",
      venue: "Prognostics and Health Management Conference (PHM), Belgium",
      shortVenue: "PHM",
      status: "Published in IET Conference Proceedings",
      year: "2025",
      type: "Conference",
      image: "proj-efficient-gan.webp",
      links: {
        paper: "https://digital-library.theiet.org/doi/10.1049/icp.2025.2364",
        code: "https://github.com/Ritabrata-Chakraborty/An-Efficient-Approach-for-Synthetic-Data-Generation-and-Fault-Diagnosis-for-Rotating-Machinery"
      }
    },
    {
      title: "Path Planning of Low-Altitude UAV for Tree Canopy Tracking and Orchard Monitoring.",
      authors: "K. Kishore, and R. Chakraborty",
      venue: "-",
      shortVenue: "Patent",
      status: "Publication awaiting Intellectual Property clearance",
      year: "2025",
      type: "Patent",
      image: "proj-uav-orchard.webp",
      links: {
        paper: "https://drive.google.com/file/d/1TZ-1WKuYXeAOZaP7R5TnSufCdyz3sn4a/view?usp=sharing"
      }
    }
  ],
  experience: [
    {
      institution: "Uber",
      institutionLink: "https://www.uber.com/",
      role: "ML Intern",
      duration: "Jul '25 – Dec '25",
      location: "Bangalore, India",
      supervisors: [
        { name: "Mr. Siddarth Malreddy, Tech Lead Manager", link: "https://in.linkedin.com/in/malreddysid" },
        { name: "Mr. Ishan Nigam, Senior ML Engineer", link: "https://www.linkedin.com/in/ishannigam/" },
      ],
      image: "org-uber.webp",
      projects: [
        { title: "Automated Video Annotation with Deep Learning" }
      ],
      techStack: "PyTorch, Python, C++"
    },
    {
      institution: "National University of Singapore (NUS)",
      institutionLink: "https://nus.edu.sg/",
      role: "Research Intern",
      duration: "Mar '25 – Dec '25",
      location: "Singapore (Remote)",
      supervisors: [
        { name: "Dr. Guillaume Sartoretti, Assistant Professor, MARMoT Lab", link: "https://www.marmotlab.org/" },
      ],
      image: "org-nus.webp",
      projects: [
        { title: "Vision-Attention-Driven Autonomous Navigation with Semantic Understanding" },
        { title: "Uncertainty-Guided Path Planning via Conditional Layout Prediction" }
      ],
      techStack: "ROS Noetic (with Gazebo, Rviz), PyTorch, Python"
    },
    {
      institution: "KU Leuven",
      institutionLink: "https://www.kuleuven.be/",
      role: "Research Intern",
      duration: "Sep '24 – May '26",
      location: "Belgium (Remote)",
      supervisors: [
        { name: "Dr. Pradeep Kundu, Assistant Professor", link: "https://www.kuleuven.be/wieiswie/en/person/00155770" },
      ],
      image: "org-kul.webp",
      projects: [
        { title: "Physics-Informed Latent Augmentation for Bearing Fault Diagnosis" },
        { title: "Auxiliary Classifier WGAN-GP for Time-Series Sensor Data Generation" }
      ],
      techStack: "PyTorch, Python"
    },
    {
      institution: "CSIR-Central Electronics Engineering Research Institute",
      institutionLink: "https://www.ceeri.res.in/",
      role: "Research Intern",
      duration: "Jan '24 – May '26",
      location: "Pilani, India",
      supervisors: [
        { name: "Dr. Kaushal Kishore, Principal Scientist", link: "https://www.ceeri.res.in/profiles/kaushal-kishore/" },
      ],
      image: "org-ceeri.webp",
      projects: [
        { title: "Multi-Critic Off-Policy RL for Autonomous Indoor Drone Navigation" },
        { title: "Monocular Vision-Based UAV Navigation for Orchard Monitoring" }
      ],
      techStack: "PyTorch, Python, ROS Noetic, AirSim, NVIDIA Jetson Orin NX"
    },
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      institutionLink: "https://www.bits-pilani.ac.in/",
      role: "Research Assistant",
      duration: "Apr '24 – Oct '25",
      location: "Rajasthan, India",
      supervisors: [
        { name: "Dr. Mani Shankar Dasgupta, Senior Professor", link: "https://www.bits-pilani.ac.in/pilani/m-s-dasgupta/" },
      ],
      image: "org-bitsp.webp",
      projects: [
        { title: "Physics-Based Launcher Mechanical Design and FEM Analysis" },
        { title: "Computer Vision Pipeline for 3D Trajectory Reconstruction and Shot Classification" },
        { title: "Finite Element Analysis of Running Track Surfaces" }
      ],
      techStack: "Fusion 360, ANSYS Mechanical, PyTorch, Python, OpenCV"
    },
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      institutionLink: "https://www.bits-pilani.ac.in/",
      role: "Research Assistant",
      duration: "May '25 – Aug '25",
      location: "Rajasthan, India",
      supervisors: [
        { name: "Dr. Avinash Gautam, Associate Professor", link: "https://www.bits-pilani.ac.in/pilani/avinash-gautam/" },
      ],
      image: "org-bitsp.webp",
      projects: [
        { title: "Vision-Language Grounded Multi-Robot Coordination and Navigation" }
      ]
    },
    {
      institution: "Birla Institute of Technology and Science, Pilani (BITS Pilani)",
      institutionLink: "https://www.bits-pilani.ac.in/",
      role: "Research Assistant",
      duration: "Aug '24 – Dec '24",
      location: "Rajasthan, India",
      supervisors: [
        { name: "Dr. Rajneesh Choubisa, Associate Professor", link: "https://www.bits-pilani.ac.in/pilani/rajneesh-choubisa/" },
      ],
      image: "org-bitsp.webp",
      projects: [
        { title: "Primal World Beliefs in Engineering Students" }
      ]
    },
    // {
    //   institution: "Bhabha Atomic Research Centre (BARC)",
    //   institutionLink: "https://www.barc.gov.in/",
    //   role: "Research Intern",
    //   duration: "Jun '24 – Jul '24",
    //   location: "Maharashtra, India",
    //   supervisors: [
    //     { name: "Dr. Rishi Verma, Head (ESDS), PPEMD", link: "https://www.researchgate.net/profile/Rishi-Verma-3" },
    //   ],
    //   image: "org-barc.jpg",
    //   projects: [
    //     { title: "Image-Based Visual Servoing for Automated Radar Control and UAV Tracking" },
    //     { title: "Impact Testing and Analysis of Metal-Composite Shields Using Electromagnetic Railguns" }
    //   ]
    // },
    {
      institution: "Knowledge Cultivator",
      role: "Subject Matter Expert",
      duration: "Nov '23 – Feb '24",
      location: "Remote",
      supervisors: [
        { name: "Self-supervised" },
      ],
      projects: [
        { title: "Technical Problem-Solving and Academic Content Authoring" }
      ],
      techStack: "MATLAB, Python, CAD"
    }
  ],
  skills: [
    {
      category: "Relevant Courses",
      icon: "BookOpen",
      items: ["Machine Learning", "Deep Learning", "Foundations of Data Science", "Applied Statistical Methods", "Linear Algebra", "Computer Programming", "Engineering Optimization", "Differential Equations", "Design of Machine Elements", "Digital Twins"]
    },
    {
      category: "Programming Languages",
      icon: "Code2",
      items: ["Python", "C++", "C", "C#", "Java", "Bash (Shell)"]
    },
    {
      category: "Robotics & Simulation",
      icon: "Cpu",
      items: ["ROS (with Gazebo, Rviz)", "MAVROS", "Navigation Stack", "MoveIt", "AirSim", "Unity", "Unreal Engine", "MATLAB", "Simulink", "QGIS"]
    },
    {
      category: "AI & Data Science",
      icon: "BrainCircuit",
      items: ["PyTorch", "TensorFlow", "Keras", "Scikit-Learn", "XGBoost", "LightGBM", "OpenCV", "Open3D", "NumPy", "Pandas", "SciPy", "StatsModels", "Matplotlib", "Seaborn", "Weights & Biases (W&B)", "Excel"]
    },
    {
      category: "Cloud & MLOps",
      icon: "Cloud",
      items: ["AWS (S3, EC2, SageMaker)", "Azure (Foundry)", "Google Cloud Platform (GCP)", "Docker", "Git", "GitHub Actions"]
    },
    {
      category: "Hardware & Embedded Systems",
      icon: "Microchip",
      items: ["NVIDIA Jetson (Nano, Orin)", "Raspberry Pi", "Arduino", "IMUs", "Stereo Camera", "3D LiDAR"]
    },
    {
      category: "CAD & Mechanical Simulation",
      icon: "Wrench",
      items: ["ANSYS Mechanical", "SolidWorks", "Fusion 360"]
    },
    {
      category: "Leadership & Communication",
      icon: "Users",
      items: ["Event Planning", "Team Management", "Budget Allocation", "Mentorship", "Cross-Functional Coordination", "Public Speaking", "Stakeholder Outreach", "Technical Writing"]
    },
    {
      category: "Productivity Software",
      icon: "LayoutGrid",
      items: ["Microsoft Office (Excel, PowerPoint, Word)", "Google Workspace"]
    }
  ],
  achievements: [
    {
      title: "Finalist — Meta PyTorch OpenEnv Hackathon",
      organizer: "Meta X Scaler School of Technology",
      year: "2026",
      links: {
        code: "https://github.com/Ritabrata-Chakraborty/OpenEnv-Quadcopter-Controller",
      }
    },
    {
      title: "3rd Place — MathWorks Global Drone Student Challenge",
      organizer: "MathWorks",
      year: "2025",
      links: {
        certificate: "https://drive.google.com/file/d/1D0-xmEtlKox0QLbPWZO_Cq4jK4ENG7y7/view?usp=drive_link",
      }
    },
    {
      title: "Finalist — AI for Space and Geospatial Innovation (ISRO Immersion Startup-Challenge)",
      organizer: "CIE-IIITH",
      year: "2024",
      links: {
        presentation: "https://drive.google.com/file/d/16G0VYC5aEpGW_xqj6y0GRwX1Hb5cWeJk/view?usp=drive_link",
      }
    },
    {
      title: "Top 15 (Top 5 in College) — American Express Campus Challenge (Product Track)",
      organizer: "American Express",
      year: "2024",
      links: {
        presentation: "https://drive.google.com/file/d/1oC9seJ8GRzicnij6xViUjAum3Zq5Vjlr/view?usp=drive_link"
      }
    },
    {
      title: "5th Place + Best Remote Maintenance Award — European Rover Challenge (ERC), Remote Edition",
      organizer: "European Space Foundation",
      year: "2023",
      links: {
        report: "https://drive.google.com/file/d/1qAeYAupdwq-eb-d-lgASr4xD_Kj0AXmk/view?usp=drive_link"
      }
    }
  ],
  projects: [
    {
      title: "Multi-Critic Off-Policy RL for Autonomous Indoor Drone Navigation",
      image: "proj-rl.webp",
      links: { paper: "https://drive.google.com/file/d/1Uimegpx43p9dfY7lvgPU_LR3ERb3-YJP/view", code: "https://github.com/Ritabrata-Chakraborty/Quadcopter-RL-Off-Policy-Velocity-Control" },
      tags: ["Robotics"]
    },
    {
      title: "3D Lunar Surface Modeling Using Chandrayaan-2 TMC DEM Data",
      image: "proj-lunar.webp",
      links: { presentation: "https://drive.google.com/file/d/1QHn3U-iJFZyzYMW3TUlMg7MbXFU9p19_/view" },
      tags: ["Simulation"]
    },
    {
      title: "Large-Scale DRL Exploration with Tunable Adaptive Exploration-Exploitation",
      image: "proj-drl-explore.webp",
      links: { paper: "https://arxiv.org/abs/2403.10833", code: "https://github.com/Ritabrata-Chakraborty/Large-Scale-DRL-Exploration-with-Tunable-Adaptive-Exploration-Exploitation" },
      tags: ["Robotics"]
    },
    {
      title: "Conditional Latent Diffusion-GAN for Synthetic CWT Generation and LiteFormer-based Fault Classification in Rotating Machinery",
      image: "proj-clddgan.webp",
      links: {},
      tags: ["Gen-AI"]
    },
    {
      title: "An Efficient Approach for Synthetic Data Generation and Fault Diagnosis for Rotating Machinery",
      image: "proj-efficient-gan.webp",
      links: { paper: "https://digital-library.theiet.org/doi/10.1049/icp.2025.2364", code: "https://github.com/Ritabrata-Chakraborty/An-Efficient-Approach-for-Synthetic-Data-Generation-and-Fault-Diagnosis-for-Rotating-Machinery" },
      tags: ["Gen-AI"]
    },
    {
      title: "CogniPlan: Uncertainty-Guided Path Planning with Conditional Generative Layout Prediction",
      image: "proj-cogniplan.webp",
      links: { paper: "https://www.arxiv.org/abs/2508.03027", project: "https://yizhuo-wang.com/cogniplan/", code: "https://github.com/marmotlab/CogniPlan" },
      tags: ["Robotics"]
    },
    {
      title: "MathWorks Global Student Drone Challenge 2025",
      image: "proj-drone-challenge.webp",
      links: {},
      tags: ["Robotics", "Vision"]
    },
    {
      title: "Path Planning of Low-Altitude UAV for Tree Canopy Tracking and Orchard Monitoring",
      image: "proj-uav-orchard.webp",
      links: { paper: "https://drive.google.com/file/d/1TZ-1WKuYXeAOZaP7R5TnSufCdyz3sn4a/view?usp=drive_link", code: "https://github.com/Ritabrata-Chakraborty/Monocular-Vision-Based-UAV-Navigation-for-Orchard-Monitoring" },
      tags: ["Robotics", "Vision"]
    },
    {
      title: "Computer Vision Pipeline for 3D Trajectory Reconstruction and Shot Classification",
      image: "proj-hockey3d.webp",
      links: { report: "https://drive.google.com/file/d/1h7X9fIiih37ivgERVR-wbWsDEil0qvpI/view?usp=drive_link", code: "https://github.com/Ritabrata-Chakraborty/3D-Localization-of-a-Sports-Ball-from-a-Single-Monocular-Camera"},
      tags: ["Vision", "Simulation"]
    },
    {
      title: "Physics-Based Launcher Mechanical Design and FEM Analysis",
      image: "proj-hockey-launcher.webp",
      links: { report: "https://drive.google.com/file/d/1IuOxvcOJYzLelGn2VaZ4dIr59AIDP1BI/view?usp=drive_link"},
      tags: ["CAD/FEM"]
    },
    {
      title: "European Rover Challenge (ERC) Remote 2023",
      image: "proj-exomy.webp",
      links: { report: "https://drive.google.com/file/d/1qAeYAupdwq-eb-d-lgASr4xD_Kj0AXmk/view?usp=drive_link" },
      tags: ["Robotics", "Vision", "Simulation"]
    },
    {
      title: "Vision-Guided Robotic Arm for Simulated Oral Cancer Screening",
      links: {},
      tags: ["Robotics", "Vision", "Simulation"]
    },
    {
      title: "Vision-Language Grounded Multi-Robot Coordination and Navigation",
      links: {},
      tags: ["Robotics", "Vision"]
    },
    {
      title: "Vision-Attention-Driven Autonomous Navigation with Semantic Understanding",
      links: {},
      tags: ["Robotics", "Vision"]
    },
    {
      title: "Automated Video Annotation with Deep Learning",
      links: {},
      tags: ["Vision"]
    },
    {
      title: "Finite Element Analysis of Running Track Surfaces",
      links: {},
      tags: ["CAD/FEM", "Simulation"]
    },
    {
      title: "Primal World Beliefs in Engineering Students",
      links: { report: "https://drive.google.com/file/d/1Lik6wGn2XzuU0ZIgEgo5Yz3FChDTb2qQ/view?usp=drive_link" },
      tags: []
    },
    // {
    //   title: "Image-Based Visual Servoing for Automated Radar Control and UAV Tracking",
    //   links: {},
    //   tags: ["Robotics", "Vision"]
    // },
    // {
    //   title: "Impact Testing and Analysis of Metal-Composite Shields Using Electromagnetic Railguns",
    //   links: {},
    //   tags: ["CAD/FEM", "Simulation"]
    // },
    {
      title: "Air Quality Index Forecasting Using Time Series Models",
      links: { report: "https://drive.google.com/file/d/19VMK7SCWqU9Bv2O01lgY_h-JgHfI49gh/view?usp=drive_link" },
      tags: []
    },
    {
      title: "Cricket Team Optimization — American Express Campus Challenge 2024",
      links: { presentation: "https://drive.google.com/file/d/1oC9seJ8GRzicnij6xViUjAum3Zq5Vjlr/view?usp=drive_link" },
      tags: []
    }
  ]
};
