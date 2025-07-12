export interface Project {
  id: string
  name: string
  shortDescription: string
  fullDescription: string
  technologies: string[]
  githubUrl: string
  demoUrl?: string
  stars: number
  forks: number
  features: string[]
  installation: string
  longDescription: string
  screenshots: string[]
  requirements: string[]
  roadmap: string[]
}

export const projects: Project[] = [
  {
    id: "whatsup",
    name: "WhatsUp",
    shortDescription: "A lightweight WhatsApp Web desktop wrapper using Electron",
    fullDescription:
      "WhatsUp is a clean, lightweight desktop application that wraps WhatsApp Web in an Electron container. It provides a native desktop experience for WhatsApp users who prefer a dedicated app over browser tabs. The application includes features like system notifications, auto-launch, and a minimal interface that stays out of your way while keeping you connected.",
    longDescription: `
      WhatsUp represents our commitment to creating simple, effective solutions for everyday problems. 
      Born from the frustration of managing multiple browser tabs and missing important messages, 
      WhatsUp provides a dedicated, distraction-free environment for your WhatsApp conversations.

      The application is built with privacy in mind - we don't collect any data, don't inject any 
      tracking scripts, and don't modify WhatsApp Web's functionality. It's simply a clean wrapper 
      that gives you the desktop experience you deserve.

      Our focus on cross-platform compatibility means WhatsUp works seamlessly across Windows, macOS, 
      and Linux, with native system integration on each platform. Whether you're using Windows 10's 
      notification system or macOS's notification center, WhatsUp feels at home on your system.
    `,
    technologies: ["Electron", "JavaScript", "HTML", "CSS", "Node.js"],
    githubUrl: "https://github.com/forgex-foundation/whatsup",
    demoUrl: "https://github.com/forgex-foundation/whatsup/releases",
    stars: 1247,
    forks: 89,
    features: [
      "Clean, minimal interface focused on messaging",
      "System notifications for new messages with sound alerts",
      "Auto-launch on system startup (configurable)",
      "Cross-platform support (Windows, macOS, Linux)",
      "Lightweight and fast performance (< 150MB RAM usage)",
      "No additional bloatware or unnecessary features",
      "Regular security updates and maintenance",
      "Easy installation with pre-built binaries",
      "Keyboard shortcuts for common actions",
      "Always-on-top mode for important conversations",
      "Custom notification sounds and preferences",
      "Automatic updates with user consent",
    ],
    installation: "npm install -g whatsup-desktop",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    requirements: [
      "Windows 10+ / macOS 10.12+ / Ubuntu 18.04+",
      "Node.js 16+ (for development)",
      "Internet connection for WhatsApp Web",
      "Minimum 4GB RAM recommended",
    ],
    roadmap: [
      "Dark mode theme support",
      "Multiple account management",
      "Enhanced notification customization",
      "Plugin system for extensions",
      "Mobile device sync status",
      "Advanced keyboard shortcuts",
    ],
  },
]
