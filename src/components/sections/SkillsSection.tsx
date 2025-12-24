import { skillCategories } from "@/data/skills";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { cn } from "@/lib/utils";

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="skills"
      className="py-20 bg-secondary/30"
      aria-labelledby="skills-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div
          className={cn(
            "max-w-5xl mx-auto opacity-0",
            isVisible && "animate-fade-in-up"
          )}
        >
          <h2
            id="skills-heading"
            className="text-2xl font-bold tracking-tight mb-8"
          >
            Skills
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div
                  key={category.name}
                  className="p-6 rounded-lg card-glow gradient-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon
                      className="h-5 w-5 text-muted-foreground"
                      strokeWidth={1.5}
                    />
                    <h3 className="font-medium">{category.name}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm text-muted-foreground"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
