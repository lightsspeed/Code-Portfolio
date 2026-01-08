import { useState, useEffect, useCallback, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Github, ExternalLink, BookOpen, ChevronDown, X, ZoomIn, ZoomOut } from "lucide-react";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Dialog, DialogContent } from "@/components/ui/dialog";
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

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

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

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.name}</h1>

          {/* Hook */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed text-justify">
            {project.hook || project.description}
          </p>

          {/* Action Buttons - All in one line */}
          <div className="flex gap-4 mb-8 flex-wrap">
            {project.lessonsLearned && project.lessonsLearned.length > 0 && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToLessons}
                className="hover:border-orange-500 hover:text-orange-500 transition-colors"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Lessons Learned
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild size="sm">
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            )}
            {project.liveUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>

          {/* Tech Stack */}
          <section className="mb-12">
            <h2 className="text-xl font-semibold mb-4">Tech Stack</h2>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-sm px-3 py-1">
                  {tech}
                </Badge>
              ))}
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

          {/* Visuals - Collapsible with Lightbox */}
          {project.visuals && project.visuals.length > 0 && (
            <VisualsSection visuals={project.visuals} projectName={project.name} />
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

        </div>
      </main>
      <Footer />
    </div>
  );
}

// Visuals Section Component with Collapsible and Lightbox
function VisualsSection({ visuals, projectName }: { visuals: string[]; projectName: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const selectedImage = selectedIndex !== null ? visuals[selectedIndex] : null;

  const handleZoomIn = () => setZoom((z) => Math.min(z + 0.25, 3));
  const handleZoomOut = () => setZoom((z) => Math.max(z - 0.25, 0.5));
  const resetZoom = () => setZoom(1);

  const goToNext = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % visuals.length);
      resetZoom();
    }
  }, [selectedIndex, visuals.length]);

  const goToPrev = useCallback(() => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + visuals.length) % visuals.length);
      resetZoom();
    }
  }, [selectedIndex, visuals.length]);

  const closeLightbox = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") goToNext();
      else if (e.key === "ArrowLeft") goToPrev();
      else if (e.key === "Escape") closeLightbox();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedIndex, goToNext, goToPrev, closeLightbox]);

  // Touch/swipe navigation
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goToNext();
    else if (isRightSwipe) goToPrev();

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="mb-12">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button className="flex items-center gap-2 text-xl font-semibold mb-4 hover:text-primary transition-colors">
            <ChevronDown className={`h-5 w-5 transition-transform ${isOpen ? "" : "-rotate-90"}`} />
            Visuals ({visuals.length})
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="grid gap-4 md:grid-cols-2">
            {visuals.map((visual, index) => (
              <div
                key={index}
                className="rounded-lg border overflow-hidden cursor-pointer group relative"
                onClick={() => {
                  setSelectedIndex(index);
                  resetZoom();
                }}
              >
                <img
                  src={visual}
                  alt={`${projectName} visual ${index + 1}`}
                  className="w-full h-auto transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>

      {/* Lightbox Modal */}
      <Dialog open={selectedIndex !== null} onOpenChange={() => closeLightbox()}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 overflow-hidden bg-black/95 border-none">
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 z-10 flex gap-2">
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomOut}
                disabled={zoom <= 0.5}
              >
                <ZoomOut className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={handleZoomIn}
                disabled={zoom >= 3}
              >
                <ZoomIn className="h-4 w-4" />
              </Button>
              <Button
                variant="secondary"
                size="icon"
                onClick={closeLightbox}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>

            {/* Navigation Arrows */}
            {visuals.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={goToPrev}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10"
                  onClick={goToNext}
                >
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </Button>
              </>
            )}

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 text-white/80 text-sm">
              {selectedIndex !== null && `${selectedIndex + 1} / ${visuals.length}`}
            </div>

            {/* Image */}
            <div className="overflow-auto max-w-full max-h-[90vh] p-4">
              {selectedImage && (
                <img
                  src={selectedImage}
                  alt="Full size visual"
                  className="transition-transform duration-200"
                  style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
                />
              )}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

// Helper functions
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
