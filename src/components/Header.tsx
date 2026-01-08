import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#projects", label: "Projects" },
  { href: "/blogs", label: "Blog" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHashNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const hash = href.split("#")[1];
    
    if (location.pathname === "/") {
      // Already on home page, just scroll to element
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-200",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="text-lg font-semibold flex items-center gap-2">
            {profile.name}
            <span className="flex flex-col h-4 w-6 rounded-sm overflow-hidden shadow-sm">
              <span className="h-1/3 bg-orange-500"></span>
              <span className="h-1/3 bg-white flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full border border-blue-900"></span>
              </span>
              <span className="h-1/3 bg-green-600"></span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
          {navLinks.map((link) =>
              link.href.startsWith("/") && !link.href.includes("#") ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ) : link.href.includes("#") ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleHashNavigation(e, link.href)}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              )
            )}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <Menu className="h-5 w-5" strokeWidth={1.5} />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            className="md:hidden py-4 border-t border-border"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) =>
                link.href.startsWith("/") && !link.href.includes("#") ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : link.href.includes("#") ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      handleHashNavigation(e, link.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="py-2 text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="py-2 text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
