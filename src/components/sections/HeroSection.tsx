import { Download } from "lucide-react";
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
      className="py-16 md:py-24 pt-24 md:pt-28"
      aria-label="Introduction"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          {/* Photo and Intro */}
          <div className="flex items-start gap-6 mb-8">
            <img
              src={profilePhoto}
              alt={`${profile.name} profile photo`}
              className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-border object-cover shrink-0"
            />
            <div>
              <p className="text-muted-foreground mb-1">Hello World,</p>
              <h1 className="text-2xl md:text-4xl font-bold tracking-tight">
                I'm {profile.name}
              </h1>
            </div>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-lg leading-relaxed mb-6 max-w-2xl">
            {profile.bio}
          </p>

          {/* Resume Button */}
          <Button variant="outline" size="sm" asChild>
            <a href={profile.resumeUrl} download>
              <Download className="mr-2 h-4 w-4" strokeWidth={1.5} />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}