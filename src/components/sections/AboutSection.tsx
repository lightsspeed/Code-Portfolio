import { profile } from "@/data/profile";
import { MapPin, Briefcase, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className="py-20"
      aria-labelledby="about-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-3xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <h2
            id="about-heading"
            className="text-2xl font-bold tracking-tight mb-8"
          >
            About
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8">
            {profile.bio}
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin
                className="h-5 w-5 mt-0.5 text-muted-foreground"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm text-muted-foreground">Location</p>
                <p className="font-medium">{profile.location}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Briefcase
                className="h-5 w-5 mt-0.5 text-muted-foreground"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm text-muted-foreground">Experience</p>
                <p className="font-medium">{profile.yearsOfExperience}+ Years</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Target
                className="h-5 w-5 mt-0.5 text-muted-foreground"
                strokeWidth={1.5}
              />
              <div>
                <p className="text-sm text-muted-foreground">Focus</p>
                <p className="font-medium">{profile.focusAreas[0]}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-3">Key Focus Areas</p>
            <div className="flex flex-wrap gap-2">
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
      </div>
    </section>
  );
}
