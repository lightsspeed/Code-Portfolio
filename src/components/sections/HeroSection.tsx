import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";
import profilePhoto from "@/assets/profile-photo.png";

export function HeroSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto text-center opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Avatar */}
          <div className="mb-8">
            <img
              src={profilePhoto}
              alt={`${profile.name} profile photo`}
              className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-border object-cover mx-auto"
            />
          </div>

          {/* Introduction */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">{profile.title}</p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {profile.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button asChild>
              <a href="#projects">View Projects</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile.resumeUrl} download>
                <Download className="mr-2 h-4 w-4" strokeWidth={1.5} />
                Download Resume
              </a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={profile.social.email}
              className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
