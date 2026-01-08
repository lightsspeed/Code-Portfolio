import { Github, Linkedin, Mail, Download, MapPin, Briefcase, Target } from "lucide-react";
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
      className="py-24 md:py-32 pt-28 md:pt-36"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-4xl opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12 mb-10">
            {/* Avatar */}
            <div className="shrink-0">
              <img
                src={profilePhoto}
                alt={`${profile.name} profile photo`}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-2 border-border object-cover shadow-xl"
              />
            </div>

            {/* Introduction */}
            <div className="flex-1">
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2">
                {profile.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-3">{profile.title}</p>
              <p className="text-muted-foreground max-w-lg mb-5">
                {profile.shortBio}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-3 mb-5">
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
              <div className="flex gap-3">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  aria-label="GitHub profile"
                >
                  <Github className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  aria-label="LinkedIn profile"
                >
                  <Linkedin className="h-5 w-5" strokeWidth={1.5} />
                </a>
                <a
                  href={profile.social.email}
                  className="p-2 text-muted-foreground hover:text-foreground hover:bg-secondary/50 rounded-lg transition-all"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>

          {/* About Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm">
              <MapPin className="h-5 w-5 mt-0.5 text-primary/80" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm">
              <Briefcase className="h-5 w-5 mt-0.5 text-primary/80" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Experience</p>
                <p className="font-medium">{profile.yearsOfExperience}+ Years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-xl bg-secondary/40 border border-border/50 backdrop-blur-sm">
              <Target className="h-5 w-5 mt-0.5 text-primary/80" strokeWidth={1.5} />
              <div>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">Focus</p>
                <p className="font-medium">{profile.focusAreas[0]}</p>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-wrap gap-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1.5 text-sm bg-secondary/60 text-secondary-foreground rounded-full border border-border/50"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}