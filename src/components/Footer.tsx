export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {currentYear} All rights reserved. Built with React + TypeScript
        </p>
      </div>
    </footer>
  );
}
