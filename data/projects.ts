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
    id: "wuchat",
    name: "WUChat",
    shortDescription: "A lightweight WhatsApp Web desktop wrapper using Electron",
    fullDescription:
      "WUChat is a clean, lightweight desktop application that wraps WhatsApp Web in an Electron container. It provides a native desktop experience for WhatsApp users who prefer a dedicated app over browser tabs. The application includes features like system notifications, auto-launch, and a minimal interface that stays out of your way while keeping you connected.",
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
    githubUrl: "https://github.com/forgexfoundation/whatsapp-desktop-client",
    demoUrl: "https://github.com/forgexfoundation/whatsapp-desktop-client/releases",
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
    installation: "snap install whatsup-desktop-client",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    requirements: [
      "Ubuntu 18.04+/Fedora 30+/Arch Linux",
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
  {
    id: "notion-desktop",
    name: "Notion Desktop",
    shortDescription: "Unofficial Notion Web wrapper for Linux using Electron",
    fullDescription:
      "Notion Desktop is a lightweight, privacy-conscious Electron wrapper that brings Notion's web app to your Linux desktop. Designed for simplicity and productivity, it eliminates the need for browser tabs while offering a native-like experience with system-level integration.",
    longDescription: `
    Built with the open-source spirit, Notion Desktop is our solution to the lack of an official Notion client for Linux. 
    It’s minimal, fast, and fully focused on providing a stable experience for Notion users who prefer a distraction-free 
    desktop environment.

    We ensure a clean web wrapper experience — no telemetry, no custom modifications to Notion Web. This app simply 
    brings Notion to your system tray, supports desktop notifications, and maintains seamless session management.

    Official Snapcraft support means you can install it in seconds on any major Linux distribution.
    It’s perfect for developers, writers, and productivity enthusiasts who rely on Notion every day.
  `,
    technologies: ["Electron", "JavaScript", "Node.js", "HTML", "CSS"],
    githubUrl: "https://github.com/forgex-foundation/notion-desktop",
    demoUrl: "https://snapcraft.io/notion-desktop",
    stars: 642,
    forks: 31,
    features: [
      "Native Linux desktop experience for Notion",
      "System tray support with quick launch",
      "Fast startup and clean UI without clutter",
      "Support for desktop notifications",
      "Cross-distro support via Snap package",
      "Low memory usage (< 200MB)",
      "Auto-reconnect and session persistence",
      "Keyboard shortcuts for fast navigation",
      "Light and dark mode compatibility with Notion",
      "Privacy-focused: no data collection or tracking",
    ],
    installation: "sudo snap install notion-desktop",
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    requirements: [
      "Ubuntu 20.04+ / Fedora / Arch / other Snap-enabled distros",
      "Snapd must be installed and running",
      "Internet connection for Notion Web",
      "Minimum 4GB RAM recommended",
    ],
    roadmap: [
      "App icon customization",
      "Always-on-top mode",
      "Launch with system startup",
      "Native menu bar controls",
      "Custom URL handler for notion:// links",
      "Offline reading support (experimental)",
    ],
  },
  {
    id: "forgex-cli",
    name: "ForgeX CLI",
    shortDescription: "A powerful, cross-distro command-line utility built for Linux power users.",
    fullDescription:
      "ForgeX CLI is a single-binary command-line tool designed to help Linux users manage system operations like updates, cleaning, process control, and more — all in one place. It works seamlessly across major distributions like Debian, Arch, Fedora, NixOS, and more.",
    longDescription: `
    ForgeX CLI was built out of a need for a unified tool that speaks the same language across different Linux distributions. 
    Whether you're using Debian, Arch, Fedora, NixOS, or Void Linux, ForgeX CLI provides the same commands and behaviors.

    From updating your system to killing rogue processes, cleaning junk, or viewing open ports — this tool simplifies 
    maintenance for developers, hackers, and sysadmins alike.

    It's fully open-source, fast, and backed by the ForgeX Foundation's mission to empower open-source Linux tooling.
  `,
    technologies: ["C++", "CMake", "Shell Script", "Linux System APIs"],
    githubUrl: "https://github.com/ForgeX-Foundation/forgex-cli",
    demoUrl: "https://github.com/ForgeX-Foundation/forgex-cli/releases",
    stars: 873,
    forks: 59,
    features: [
      "One binary, works across Debian, Arch, Fedora, Void, openSUSE, NixOS",
      "`fx update` — System update for your distro",
      "`fx info` — System summary (CPU, RAM, uptime)",
      "`fx kill <port>` — Kill process running on a specific port",
      "`fx clean` — Clean system cache & junk",
      "`fx ports` — List open listening ports",
      "`fx update --self` — Self-update from GitHub",
      "`fx uninstall` — Completely uninstall ForgeX CLI",
      "Reads user config from ~/.fxconfig",
      "`fx help` — Full list of commands",
    ],
    installation: `
1. Clone the repo
\`\`\`bash
git clone https://github.com/ForgeX-Foundation/forgex-cli.git
cd forgex-cli
\`\`\`

2. Build and Install
\`\`\`bash
mkdir -p build && cd build
cmake ..
make
sudo make install
\`\`\`
  `,
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    requirements: [
      "Linux distro (Debian/Ubuntu, Arch, Fedora, etc.)",
      "CMake, GCC or Clang",
      "sudo/root access for installing system-wide",
      "Network access for update features",
    ],
    roadmap: [
      "Shell autocompletion (bash, zsh, fish)",
      "Color themes and prompt styling",
      "Package manager plugin system",
      "More system stats: battery, disk usage",
      "Interactive TUI dashboard",
      "Optional telemetry (opt-in only)",
    ],
  },
  {
    id: "socialdon",
    name: "Socialdon",
    shortDescription: "An unofficial, privacy-friendly Mastodon client built for desktop.",
    fullDescription:
      "Socialdon is a clean, open-source Mastodon desktop client built with modern tech. It offers a minimal, distraction-free interface tailored for power users and Mastodon newcomers alike. With real-time feed updates, multi-instance support, and system integration, it makes the Fediverse feel native on your desktop.",
    longDescription: `
    Socialdon is our take on what a lightweight, user-first Mastodon client should be. 
    It supports multiple Mastodon instances, offers a sleek UI with timeline filtering, 
    and deeply integrates into your desktop system — from notifications to media previews.

    Built using Electron and TypeScript, it ensures cross-platform compatibility and a snappy experience.
    It doesn’t collect any user data and never interferes with your Mastodon instance’s privacy settings.

    ForgeX Foundation designed Socialdon to be fully open, transparent, and driven by feedback from the Fediverse community.
  `,
    technologies: ["Electron", "TypeScript", "React", "Tailwind CSS", "Mastodon API"],
    githubUrl: "https://github.com/ForgeX-Foundation/socialdon",
    demoUrl: "https://github.com/ForgeX-Foundation/socialdon/releases",
    stars: 421,
    forks: 27,
    features: [
      "Native desktop wrapper for any Mastodon instance",
      "Real-time feed updates with WebSocket support",
      "Multi-account and multi-instance support",
      "Timeline filters (Home, Local, Federated)",
      "Toot composer with emoji and media support",
      "Notifications and tray icon integration",
      "Privacy-first: No tracking or analytics",
      "Dark mode and accessibility settings",
      "Lightweight and fast — <200MB RAM on average",
      "Custom themes and font scaling options",
    ],
    installation: `
1. Clone the repository
\`\`\`bash
git clone https://github.com/ForgeX-Foundation/socialdon.git
cd socialdon
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Run the app locally
\`\`\`bash
npm run dev
\`\`\`

4. Build production binaries
\`\`\`bash
npm run build
\`\`\`
  `,
    screenshots: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    requirements: [
      "Linux/macOS/Windows system (64-bit)",
      "Node.js v18+ (for development build)",
      "Internet access for connecting to Mastodon instance",
    ],
    roadmap: [
      "Built-in image/media editor",
      "Streaming support for live timelines",
      "Notifications with direct reply support",
      "Custom emoji picker and reactions",
      "Keyboard shortcut configuration panel",
      "Snap and Flatpak distribution",
    ],
  }



]
