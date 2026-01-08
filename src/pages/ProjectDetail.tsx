import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, BookOpen } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button asChild variant="outline">
            <Link to="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const scrollToLessons = () => {
    document.getElementById("lessons-learned")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 md:px-6 py-20 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Button asChild variant="ghost" size="sm" className="mb-8">
            <Link to="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>

          {/* Title & Lessons Button */}
          <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
            <h1 className="text-3xl md:text-4xl font-bold">{project.name}</h1>
            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
              <Button variant="outline" size="sm" onClick={scrollToLessons}>
                <BookOpen className="mr-2 h-4 w-4" />
                Lessons Learned
              </Button>
            )}
          </div>

          {/* Hook */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-justify">
            {project.hook || project.description}
          </p>

          {/* GitHub & Live Demo Buttons */}
          {(project.githubUrl || project.liveUrl) && (
            <div className="flex gap-4 mb-8 flex-wrap">
              {project.githubUrl && (
                <Button asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button asChild variant="outline">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              )}
            </div>
          )}

          {/* Tech Stack Table */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Technology</TableHead>
                    <TableHead>Category</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {project.techStack.map((tech, index) => (
                    <TableRow key={tech}>
                      <TableCell className="font-medium">{tech}</TableCell>
                      <TableCell className="text-muted-foreground">
                        {getCategoryForTech(tech)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </section>

          {/* Architecture Diagram */}
          {project.architectureUrl && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Architecture</h2>
              <div className="rounded-lg border overflow-hidden bg-muted/30">
                <img
                  src={project.architectureUrl}
                  alt={`${project.name} architecture diagram`}
                  className="w-full h-auto"
                />
              </div>
            </section>
          )}

          {/* Visuals */}
          {project.visuals && project.visuals.length > 0 && (
            <section className="mb-12">
              <h2 className="text-xl font-semibold mb-4">Visuals</h2>
              <div className="grid gap-4 md:grid-cols-2">
                {project.visuals.map((visual, index) => (
                  <div key={index} className="rounded-lg border overflow-hidden">
                    <img
                      src={visual}
                      alt={`${project.name} visual ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Problem & Solution */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Problem & Solution</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg border bg-destructive/5">
                <h3 className="font-medium text-destructive mb-3">The Problem</h3>
                <p className="text-muted-foreground text-justify">
                  {project.problem || "Manual infrastructure management leading to inconsistent deployments, security gaps, and operational overhead."}
                </p>
              </div>
              <div className="p-6 rounded-lg border bg-primary/5">
                <h3 className="font-medium text-primary mb-3">The Solution</h3>
                <p className="text-muted-foreground text-justify">
                  {project.solution || project.description}
                </p>
              </div>
            </div>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Key Features</h2>
            <ul className="grid gap-3">
              {(project.keyFeatures || getDefaultFeatures(project)).map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm shrink-0 mt-0.5">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground text-justify">{feature}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Lessons Learned */}
          <section id="lessons-learned" className="mb-12 scroll-mt-24">
            <h2 className="text-xl font-semibold mb-4">Lessons Learned</h2>
            <div className="space-y-3">
              {(project.lessonsLearned || getDefaultLessons()).map((lesson, index) => (
                <div key={index} className="p-4 rounded-lg border bg-muted/30">
                  <p className="text-muted-foreground text-justify">{lesson}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="p-8 rounded-lg border bg-muted/30 text-center">
            <h2 className="text-xl font-semibold mb-3">Interested in this project?</h2>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out or check out my other projects.
            </p>
            <Button asChild variant="outline">
              <Link to="/#projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                View All Projects
              </Link>
            </Button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

// Helper functions
function getCategoryForTech(tech: string): string {
  const categories: Record<string, string> = {
    Kubernetes: "Container Orchestration",
    Docker: "Containerization",
    Terraform: "Infrastructure as Code",
    AWS: "Cloud Provider",
    Go: "Programming Language",
    Python: "Programming Language",
    "Node.js": "Runtime",
    Prometheus: "Monitoring",
    Grafana: "Visualization",
    ArgoCD: "GitOps",
    Helm: "Package Manager",
    "GitHub Actions": "CI/CD",
    "GitLab CI": "CI/CD",
    Jenkins: "CI/CD",
    Vault: "Secrets Management",
    PostgreSQL: "Database",
    S3: "Storage",
    CloudFront: "CDN",
    Route53: "DNS",
    ACM: "SSL/TLS",
    Alertmanager: "Alerting",
    PagerDuty: "Incident Management",
    Terratest: "Testing",
    Trivy: "Security Scanning",
    YAML: "Configuration",
    Bash: "Scripting",
  };
  return categories[tech] || "Tool";
}

function getDefaultFeatures(project: { techStack: string[] }): string[] {
  return [
    "Production-ready infrastructure configuration",
    "Automated deployment pipeline",
    "Comprehensive documentation",
    `Built with ${project.techStack.slice(0, 3).join(", ")}`,
  ];
}

function getDefaultLessons(): string[] {
  return [
    "Infrastructure as Code significantly reduces deployment time and human error",
    "Proper monitoring and alerting are crucial for production systems",
    "Documentation should be treated as a first-class citizen in any project",
  ];
}
