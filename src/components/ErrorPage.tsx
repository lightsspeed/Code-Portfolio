import { Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  code: 404 | 500;
  title?: string;
  message?: string;
}

const ErrorPage = ({ code, title, message }: ErrorPageProps) => {
  const defaultContent = {
    404: {
      title: "Page Not Found",
      message: "The page you're looking for doesn't exist or has been moved.",
    },
    500: {
      title: "Server Error",
      message: "Something went wrong on our end. Please try again later.",
    },
  };

  const content = {
    title: title || defaultContent[code].title,
    message: message || defaultContent[code].message,
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-8xl font-bold text-primary mb-4">{code}</h1>
        <h2 className="text-2xl font-semibold text-foreground mb-2">
          {content.title}
        </h2>
        <p className="text-muted-foreground mb-8">{content.message}</p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <a href="/">
              <Home className="mr-2 h-4 w-4" />
              Go Home
            </a>
          </Button>
          {code === 500 && (
            <Button variant="outline" onClick={() => window.location.reload()}>
              <RefreshCw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
