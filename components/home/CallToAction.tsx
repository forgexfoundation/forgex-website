"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
    return (
        <section className="py-24 px-6 bg-gradient-to-r from-primary/10 to-blue-600/10">
            <div className="max-w-5xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
                        Ready to Get Started?
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                        Join our community of developers building the future of open-source desktop applications.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/projects" passHref>
                            <Button
                                size="lg"
                                className="px-8 py-4 text-base font-medium rounded-xl transition hover:scale-[1.02] hover:shadow-md"
                            >
                                View Our Projects
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>

                        <Link
                            href="https://github.com/forgexfoundation"
                            target="_blank"
                            rel="noopener noreferrer"
                            passHref
                        >
                            <Button
                                variant="outline"
                                size="lg"
                                className="px-8 py-4 text-base font-medium border-muted hover:border-primary hover:text-primary rounded-xl transition hover:scale-[1.02]"
                            >
                                <Github className="mr-2 h-5 w-5" />
                                Follow on GitHub
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
