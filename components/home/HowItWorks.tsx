"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { motion } from "framer-motion";
import { Lightbulb, Hammer, Rocket, CheckCircle } from "lucide-react";

export function HowItWorks() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our transparent development cycle ensures quality, community input,
            and continuous improvement.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Lightbulb,
              step: "01",
              title: "Ideate",
              description:
                "Community identifies needs, suggests features, and discusses solutions in our GitHub discussions.",
              color: "text-yellow-500",
            },
            {
              icon: Hammer,
              step: "02",
              title: "Build",
              description:
                "Developers collaborate on implementation with code reviews, testing, and iterative improvements.",
              color: "text-blue-500",
            },
            {
              icon: Rocket,
              step: "03",
              title: "Release",
              description:
                "Stable releases with comprehensive documentation, cross-platform binaries, and ongoing support.",
              color: "text-green-500",
            },
          ].map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div
                    className={`w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4`}
                  >
                    <phase.icon className={`h-8 w-8 ${phase.color}`} />
                  </div>
                  <div className="text-sm font-mono text-muted-foreground mb-2">
                    {phase.step}
                  </div>
                  <CardTitle className="text-xl">{phase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-center leading-relaxed">
                    {phase.description}
                  </CardDescription>
                </CardContent>
              </Card>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                Open Contributions Welcome
              </h3>
              <p className="text-muted-foreground">
                Every step of our process is transparent and open to community
                input. Join us in building the future of open-source desktop
                applications.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
