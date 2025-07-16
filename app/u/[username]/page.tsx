"use client"

import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ArrowLeft } from "lucide-react"
import { createClient } from "@/lib/supabase-server"

interface PublicProfilePageProps {
    params: {
        username: string
    }
}

export default async function PublicProfilePage({ params }: PublicProfilePageProps) {
    const supabase = createClient()
    const { data, error } = await supabase
        .from("profiles")
        .select("*")
        .eq("username", params.username)
        .single()

    if (error || !data) {
        notFound()
    }

    const profile = data

    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: ["easeOut"],
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="w-full max-w-2xl"
            >
                <motion.div variants={itemVariants} className="mb-8">
                    <Link href="/dashboard" className="text-primary hover:underline flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" /> Back to Dashboard
                    </Link>
                </motion.div>

                <Card className="p-8 shadow-lg text-center">
                    <CardContent className="space-y-6">
                        <motion.div variants={itemVariants}>
                            <Avatar className="h-32 w-32 mx-auto border-4 border-primary/50 shadow-md">
                                <AvatarImage
                                    src={profile.avatar_url || "/placeholder.svg?height=100&width=100"}
                                    alt={`${profile.full_name || profile.username}'s profile picture`}
                                />
                                <AvatarFallback className="text-5xl bg-primary text-primary-foreground">
                                    {profile.full_name?.charAt(0) || profile.username?.charAt(0) || "?"}
                                </AvatarFallback>
                            </Avatar>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <h1 className="text-4xl font-bold text-balance">
                                {profile.full_name || "ForgeX User"}
                            </h1>
                            <p className="text-xl text-primary font-semibold mt-1">@{profile.username}</p>
                        </motion.div>

                        {profile.roles && profile.roles.length > 0 && (
                            <motion.div
                                variants={itemVariants}
                                className="flex flex-wrap justify-center gap-2 mt-4"
                            >
                                {profile.roles.map((role: string) => (
                                    <Badge key={role} variant="secondary" className="px-3 py-1 text-sm">
                                        {role}
                                    </Badge>
                                ))}
                            </motion.div>
                        )}

                        <motion.div variants={itemVariants}>
                            <p className="text-lg text-muted-foreground leading-relaxed max-w-prose mx-auto mt-4">
                                {profile.bio || "This user has not added a bio yet."}
                            </p>
                        </motion.div>

                        <motion.div variants={itemVariants} className="flex justify-center gap-4 mt-6">
                            {profile.github_url && (
                                <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full bg-transparent">
                                    <Link href={profile.github_url} target="_blank" aria-label="GitHub Profile">
                                        <Github className="h-6 w-6" />
                                    </Link>
                                </Button>
                            )}
                            {profile.linkedin_url && (
                                <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full bg-transparent">
                                    <Link href={profile.linkedin_url} target="_blank" aria-label="LinkedIn Profile">
                                        <Linkedin className="h-6 w-6" />
                                    </Link>
                                </Button>
                            )}
                            <Button asChild variant="outline" size="icon" className="h-12 w-12 rounded-full bg-transparent">
                                <Link href={`mailto:forgexfoundation@gmail.com`} aria-label="Contact via Email">
                                    <Mail className="h-6 w-6" />
                                </Link>
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
