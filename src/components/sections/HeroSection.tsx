import { Download, Github, Linkedin, Mail } from "lucide-react";
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
      id="about"
      className="py-12 md:py-16 pt-20 md:pt-24"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "flex flex-col items-center text-center opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Photo */}
          <img
            src={profilePhoto}
            alt={`${profile.name} profile photo`}
            className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-border object-cover mb-6"
          />

          {/* Intro */}
          <p className="text-muted-foreground mb-1">Hello World,</p>
          <h1 className="text-2xl md:text-4xl font-bold tracking-tight mb-4">
            I'm {profile.name}
          </h1>

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-xl text-justify">
            {profile.bio}
          </p>

          {/* Resume Button */}
          <Button variant="outline" size="sm" asChild>
            <a href={profile.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Download Resume
            </a>
          </Button>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-6">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" strokeWidth={1.5} />
            </a>
            <a
              href={profile.social.email}
              className="text-muted-foreground hover:text-foreground transition-colors"
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