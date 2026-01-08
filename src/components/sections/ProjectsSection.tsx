import { useState } from "react";
import { Link } from "react-router-dom";
import { Github, ExternalLink, LayoutPanelTop } from "lucide-react";
import { projects, projectCategories, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/project/${project.id}`}
      className="block group"
    >
      <article className="p-6 rounded-lg flex flex-col h-full card-glow gradient-border transition-transform duration-200 group-hover:scale-[1.02]">
        <div className="flex-1">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-medium group-hover:text-primary transition-colors">{project.name}</h3>
            <div className="flex gap-2" onClick={(e) => e.stopPropagation()}>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <Github className="h-4 w-4" strokeWidth={1.5} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.name} live demo`}
                >
                  <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                </a>
              )}
              {project.architectureUrl && (
                <a
                  href={project.architectureUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={`View ${project.name} architecture`}
                >
                  <LayoutPanelTop className="h-4 w-4" strokeWidth={1.5} />
                </a>
              )}
            </div>
          </div>
          <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
          <p className="text-xs text-primary/70 group-hover:text-primary transition-colors mb-4">
            Click for more details →
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </article>
    </Link>
  );
}

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const { ref, isVisible } = useScrollAnimation(0.1);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className="py-10"
      aria-labelledby="projects-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-5xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <h2
            id="projects-heading"
            className="text-2xl font-bold tracking-tight mb-8"
          >
            Projects
          </h2>

          {/* Filter */}
          <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="Filter projects">
            {projectCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={cn(
                  "px-4 py-2 text-sm rounded-md transition-colors",
                  activeCategory === cat.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                )}
                role="tab"
                aria-selected={activeCategory === cat.value}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
