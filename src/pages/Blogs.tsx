import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/data/blog";
import { profile } from "@/data/profile";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PageTransition } from "@/components/PageTransition";

export default function Blogs() {
  // Sort blogs by date (most recent first)
  const sortedBlogs = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Blogs written by {profile.name.replace(".", " ")}
          </h1>
          <p className="text-lg text-muted-foreground mb-12 text-justify">
            Thoughts, tutorials, and insights on DevOps, cloud infrastructure, and automation.
          </p>

          {/* Blog List */}
          <div className="space-y-8">
            {sortedBlogs.map((post) => (
              <article
                key={post.id}
                className="p-6 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-semibold">{post.title}</h2>
                  <p className="text-muted-foreground text-justify">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {post.mediumUrl && (
                    <Button asChild variant="outline" size="sm" className="w-fit">
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Read on Medium
                      </a>
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
