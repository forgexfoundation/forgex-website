"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { motion } from "framer-motion"
import {
  Target,
  Eye,
  Users,
  Code,
  Heart,
  Lightbulb,
  Shield,
  Monitor,
  HandMetal,
  Wrench,
  Github,
  Twitter,
  Linkedin,
  Rss,
} from "lucide-react"
import Link from "next/link"

import { TeamMember } from "@/types/types"
const teamMembers: TeamMember[] = [
  {
    name: "Tanmoy Ganguly",
    username: "xanmoy",
    role: "Founder",
    avatar: "https://pbs.twimg.com/profile_images/1929128644397400064/LINuv5IJ_400x400.jpg",
    github: "https://github.com/xanmoy",
    linkedin: "https://www.linkedin.com/in/xanmoy/",
    twitter: "https://twitter.com/xanmoy",
    website: "https://xanmoy.in",
    initials: "TG",
  },
  {
    name: "Bhavini Lakhotia",
    username: "bhavini-lakhotia",
    role: "Public Relations Lead",
    avatar: "/team/bhavini-lakhotia.png",
    github: "https://github.com/bhavini-lakhotia",
    linkedin: "https://www.linkedin.com/in/bhavini-lakhotia/",
    initials: "BL",
  },
  {
    name: "Arya Bose",
    username: "NeilDogii",
    role: "Founding team member",
    avatar: "/team/NeilDogii.png",
    github: "https://github.com/NeilDogii",
    initials: "AB",
  },
  {
    name: "Sreejan Naru",
    username: "XronTrix10",
    role: "Founding team member",
    avatar: "https://pbs.twimg.com/profile_images/1573771449957228544/2S80vZdh_400x400.jpg",
    github: "https://github.com/XronTrix10",
    twitter: "https://x.com/XronTrix10",
    linkedin: "https://www.linkedin.com/in/sreejan-naru-472195237/",
    website: "https://xrontrix.me/",
    initials: "SN",
  },
  {
    name: "Debobrata Pal",
    username: "Dev-Destructor",
    role: "Senior DevOps Engineer & Technical Advisor",
    avatar: "https://pbs.twimg.com/profile_images/1477713528337289217/eR6I9RKh_400x400.jpg",
    github: "https://github.com/Dev-Destructor",
    linkedin: "https://www.linkedin.com/in/debobrata-pal-a50634211/",
    twitter: "https://x.com/Dev_Destructor",
    initials: "DP",
  },
  {
    name: "Anushwa Bhattacharya",
    username: "Anushwa2003",
    role: "Strategic Alliances Lead",
    avatar: "https://pbs.twimg.com/profile_images/1789214015412965376/yONqHHOh_400x400.png",
    github: "https://github.com/Anushwa2003",
    linkedin: "https://www.linkedin.com/in/anushwa2003/",
    twitter: "https://x.com/AnushwaBhatt",
    initials: "DP",
  },
]



export default function AboutPage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ForgeX Foundation</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to democratize technology through open-source innovation and community collaboration
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Our Story Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Story</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ForgeX started with a simple goal: to make open-source desktop tools accessible, clean, and
                  community-driven. We saw a gap in polished, cross-platform apps and decided to build a foundation that
                  supports ongoing open development from engineers, for everyone.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  What began as a small project to create better desktop applications has evolved into a thriving
                  community of developers, designers, and users who share our vision of transparent, privacy-focused,
                  and user-centric software development.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Today, we're proud to maintain several popular open-source projects and continue to grow our community
                  of contributors who believe in building software the right way.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  ForgeX Foundation exists to empower developers worldwide by creating high-quality, accessible
                  open-source tools that solve real-world problems. We believe that great software should be free,
                  collaborative, and built with the community in mind.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Vision Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Eye className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We envision a world where technology barriers are broken down through open collaboration, where every
                  developer has access to the tools they need to build amazing things, and where innovation thrives
                  through community-driven development.
                </p>
              </CardContent>
            </Card>
          </motion.section>

          {/* Core Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Shield,
                  title: "🔐 Privacy-first",
                  description:
                    "No trackers, ever. Your data stays yours, and we build tools that respect your privacy from the ground up.",
                },
                {
                  icon: Monitor,
                  title: "⚙️ Cross-platform",
                  description:
                    "Build once, use everywhere. Our applications work seamlessly across Windows, macOS, and Linux.",
                },
                {
                  icon: HandMetal,
                  title: "🤝 Open Collaboration",
                  description:
                    "Ideas > hierarchies. The best solutions come from diverse perspectives and open discussion.",
                },
                {
                  icon: Wrench,
                  title: "🛠️ Developer Focused",
                  description:
                    "Built with real dev workflows in mind. We solve problems we face every day as developers.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <value.icon className="h-6 w-6 text-primary" />
                        <CardTitle className="text-lg">{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base leading-relaxed">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          
          {/* Meet the Team Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow h-full">
                    <CardHeader>
                      <Avatar className="w-20 h-20 mx-auto mb-4">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback className="text-lg font-semibold">{member.initials}</AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-xl">{member.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">@{member.username}</p>
                      <CardDescription className="text-primary font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-center gap-4">
                        {member.github && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={member.github} target="_blank">
                              <Github className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.twitter && member.twitter !== "#" && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={member.twitter} target="_blank">
                              <Twitter className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.linkedin && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={member.linkedin} target="_blank">
                              <Linkedin className="h-4 w-4" />
                            </Link>
                          </Button>
                        )}
                        {member.website && (
                          <Button asChild variant="outline" size="sm">
                            <Link href={member.website} target="_blank">
                              <Rss className="h-4 w-4" />
                              
                            </Link>
                          </Button>
                        )}

                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>


          {/* Traditional Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Our Principles</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Code,
                  title: "Quality First",
                  description:
                    "We prioritize code quality, comprehensive documentation, and exceptional user experience in everything we build.",
                },
                {
                  icon: Users,
                  title: "Community Driven",
                  description:
                    "Our projects are shaped by community feedback, contributions, and collaborative decision-making processes.",
                },
                {
                  icon: Heart,
                  title: "Inclusive & Welcoming",
                  description:
                    "We foster an environment where developers of all backgrounds and skill levels can contribute and grow.",
                },
                {
                  icon: Lightbulb,
                  title: "Innovation & Learning",
                  description:
                    "We encourage experimentation, learning from failures, and pushing technological boundaries together.",
                },
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <value.icon className="h-6 w-6 text-primary" />
                        <CardTitle>{value.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Goals Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Our Goals</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Build and maintain high-quality open-source tools that developers love to use
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Foster a welcoming community where contributors can learn and grow together
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Provide comprehensive documentation and resources for all skill levels
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Promote best practices in software development and open-source collaboration
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">
                      Create sustainable funding models that support long-term project maintenance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.section>
        </div>
      </div>
    </div>
  )
}
