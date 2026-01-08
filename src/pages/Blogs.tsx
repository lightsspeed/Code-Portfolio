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
        <div className="max-w-2xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-6">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>

          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Blogs written by {profile.name.replace(".", " ")}
          </h1>
          <p className="text-sm text-muted-foreground mb-8 text-justify">
            Thoughts, tutorials, and insights on DevOps, cloud infrastructure, and automation.
          </p>

          {/* Blog List */}
          <div className="space-y-4">
            {sortedBlogs.map((post) => (
              <article
                key={post.id}
                className="p-4 rounded-lg border bg-card hover:bg-muted/30 transition-colors"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>

                  <h2 className="text-base font-semibold">{post.title}</h2>
                  <p className="text-sm text-muted-foreground text-justify line-clamp-2">{post.excerpt}</p>

                  <div className="flex items-center justify-between gap-2 mt-1">
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs px-2 py-0">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {post.mediumUrl && (
                      <a
                        href={post.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-primary hover:underline flex items-center gap-1"
                      >
                        Read more
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
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
