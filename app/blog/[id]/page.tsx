import { notFound } from "next/navigation"
import { Calendar, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { blogs } from "@/data/blogs"

interface BlogPageProps {
  params: {
    id: string
  }
}

export default function BlogPostPage({ params }: BlogPageProps) {
  const blog = blogs.find((b) => b.id === params.id)

  if (!blog) {
    notFound()
  }

  return (
    <div className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </Button>

        <article>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-muted-foreground mb-4">
              <Calendar className="h-4 w-4" />
              {new Date(blog.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{blog.title}</h1>
            <p className="text-xl text-muted-foreground">{blog.excerpt}</p>
          </div>

          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image src={blog.image || "/placeholder.svg"} alt={blog.title} fill className="object-cover" />
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: blog.content }} className="font-body" />
          </div>
        </article>
      </div>
    </div>
  )
}
