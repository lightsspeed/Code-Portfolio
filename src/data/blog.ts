export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
  slug: string;
  mediumUrl?: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Scalable CI/CD Pipelines with GitHub Actions",
    excerpt:
      "Learn how to design and implement CI/CD pipelines that scale with your team, including parallel jobs, caching strategies, and reusable workflows.",
    date: "2025-12-31",
    readTime: "3 min read",
    tags: ["CI/CD", "GitHub Actions", "Automation"],
    slug: "scalable-cicd-github-actions",
    mediumUrl:"https://medium.com/p/6b57f2ac554a"
  },
  {
    id: "2",
    title: "Kubernetes Cost Optimization: A Practical Guide",
    excerpt:
      "Discover strategies to reduce your Kubernetes infrastructure costs by up to 40% through right-sizing, spot instances, and cluster autoscaling.",
    date: "2024-01-08",
    readTime: "12 min read",
    tags: ["Kubernetes", "Cost Optimization", "Cloud"],
    slug: "kubernetes-cost-optimization",
  },
  {
    id: "3",
    title: "Infrastructure as Code: Terraform Best Practices",
    excerpt:
      "Essential patterns and anti-patterns for writing maintainable Terraform code, including module design, state management, and testing strategies.",
    date: "2023-12-20",
    readTime: "10 min read",
    tags: ["Terraform", "IaC", "Best Practices"],
    slug: "terraform-best-practices",
  },
  {
    id: "4",
    title: "Observability in Modern Microservices",
    excerpt:
      "A deep dive into implementing comprehensive observability with distributed tracing, metrics, and structured logging using OpenTelemetry.",
    date: "2023-12-10",
    readTime: "15 min read",
    tags: ["Observability", "Monitoring", "Microservices"],
    slug: "observability-microservices",
  },
];
