"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE: Text + CTA */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold leading-tight text-left mb-6"
          >
            Decentralized Innovation. <br /> Built on Trust.
          </motion.h1>

          <p className="text-muted-foreground text-lg md:text-xl mb-8 text-left max-w-xl">
            The ForgeX Foundation is a collaborative space for developers and
            organizations to innovate, maintain, and grow open-source projects
            and ecosystems.
          </p>

          <Button
            asChild
            className="rounded-full px-6 py-3 text-semibold text-white bg-primary hover:bg-primary/90 transition-colors"
          >
            <Link href="/about">Learn More</Link>
          </Button>
        </div>

        {/* RIGHT SIDE: Image + Shapes */}
        <div className="relative w-full h-[350px] sm:h-[400px] md:h-[450px]">
          {/* Main Image */}
          <Image
            src="/cover-image.jpg"
            alt="ForgeX Community"
            fill
            className="object-cover rounded-lg"
          />

          {/* Shapes ABOVE image */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-blue-500 rotate-45 z-20 opacity-80" />
          <div className="absolute bottom-0 right-0 w-28 h-28 bg-primary rounded-full z-20 opacity-80" />
          <div className="absolute top-16 right-1/3 w-16 h-16 bg-purple-700 z-20 opacity-80" />
        </div>
      </div>

      {/* STATS SECTION */}
      <div className="px-6 sm:px-10 lg:px-24 py-16 lg:pt-28">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-12 text-center">
          {[
            { title: "23,411+", subtitle: "software downloads" },
            { title: "20+", subtitle: "open source projects" },
            { title: "500+", subtitle: "contributing developers" },
            { title: "20k", subtitle: "lines of code weekly" },
            { title: "10+", subtitle: "contributing orgs" },
            { title: "50+", subtitle: "upcoming events" },
          ].map(({ title, subtitle }, idx) => (
            <div key={idx} className="space-y-2">
              <p className="text-3xl font-extrabold">{title}</p>
              <p className="text-base text-blue-600 leading-snug">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>


    </section>
  );
}
