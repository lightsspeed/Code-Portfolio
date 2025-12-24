export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: "infrastructure" | "automation" | "monitoring" | "security" | "cicd";
  githubUrl?: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    id: "1",
    name: "K8s Cluster Autoscaler",
    description:
      "Custom Kubernetes autoscaler that optimizes cluster resources based on workload patterns and cost efficiency.",
    techStack: ["Kubernetes", "Go", "Prometheus", "AWS"],
    category: "infrastructure",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    name: "GitOps Pipeline Framework",
    description:
      "End-to-end GitOps implementation using ArgoCD with automated rollbacks and multi-environment support.",
    techStack: ["ArgoCD", "Helm", "GitHub Actions", "Terraform"],
    category: "automation",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "3",
    name: "Infrastructure Monitoring Stack",
    description:
      "Comprehensive monitoring solution with custom dashboards, alerting rules, and incident management integration.",
    techStack: ["Prometheus", "Grafana", "Alertmanager", "PagerDuty"],
    category: "monitoring",
    githubUrl: "https://github.com",
  },
  {
    id: "4",
    name: "Terraform Module Library",
    description:
      "Reusable Terraform modules for AWS infrastructure including VPC, EKS, RDS, and security configurations.",
    techStack: ["Terraform", "AWS", "Python", "Terratest"],
    category: "infrastructure",
    githubUrl: "https://github.com",
  },
  {
    id: "5",
    name: "Secret Management System",
    description:
      "Centralized secrets management using HashiCorp Vault with automated rotation and audit logging.",
    techStack: ["Vault", "Kubernetes", "Terraform", "Python"],
    category: "security",
    githubUrl: "https://github.com",
  },
  {
    id: "6",
    name: "CI Pipeline Optimizer",
    description:
      "Tool that analyzes CI pipelines and suggests optimizations for faster build times and reduced costs.",
    techStack: ["Python", "GitHub Actions", "Docker", "PostgreSQL"],
    category: "automation",
    githubUrl: "https://github.com",
  },
  {
    id: "7",
    name: "Multi-Cloud CI/CD Platform",
    description:
      "Unified CI/CD platform supporting deployments across AWS, Azure, and GCP with centralized pipeline management.",
    techStack: ["Jenkins", "Terraform", "Docker", "Kubernetes"],
    category: "cicd",
    githubUrl: "https://github.com",
  },
  {
    id: "8",
    name: "GitHub Actions Workflow Library",
    description:
      "Reusable GitHub Actions workflows for testing, building, and deploying applications with best practices.",
    techStack: ["GitHub Actions", "YAML", "Docker", "Node.js"],
    category: "cicd",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    id: "9",
    name: "GitLab CI Pipeline Templates",
    description:
      "Standardized GitLab CI templates for microservices with automated testing, security scanning, and deployment.",
    techStack: ["GitLab CI", "Docker", "Kubernetes", "Trivy"],
    category: "cicd",
    githubUrl: "https://github.com",
  },
];

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "automation", label: "Automation" },
  { value: "monitoring", label: "Monitoring" },
  { value: "security", label: "Security" },
  { value: "cicd", label: "CI/CD" },
];
