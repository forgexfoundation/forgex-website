"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-xl"
            >
                {/* Optional: replace with your own SVG or Lottie animation */}
                <Image
                    src="/not-found.svg" // Put a nice illustration in your public folder
                    alt="Page Not Found"
                    width={400}
                    height={400}
                    className="mx-auto mb-8"
                />

                <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
                <p className="text-muted-foreground mb-6">
                    The page you are looking for doesn’t exist or has been moved.
                </p>

                <Button asChild>
                    <Link href="/">Go Back Home</Link>
                </Button>
            </motion.div>
        </div>
    );
}
