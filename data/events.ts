export interface Event {
    id: string
    title: string
    date: string
    location: string
    description: string
    link: string
    attendees?: number
}

export const events: Event[] = [
    {
        id: "oss-summit-2024",
        title: "Open Source Summit 2024",
        date: "2024-09-20T09:00:00Z",
        location: "Virtual Event",
        description:
            "A global conference for open-source developers, maintainers, and users. Featuring talks on new technologies, community building, and project sustainability.",
        link: "https://opensourcesummit.org/2024",
        attendees: 1500,
    },
    {
        id: "forgex-community-meetup-q3",
        title: "ForgeX Community Meetup Q3",
        date: "2024-10-15T18:30:00Z",
        location: "Online (Discord & Zoom)",
        description:
            "Our quarterly community meetup to discuss project updates, new ideas, and connect with fellow ForgeX contributors. All are welcome!",
        link: "https://discord.gg/forgex-foundation",
        attendees: 120,
    },
    {
        id: "electron-dev-conf",
        title: "Electron Developer Conference",
        date: "2024-11-05T10:00:00Z",
        location: "San Francisco, CA & Online",
        description:
            "The premier conference for Electron developers. Dive deep into desktop app development, performance optimization, and new Electron features.",
        link: "https://electronconf.com",
        attendees: 800,
    },
]
