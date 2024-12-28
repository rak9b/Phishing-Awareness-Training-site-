export const tracks = {
  ceh: {
    title: 'CEH Track',
    description: 'Certified Ethical Hacker (CEH) modules focus on learning the tools and techniques used by cybersecurity professionals to identify vulnerabilities and secure systems.',
    modules: [
      {
        title: 'Introduction to Ethical Hacking',
        icon: 'Shield',
        topics: [
          'Ethical Hacking Principles',
          'Types of Hackers',
          'Legal Compliance',
        ],
      },
      {
        title: 'Footprinting & Reconnaissance',
        icon: 'Target',
        topics: [
          'OSINT Techniques',
          'Network Mapping',
          'Information Gathering',
        ],
      },
      {
        title: 'Network Scanning',
        icon: 'Activity',
        topics: [
          'Port Scanning',
          'Service Enumeration',
          'Vulnerability Assessment',
        ],
      },
      {
        title: 'System Hacking',
        icon: 'Terminal',
        topics: [
          'Gaining Access',
          'Privilege Escalation',
          'Maintaining Access',
        ],
      },
    ],
  },
  oscp: {
    title: 'OSCP Track',
    description: 'Offensive Security Certified Professional (OSCP) modules focus on advanced penetration testing and real-world attack scenarios.',
    modules: [
      {
        title: 'Penetration Testing Basics',
        icon: 'Lock',
        topics: [
          'Testing Methodology',
          'Report Writing',
          'Documentation',
        ],
      },
      {
        title: 'Advanced Network Attacks',
        icon: 'Activity',
        topics: [
          'Service Exploitation',
          'Network Pivoting',
          'Post-Exploitation',
        ],
      },
      {
        title: 'Web Application Security',
        icon: 'Globe',
        topics: [
          'SQL Injection',
          'XSS Attacks',
          'CSRF Vulnerabilities',
        ],
      },
    ],
  },
};
