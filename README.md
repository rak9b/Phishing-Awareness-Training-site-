
# **Security Training Platform**

> A modern and interactive platform for mastering cybersecurity skills, featuring Certified Ethical Hacker (CEH) and Offensive Security Certified Professional (OSCP) training tracks.

---

## **Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## **Overview**

The **Security Training Platform** is designed to provide a seamless learning experience for aspiring and professional cybersecurity experts. It includes interactive modules, progress tracking, and visually appealing UI components to ensure effective knowledge delivery.

### **Key Highlights**
- Hands-on training for CEH and OSCP certifications.
- Real-world scenarios for ethical hacking and penetration testing.
- Fully responsive design with a modern, gradient-based UI.

---

## **Features**

- **Track Selection**: Switch between CEH and OSCP training tracks.
- **Progress Tracking**: Visual progress bar to monitor learning milestones.
- **Dynamic Content**: Interactive cards for each module with detailed topics.
- **Accessibility**: Keyboard and screen reader-friendly design.
- **Downloadable Resources**: PDF handbooks and additional materials.
- **Video Tutorials**: Embedded video lessons for comprehensive understanding.

---

## **Installation**

Follow these steps to get the platform running locally:

### **Prerequisites**
Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or higher)
- [npm](https://www.npmjs.com/) (v7 or higher)

### **Clone the Repository**
```bash
git clone https://github.com/yourusername/security-training-platform.git
cd security-training-platform
```

### **Install Dependencies**
```bash
npm install
```

### **Run the Development Server**
```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

### **Build for Production**
```bash
npm run build
npm start
```

---

## **Usage**

1. **Select a Track**: Choose between CEH and OSCP tracks.
2. **Explore Modules**: Click on a module card to view detailed topics.
3. **Track Progress**: Monitor your completion status with the progress bar.
4. **Download Resources**: Access additional materials via the "Download Handbook" button.

---

## **Folder Structure**

Here's an overview of the project structure:

```
security-training-platform/
├── public/
│   └── assets/
│       ├── icons/                # SVG icons for modules
│       ├── images/               # Banners and general-purpose images
│       ├── videos/               # Training-related videos
│       └── docs/                 # Downloadable resources (e.g., handbooks)
├── src/
│   ├── components/
│   │   ├── training/             # Components for tracks and modules
│   │   └── ui/                   # Reusable UI components (Button, Card, etc.)
│   ├── lib/                      # Utility functions and data (e.g., trackData.js)
│   ├── pages/                    # Next.js pages
│   ├── styles/                   # Global and animation CSS
├── package.json                  # Dependencies and scripts
└── README.md                     # Project documentation
```

---

## **Tech Stack**

### **Frontend**
- **Next.js**: React framework for server-side rendering and routing.
- **React**: Component-based UI library.
- **Tailwind CSS**: Utility-first CSS framework for responsive design.

### **Utilities**
- **lucide-react**: Icon library for clean and scalable visuals.
- **clsx**: Conditional class management.
- **ESLint & Prettier**: For linting and consistent code formatting.

---

## **Screenshots**

### **Track Selector**
![Track Selector](https://via.placeholder.com/800x400?text=Track+Selector)

### **Module Cards**
![Module Cards](https://via.placeholder.com/800x400?text=Module+Cards)

### **Progress Tracking**
![Progress Tracking](https://via.placeholder.com/800x400?text=Progress+Tracking)

*(Replace placeholders with actual screenshots of your application.)*

---

## **Contributing**

We welcome contributions to enhance this platform! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your feature description"
   ```
4. Push to your branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

---

## **License**

This project is licensed under the [MIT License](LICENSE).

---

## **Acknowledgments**

Special thanks to:
- The developers of **Next.js** and **Tailwind CSS** for creating such fantastic tools.
- The cybersecurity community for inspiring this project.

---
