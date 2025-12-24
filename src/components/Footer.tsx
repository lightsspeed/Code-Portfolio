import { Mail } from "lucide-react";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail className="h-4 w-4" strokeWidth={1.5} />
            <span className="text-sm">{profile.email}</span>
          </a>
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} All rights reserved. Built with React + TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
}
