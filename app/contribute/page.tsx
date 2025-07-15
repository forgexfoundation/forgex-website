"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  Github,
  Code,
  FileText,
  Palette,
  MessageSquare,
  Heart,
  FlaskConical,
  Star,
  Award,
  Users,
  ExternalLink,
  CheckCircle,
  GitPullRequest,
  Bug,
  Lightbulb,
  BookOpen,
} from "lucide-react"
import Link from "next/link"

export default function ContributePage() {
  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contribute to ForgeX</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join our community and help us build amazing open-source tools together. Every contribution, big or small,
            makes a difference.
          </p>
        </motion.div>

        <div className="space-y-16">
          {/* Ways to Contribute */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Ways to Contribute</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Code,
                  title: "Code Contributions",
                  description: "Submit pull requests, fix bugs, add new features, or improve existing functionality.",
                  action: "Start Coding",
                  color: "text-blue-500",
                  skills: ["JavaScript", "TypeScript", "Electron", "React"],
                  href: "https://github.com/forgexfoundation/.github/blob/main/CONTRIBUTING.md"
                },
                {
                  icon: FileText,
                  title: "Documentation",
                  description: "Help improve our docs, write tutorials, create examples, or translate content.",
                  action: "Improve Docs",
                  color: "text-green-500",
                  skills: ["Technical Writing", "Markdown", "Examples"],
                  href: "https://github.com/forgexfoundation/.github"
                },
                {
                  icon: FlaskConical,
                  title: "Testing & QA",
                  description: "Test new features, report bugs, verify fixes, and help improve software quality.",
                  action: "Start Testing",
                  color: "text-purple-500",
                  skills: ["Manual Testing", "Bug Reports", "QA"],
                  href: "https://discord.gg/fRypesE5Hp"
                },
                {
                  icon: Palette,
                  title: "Design & UX",
                  description: "Contribute to UI/UX design, create assets, improve user experience, or design icons.",
                  action: "Design with Us",
                  color: "text-pink-500",
                  skills: ["UI Design", "UX Research", "Figma", "Icons"],
                  href: "https://discord.gg/C7FTr5vyE7"
                },
                {
                  icon: MessageSquare,
                  title: "Community Support",
                  description: "Help other developers in discussions, answer questions, and share knowledge.",
                  action: "Join Discussions",
                  color: "text-orange-500",
                  skills: ["Communication", "Problem Solving", "Mentoring"],
                  href: "https://discord.gg/7Wcr5pJXZD"
                },
                {
                  icon: Lightbulb,
                  title: "Ideas & Feedback",
                  description: "Suggest new features, provide feedback on existing tools, or propose improvements.",
                  action: "Share Ideas",
                  color: "text-yellow-500",
                  skills: ["Product Thinking", "User Research", "Feedback"],
                  href: "https://discord.gg/G6HHJqkUpQ"
                },
              ].map((way, index) => (
                <motion.div
                  key={way.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                    <CardHeader>
                      <way.icon className={`h-8 w-8 ${way.color} mb-2 group-hover:scale-110 transition-transform`} />
                      <CardTitle>{way.title}</CardTitle>
                      <CardDescription className="leading-relaxed">{way.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-1">
                        {way.skills.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                      <a
                        href={way.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-white bg-primary/10 rounded-md hover:bg-primary/20 transition"
                      >
                        {way.action}
                      </a>

                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Contribution Guidelines */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Contribution Guidelines</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <GitPullRequest className="h-6 w-6 text-primary" />
                    <CardTitle>Pull Request Process</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Fork the repository and create a feature branch</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Write clear, descriptive commit messages</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Include tests for new functionality</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Update documentation as needed</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Submit PR with detailed description</p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Bug className="h-6 w-6 text-primary" />
                    <CardTitle>Bug Reports</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Use our bug report template</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Include steps to reproduce the issue</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Provide system information and logs</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Add screenshots or videos if helpful</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Check for existing similar issues first</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button asChild size="lg">
                <Link href="https://github.com/forgexfoundation/.github/blob/main/CONTRIBUTING.md" target="_blank">
                  <BookOpen className="mr-2 h-5 w-5" />
                  Read Full Contributing Guide
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.section>

          {/* Getting Started */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <CardTitle className="text-2xl">Getting Started</CardTitle>
                <CardDescription>
                  Ready to contribute? Here's how to get started with your first contribution.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  {[
                    "Browse our projects on GitHub and find one that interests you",
                    "Read the project's README and contributing guidelines carefully",
                    "Look for issues labeled 'good first issue' or 'help wanted'",
                    "Join our Discord or GitHub Discussions to introduce yourself",
                    "Fork the repository and create a new branch for your changes",
                    "Make your changes and submit a pull request with a clear description",
                    "Engage with maintainers and iterate based on feedback",
                    "Celebrate your contribution and help others get started!",
                  ].map((step, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0">
                        {index + 1}
                      </div>
                      <p className="text-muted-foreground">{step}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.section>

          {/* Rewards & Recognition */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Rewards & Recognition</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Award,
                  title: "Contributor Badges",
                  description: "Earn special badges on your GitHub profile for different types of contributions.",
                  color: "text-yellow-500",
                },
                {
                  icon: Star,
                  title: "Hall of Fame",
                  description: "Top contributors are featured on our website and in project documentation.",
                  color: "text-blue-500",
                },
                {
                  icon: Users,
                  title: "Community Shoutouts",
                  description: "Regular recognition in our newsletter, social media, and community updates.",
                  color: "text-green-500",
                },
              ].map((reward, index) => (
                <motion.div
                  key={reward.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <reward.icon className={`h-12 w-12 ${reward.color} mx-auto mb-4`} />
                      <CardTitle>{reward.title}</CardTitle>
                      <CardDescription>{reward.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* GitHub Links */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5 p-8 shadow-md rounded-xl">
              <CardHeader className="space-y-2">
                <CardTitle className="text-2xl md:text-3xl font-semibold flex items-center justify-center gap-2 text-primary">
                  <Github className="h-6 w-6" />
                  Ready to Contribute?
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  All our projects are open-source and available on GitHub.
                </CardDescription>
              </CardHeader>

              <CardContent className="mt-6 space-y-6 text-center">
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    asChild
                    size="lg"
                    className="text-base px-6 sm:px-8 font-semibold"
                  >
                    <Link href="https://github.com/forgexfoundation" target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      View Organization
                    </Link>
                  </Button>

                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="text-base px-6 sm:px-8 font-semibold"
                  >
                    <Link
                      href="https://github.com/forgexfoundation"
                      target="_blank"
                    >
                      <Heart className="mr-2 h-5 w-5 text-primary" />
                      Star Our Projects
                    </Link>
                  </Button>
                </div>
                <div className="w-full flex justify-center">
                  <p className="text-sm text-muted-foreground text-center max-w-md">
                    Join <span className="font-semibold text-primary">2,100+</span> developers who’ve starred our projects and{" "}
                    <span className="font-semibold text-primary">340+</span> who’ve contributed code.
                  </p>
                </div>

              </CardContent>
            </Card>
          </motion.section>

        </div>
      </div>
    </div>
  )
}
