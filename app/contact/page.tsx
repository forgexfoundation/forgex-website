"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"
import { Mail, Github, MessageCircle, Users, Clock, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {

  const [status, setStatus] = useState<'idle' | 'loading' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)

    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        firstName: form.get('firstName'),
        lastName: form.get('lastName'),
        email: form.get('email'),
        subject: form.get('subject'),
        message: form.get('message'),
        category: form.get('category'),
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const data = await response.json()
    setStatus(data.success ? 'sent' : 'error')
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-heading text-balance mb-6">Get in Touch</h1>
          <p className="text-large text-muted-foreground mx-auto text-balance">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you! Our community is here to
            help and support each other.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-heading mb-6">Contact Methods</h2>
              <p className="text-large text-muted-foreground mb-8">
                Choose the best way to reach us based on your needs. We're committed to responding to all inquiries
                within 24-48 hours.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-xl mb-2">Email</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Direct communication for partnerships, press inquiries, or private matters
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent font-medium">
                    <Link href="mailto:forgexfoundation@gmail.com">forgexfoundation@gmail.com</Link>
                  </Button>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Response time: 24-48 hours</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-blue-500/10 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-blue-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-xl mb-2">GitHub Discussions</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Public discussions, Q&A, feature requests, and community support
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent font-medium">
                    <Link href="https://github.com/forgex-foundation/community/discussions" target="_blank">
                      Join Discussions
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>Active community of 500+ members</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-green-500/10 rounded-lg">
                      <Github className="h-6 w-6 text-green-500" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="font-heading text-xl mb-2">GitHub</CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        Follow our projects, report issues, contribute code, and star repositories
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button asChild variant="outline" className="w-full bg-transparent font-medium">
                    <Link href="https://github.com/forgex-foundation" target="_blank">
                      @forgex-foundation
                    </Link>
                  </Button>
                  <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4" />
                    <span>2,100+ stars across projects</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Response Times */}
            <Card className="bg-muted/30">
              <CardHeader>
                <CardTitle className="font-heading text-lg">Response Times & Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm">
                      <strong>Email:</strong> 24-48 hours for all inquiries
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    <span className="text-sm">
                      <strong>GitHub Issues:</strong> 1-3 days for bug reports
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full" />
                    <span className="text-sm">
                      <strong>Discussions:</strong> Community-driven, usually same day
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm">
                      <strong>Pull Requests:</strong> 2-5 days for code review
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="h-fit">
              <CardHeader>
                <CardTitle className="font-heading text-2xl">Send us a Message</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Fill out the form below and we'll get back to you as soon as possible. For urgent matters, please use
                  email directly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium font-heading">
                        First Name *
                      </label>
                      <Input id="firstName" name="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium font-heading">
                        Last Name *
                      </label>
                      <Input id="lastName" name="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium font-heading">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium font-heading">
                      Subject *
                    </label>
                    <Input id="subject" name="subject" placeholder="What's this about?" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="category" className="text-sm font-medium font-heading">
                      Category
                    </label>
                    <select
                      id="category"
                      name="category"
                      className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <option value="">Select a category</option>
                      <option value="general">General Inquiry</option>
                      <option value="bug">Bug Report</option>
                      <option value="feature">Feature Request</option>
                      <option value="partnership">Partnership</option>
                      <option value="press">Press & Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium font-heading">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                      required
                      className="resize-none"
                    />
                  </div>

                  <div className="space-y-4">
                    <Button type="submit" className="w-full font-medium" disabled={status === 'loading'}>
                      <Send className="mr-2 h-4 w-4" />
                      {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting this form, you agree to our privacy policy. We'll only use your information to respond to your
                      inquiry.
                    </p>

                    {status === 'sent' && (
                      <p className="text-green-600 text-sm text-center font-medium">✅ Message sent successfully!</p>
                    )}

                    {status === 'error' && (
                      <p className="text-red-600 text-sm text-center font-medium">❌ Failed to send message. Please try again.</p>
                    )}
                  </div>
                </form>

              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Additional Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-primary/5 to-blue-600/5">
            <CardContent className="pt-8">
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl mb-4">Join Our Community</h3>
                <p className="text-large text-muted-foreground mx-auto">
                  Connect with other developers, get help, and stay updated with the latest news
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="p-4 bg-background rounded-lg mb-4 inline-block">
                    <Github className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">GitHub</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Star our repos, contribute code, and report issues
                  </p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/forgex-foundation" target="_blank">
                      Follow Us
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-background rounded-lg mb-4 inline-block">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Discussions</h4>
                  <p className="text-sm text-muted-foreground mb-4">Ask questions and share ideas with the community</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="https://github.com/forgex-foundation/community/discussions" target="_blank">
                      Join Chat
                    </Link>
                  </Button>
                </div>

                <div className="text-center">
                  <div className="p-4 bg-background rounded-lg mb-4 inline-block">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-heading font-semibold mb-2">Newsletter</h4>
                  <p className="text-sm text-muted-foreground mb-4">Get updates on new releases and community news</p>
                  <Button asChild variant="outline" size="sm">
                    <Link href="mailto:forgexfoundation@gmail.com?subject=Newsletter Signup">Subscribe</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}