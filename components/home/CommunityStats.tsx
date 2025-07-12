"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Users, Star, GitFork, Eye } from "lucide-react";

export function CommunityStats() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Backed by the Community
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our strength comes from our amazing community of developers,
            contributors, and users worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: Star,
              label: "GitHub Stars",
              value: "2.1K+",
              color: "text-yellow-500",
            },
            {
              icon: GitFork,
              label: "Forks",
              value: "340+",
              color: "text-blue-500",
            },
            {
              icon: Users,
              label: "Contributors",
              value: "45+",
              color: "text-green-500",
            },
            {
              icon: Eye,
              label: "Watchers",
              value: "180+",
              color: "text-purple-500",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <stat.icon className={`h-8 w-8 ${stat.color} mx-auto mb-2`} />
                  <div className="text-3xl font-bold mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl font-semibold mb-6">
            Built with Amazing Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Electron",
              "TypeScript",
              "React",
              "Node.js",
              "Tauri",
              "Flatpak",
              "Rust",
              "GTK",
              "Qt",
              "JavaScript",
              "Python",
              "C++",
              "Go",
              "Docker",
              "Kubernetes",
              "GraphQL",
              "PostgreSQL",
              "Redis",
              "MongoDB",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="text-sm px-4 py-2"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
