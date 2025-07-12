export const runtime = 'edge'

import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Download, Users } from "lucide-react"
import Link from "next/link"
import { projects } from "@/data/projects"

interface ProjectPageProps {
  params: {
    id: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="font-heading text-balance">{project.name}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4" />
                {project.stars}
              </div>
              <div className="flex items-center gap-1">
                <GitFork className="h-4 w-4" />
                {project.forks}
              </div>
            </div>
          </div>
          <p className="text-large text-muted-foreground mb-6 text-balance">{project.shortDescription}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex gap-4">
            <Button asChild>
              <Link href={project.githubUrl} target="_blank">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </Button>
            {project.demoUrl && (
              <Button asChild variant="outline">
                <Link href={project.demoUrl} target="_blank">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Live Demo
                </Link>
              </Button>
            )}
          </div>
        </div>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="font-heading">About</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-muted-foreground leading-relaxed">{project.fullDescription}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-heading">Features</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0" />
                    <span className="text-base text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Installation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">{project.installation}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Contributing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  We welcome contributions! Check out our contributing guidelines.
                </p>
                <Button asChild variant="outline" size="sm">
                  <Link href={`${project.githubUrl}/blob/main/CONTRIBUTING.md`} target="_blank">
                    Contributing Guide
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
