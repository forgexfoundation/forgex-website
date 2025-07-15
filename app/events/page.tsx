"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Users, Sparkles, CalendarClock } from "lucide-react";
import Link from "next/link";
import { events } from "@/data/events";


import Image from "next/image";

export default function EventsPage() {
  return (
      <div className="py-20 px-4 mb-40">
          <div className="max-w-6xl mx-auto">
              {/* Animated heading section */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-center mb-16"
              >
                  <h1 className="font-heading text-balance mb-6 text-4xl font-bold">
                      Events are coming soon! 🚀
                  </h1>
                  <p className="text-large text-muted-foreground mx-auto text-balance max-w-xl">
                      Join us at our upcoming events to connect with the community, learn,
                      and collaborate on open-source innovation.
                  </p>
              </motion.div>

              {/* Event cards with cartoon-like icons and animation */}
              <motion.div
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2 }}
              >
                  {[
                      {
                          icon: <CalendarClock size={48} />,
                          title: "Hackathon",
                          desc: "Code, build and compete with developers worldwide.",
                      },
                      {
                          icon: <Users size={48} />,
                          title: "Community Meetup",
                          desc: "Share ideas, connect, and collaborate with developers.",
                      },
                      {
                          icon: <Sparkles size={48} />,
                          title: "Open Source Fest",
                          desc: "Celebrate innovation and contribution in OSS.",
                      },
                  ].map((event, index) => (
                      <motion.div
                          key={index}
                          variants={{
                              hidden: { opacity: 0, y: 40 },
                              visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ duration: 0.5, delay: index * 0.2 }}
                          className="h-full bg-muted/20 duration-300 hover:shadow-lg transition-shadow p-6 rounded-xl shadow-lg hover:scale-[1.02] text-center"
                      >
                          <div className="mb-4 text-primary flex justify-center">
                              {event.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                          <p className="text-muted-foreground">{event.desc}</p>
                      </motion.div>
                  ))}

                  {/* If no real events yet */}
                 
              </motion.div>
              
          </div>
          
      </div>
  );
}
