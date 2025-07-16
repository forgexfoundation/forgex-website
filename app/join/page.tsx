"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion, type Variants } from "framer-motion"
import { Mail, Github, ChromeIcon as Google } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import Image from "next/image"

export default function JoinPage() {
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const [showEmailInput, setShowEmailInput] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            if (session) router.push("/dashboard")
        })
    }, [router])

    const cardVariants: Variants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    }

    const buttonVariants: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: (i: number) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.4,
                ease: "easeOut",
            },
        }),
    }

    const handleOAuthLogin = async (provider: "google" | "github") => {
        setLoading(true)
        const { error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { redirectTo: `${window.location.origin}/dashboard` },
        })
        if (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            })
        }
        setLoading(false)
    }

    const handleMagicLinkLogin = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        const { error } = await supabase.auth.signInWithOtp({
            email,
            options: { emailRedirectTo: `${window.location.origin}/dashboard` },
        })

        if (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            })
        } else {
            toast({
                title: "Check your email!",
                description: "We've sent you a magic link to log in.",
            })
            setEmail("")
            setShowEmailInput(false)
        }

        setLoading(false)
    }

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
           
            <motion.div
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="w-full max-w-md"
            >
                <Card className="py-6 shadow-lg">
                    <CardHeader className="text-center space-y-4">
                        <div className="flex justify-center">
                            <Image
                                src="/logo-login.png"
                                alt="ForgeX Logo"
                                width={200}
                                height={200}
                                className="rounded-full"
                            />
                        </div>
                        <CardTitle className="text-xl font-bold">Join ForgeX Foundation</CardTitle>
                        <CardDescription className="text-muted-foreground">
                            Empowering developers through open-source innovation.
                        </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="space-y-4">
                            <motion.div
                                custom={0}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Button
                                    className="w-full h-11 text-lg rounded-lg flex items-center justify-center gap-3 bg-white text-black border hover:bg-gray-100"
                                    onClick={() => handleOAuthLogin("google")}
                                    disabled={loading}
                                >
                                    
                                    <Image
                                        src="/g.webp"
                                        alt="Google Logo"
                                        width={20}
                                        height={20}
                                    />
                                    Continue with Google
                                </Button>
                            </motion.div>
                            <motion.div
                                custom={1}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Button
                                    className="w-full h-11 text-lg rounded-lg flex items-center justify-center gap-3 bg-[#24292F] text-white hover:bg-[#1b1f23]"
                                    onClick={() => handleOAuthLogin("github")}
                                    disabled={loading}
                                >
                                    
                                    <Image
                                        src="/github-mark-white.svg"
                                        alt="GitHub Logo"
                                        width={20}
                                        height={20}
                                    />
                                    Continue with GitHub
                                </Button>
                            </motion.div>
                            <motion.div
                                custom={2}
                                variants={buttonVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Button
                                    variant="outline"
                                    className="w-full h-11 text-lg rounded-lg flex items-center gap-3 justify-center"
                                    onClick={() => setShowEmailInput(!showEmailInput)}
                                    disabled={loading}
                                >
                                    <Mail className="h-10 w-10" />
                                    Continue with Email
                                </Button>
                            </motion.div>
                        </div>

                        {showEmailInput && (
                            <motion.form
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleMagicLinkLogin}
                                className="space-y-4 overflow-hidden"
                            >
                                <Label htmlFor="email">Email Address</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="h-11 text-lg rounded-lg"
                                />
                                <Button
                                    type="submit"
                                    className="w-full h-11 text-lg rounded-lg"
                                    disabled={loading}
                                >
                                    {loading ? "Sending..." : "Send Magic Link"}
                                </Button>
                                <p className="text-sm text-muted-foreground text-center">
                                    We’ll send you a one-time login link to your email.
                                </p>
                            </motion.form>
                        )}

                        <p className="text-center text-sm text-muted-foreground">
                            Already have an account?{" "}
                            <Button
                                variant="link"
                                className="p-0 h-auto text-sm"
                                onClick={() => setShowEmailInput(true)}
                            >
                                Login
                            </Button>
                        </p>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
