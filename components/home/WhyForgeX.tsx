"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { Users, Github, Shield, Monitor } from "lucide-react";

export function WhyForgeX() {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why ForgeX?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're different. Here's what makes ForgeX Foundation stand out in
            the open-source ecosystem.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Monitor,
              title: "Cross-platform by Default",
              description:
                "Build once, run everywhere. Our tools work seamlessly across Windows, macOS, and Linux.",
              color: "text-blue-500",
            },
            {
              icon: Shield,
              title: "Zero Data Collection",
              description:
                "Your privacy matters. We don't track, collect, or sell your data. Ever. Period.",
              color: "text-green-500",
            },
            {
              icon: Users,
              title: "Built by Developers for Developers",
              description:
                "Created by people who understand your workflow because we live it every day.",
              color: "text-purple-500",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <feature.icon className={`h-12 w-12 ${feature.color} mb-4`} />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
