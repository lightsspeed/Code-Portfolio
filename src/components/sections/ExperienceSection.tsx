import { experiences, certifications } from "@/data/experience";
import { Award, ExternalLink } from "lucide-react";

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-20 bg-secondary/30"
      aria-labelledby="experience-heading"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            id="experience-heading"
            className="text-2xl font-bold tracking-tight mb-8"
          >
            Experience
          </h2>

          {/* Timeline */}
          <div className="space-y-8 mb-12">
            {experiences.map((exp, index) => (
              <article
                key={exp.id}
                className="relative pl-6 border-l border-border"
              >
                <div
                  className="absolute left-0 top-1.5 w-2 h-2 -translate-x-1/2 rounded-full bg-foreground"
                  aria-hidden="true"
                />
                <div className="mb-2">
                  <h3 className="font-medium">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground">
                    {exp.company} · {exp.startDate} – {exp.endDate}
                  </p>
                </div>
                <ul className="space-y-1">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {achievement}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-lg font-medium mb-4 flex items-center gap-2">
              <Award className="h-5 w-5" strokeWidth={1.5} />
              Certifications
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {certifications.map((cert) => (
                <div
                  key={cert.id}
                  className="p-4 bg-card rounded-lg border border-border"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium text-sm">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Verify ${cert.name} credential`}
                      >
                        <ExternalLink className="h-4 w-4" strokeWidth={1.5} />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
