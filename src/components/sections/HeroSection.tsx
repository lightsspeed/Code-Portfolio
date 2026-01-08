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
          <div className="mb-6">
            <img
              src={profilePhoto}
              alt={`${profile.name} profile photo`}
              className="w-36 h-36 md:w-40 md:h-40 rounded-full border-2 border-border object-cover mx-auto"
            />
          </div>

          {/* Introduction */}
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-3">
            {profile.name}
          </h1>
          <p className="text-xl text-muted-foreground mb-2">{profile.title}</p>
          <p className="text-muted-foreground max-w-xl mx-auto mb-6">
            {profile.shortBio}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
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
          <div className="flex justify-center gap-4 mb-10">
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

          {/* About Info Cards */}
          <div className="grid sm:grid-cols-3 gap-4 text-left mb-8">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
              <MapPin className="h-5 w-5 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
              <Briefcase className="h-5 w-5 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-medium">{profile.yearsOfExperience}+ Years</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-secondary/30">
              <Target className="h-5 w-5 mt-0.5 text-muted-foreground" strokeWidth={1.5} />
              <div>
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="font-medium">{profile.focusAreas[0]}</p>
              </div>
            </div>
          </div>

          {/* Focus Areas */}
          <div className="flex flex-wrap justify-center gap-2">
            {profile.focusAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
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