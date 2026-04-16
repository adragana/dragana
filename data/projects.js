const portfolioProjects = [
  {
    "slug": "igrannonica",
    "title": "IgrANNonica",
    "summary": "A distributed client-server platform for intuitive neural network design, enabling parallel model training and real-time experiment tracking.",
    "role": "Full-stack development",
    "year": "2026",
    "stack": ["Angular", ".NET Core", "Python/Flask", "MySQL", "EF Core"],
    "detailPage": "projects/igrannonica.html",
    "heroImage": "../assets/m3.png",
    "cardImage": "assets/igrannonica4.png",
    "gallery": ["../assets/igrannonica3.png", "../assets/m1.png", "../assets/m2.png"],
    "problem":
      "Creating and training neural networks often requires complex coding environments, making it difficult for users to track data versions, manage parallel experiments, and visualize real-time training progress.",
    "solution":
      "I built a three-tier architecture (Client, Server, and ML Engine). The system uses WebSockets for real-time communication between the .NET backend and Python ML server, allowing users to visually configure architectures, manage dataset versioning, and run multiple training sessions concurrently.",
    "outcomes": [
      "Implemented a real-time monitoring system for neural network training using Socket protocols.",
      "Developed a data management module for statistics extraction, visualization, and version control of datasets.",
      "Enabled parallel model execution and comparative analysis of results through an intuitive dashboard."
    ]
  },
  {
    "slug": "travel-agency",
    "title": "Travel Agency Management System",
    "summary": "A high-integrity management system built with a focus on design patterns, featuring dual-database support and real-time UI synchronization.",
    "role": "Full-stack development",
    "year": "2026",
    "stack": [".NET", "WinForms", "C#", "MySQL", "AES-256 Encryption"],
    "detailPage": "projects/travel-agency.html",
    "heroImage": "../assets/travel1.png",
    "cardImage": "assets/travel1.png",
    "gallery": ["../assets/travel2.png", "../assets/travel3.png"],
    "problem":
      "Agencies needed a reliable way to manage diverse travel packages (Cruise, Mountain, Seaside) while maintaining data integrity and the ability to undo mistakes during complex booking processes.",
    "solution":
      "Implemented an architecture using 7 design patterns: Command for undo/redo functionality, Builder for complex package creation, and a Factory/Adapter combo for seamless switching between SQLite and MySQL. Security is handled via an AES-256 encryption layer for sensitive client data.",
    "outcomes": [
      "Enabled full operational rollback through a Command history system (Undo/Redo).",
      "Achieved complete database provider independence, allowing the app to run on-premise (SQLite) or in the cloud (MySQL) without code changes.",
      "Ensured GDPR compliance by implementing transparent AES-256 encryption for passport and contact information."
    ]
  },
  {
    "slug": "linux-pam",
    "title": "Custom Linux PAM Module",
    "summary": "A low-level security module integrated into the Linux PAM framework to extend and customize the OS authentication flow.",
    "role": "Systems Programming",
    "year": "2026",
    "stack": ["C", "Linux", "PAM Library", "Bash"],
    "detailPage": "projects/linux-pam.html",
    "heroImage": "../assets/linux.png",
    "cardImage": "assets/linux2.png",
    "gallery": ["../assets/pam1.png"],
    "problem":
      "Standard Linux authentication methods are sometimes insufficient for specialized security requirements, necessitating a way to inject custom logic into the system's login process without modifying the core OS source code.",
    "solution":
      "Developed a dynamically linkable library in C that adheres to the PAM API. The module handles authentication primitives and was integrated into the system's configuration (/etc/pam.d/), enabling it to intercept and validate login attempts in a live Linux environment.",
    "outcomes": [
      "Successfully extended the Linux authentication stack with a custom-built shared object library.",
      "Gained deep experience in system-level memory management and secure coding practices in C.",
      "Validated the module's stability by testing it against various system services like SSH and local login."
    ]
  },
  {
    slug: "flight-reservation",
    title: "Flight Reservation System",
    summary: "A web application for browsing flights, managing reservations, and handling user authentication with secure backend services.",
    role: "Backend development (with API integration)",
    year: "2026",
    stack: ["Python", "Flask", "PostgreSQL", "React", "REST API", "Auth0"],
    detailPage: "projects/flight-reservation.html",
    heroImage: "../assets/plane2.png",
    cardImage: "assets/plane1.png",
    gallery: [
      "../assets/plane2.png",
      "../assets/plane3.png"
    ],
    problem:
      "Flight booking systems require reliable backend services to handle reservations, user management, and secure access while maintaining data consistency.",
    solution:
      "Developed backend services using Flask, designed relational database models in PostgreSQL, and exposed RESTful APIs that were integrated with a React frontend. I also implemented authentication and authorization using Auth0 to ensure secure access control.",
    outcomes: [
      "Built scalable and maintainable backend architecture for reservation management.",
      "Enabled secure user authentication and role-based access control.",
      "Improved collaboration and code quality through code reviews and structured Git workflows."
    ]
  }
];
