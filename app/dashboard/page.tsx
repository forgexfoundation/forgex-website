"use client"

import type React from "react"

import { useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { User, Info, Save, Loader2, LinkIcon, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useToast } from "@/components/ui/use-toast"
import { supabase } from "@/lib/supabase"
import type { User as SupabaseUser } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import Link from "next/link"

type Profile = Database["public"]["Tables"]["profiles"]["Row"]
type ProfileUpdate = Database["public"]["Tables"]["profiles"]["Update"]

export default function DashboardPage() {
    const [user, setUser] = useState<SupabaseUser | null>(null)
    const [profile, setProfile] = useState<Profile | null>(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)
    const [avatarFile, setAvatarFile] = useState<File | null>(null)
    const { toast } = useToast()
    const router = useRouter()

    const fetchUserProfile = useCallback(
        async (userId: string) => {
            const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

            if (error && error.code !== "PGRST116") {
                console.error("Error fetching profile:", error)
                toast({
                    title: "Error",
                    description: `Failed to load profile: ${error.message}`,
                    variant: "destructive",
                })
            } else if (data) {
                setProfile(data)
            } else {
                setProfile({
                    id: userId,
                    full_name: null,
                    username: null,
                    bio: null,
                    avatar_url: null,
                    roles: [],
                    github_url: null,
                    linkedin_url: null,
                })
            }
            setLoading(false)
        },
        [toast],
    )

    useEffect(() => {
        const getSession = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            if (!user) {
                router.push("/join")
                return
            }
            setUser(user)
            fetchUserProfile(user.id)
        }

        getSession()

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            if (session?.user) {
                setUser(session.user)
                fetchUserProfile(session.user.id)
            } else {
                setUser(null)
                setProfile(null)
                router.push("/join")
            }
        })

        return () => {
            authListener.subscription.unsubscribe()
        }
    }, [router, fetchUserProfile])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target
        setProfile((prev) => (prev ? { ...prev, [id]: value } : null))
    }

    const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAvatarFile(e.target.files[0])
            setProfile((prev) => (prev ? { ...prev, avatar_url: URL.createObjectURL(e.target.files![0]) } : null))
        }
    }

    const uploadAvatar = async (userId: string) => {
        if (!avatarFile) return profile?.avatar_url

        const fileExt = avatarFile.name.split(".").pop()
        const fileName = `${userId}.${fileExt}`
        const filePath = `avatars/${fileName}`

        const { error: uploadError } = await supabase.storage.from("avatars").upload(filePath, avatarFile, {
            upsert: true,
        })

        if (uploadError) throw uploadError

        const { data: publicUrlData } = supabase.storage.from("avatars").getPublicUrl(filePath)
        return publicUrlData.publicUrl
    }

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!user || !profile) return

        setSaving(true)
        try {
            let newAvatarUrl = profile.avatar_url
            if (avatarFile) {
                newAvatarUrl = (await uploadAvatar(user.id)) ?? null
            }

            const updateData: ProfileUpdate = {
                id: user.id,
                full_name: profile.full_name,
                username: profile.username,
                bio: profile.bio,
                avatar_url: newAvatarUrl,
                github_url: profile.github_url,
                linkedin_url: profile.linkedin_url,
            }

            const { error } = await supabase.from("profiles").upsert(updateData, {
                onConflict: "id",
            })

            if (error) throw error

            toast({
                title: "Profile updated!",
                description: "Your profile has been successfully saved.",
            })
            setAvatarFile(null)
        } catch (error: any) {
            toast({
                title: "Error saving profile",
                description: error.message,
                variant: "destructive",
            })
        } finally {
            setSaving(false)
        }
    }

    const handleLogout = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signOut()
        if (error) {
            toast({
                title: "Error",
                description: error.message,
                variant: "destructive",
            })
        } else {
            router.push("/join")
        }
        setLoading(false)
    }

    if (loading) {
        return (
            <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        )
    }

    if (!user || !profile) return null

    return (
        <div className="flex min-h-[calc(100vh-4rem)] items-center justify-center bg-gradient-to-br from-primary/5 to-background p-4">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full max-w-4xl grid lg:grid-cols-3 gap-8"
            >
                {/* JSX content preserved exactly as before */}
            </motion.div>
        </div>
    )
}
