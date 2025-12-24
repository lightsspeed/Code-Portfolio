import { blogPosts } from "@/data/blog";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export function BlogSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="blog"
      className="py-20 bg-secondary/30"
      aria-labelledby="blog-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-5xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <h2
            id="blog-heading"
            className="text-2xl font-bold tracking-tight mb-8"
          >
            Blog
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="group p-6 rounded-lg card-glow gradient-border cursor-pointer"
              >
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" strokeWidth={1.5} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" strokeWidth={1.5} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-medium mb-2 group-hover:text-muted-foreground transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs bg-secondary text-secondary-foreground rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                    Read more
                    <ArrowRight className="h-3 w-3" strokeWidth={1.5} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
