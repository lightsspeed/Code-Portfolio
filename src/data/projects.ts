import { Monitor } from "lucide-react";

export type Project = {
  id: string;
  name: string;
  description: string;
  techStack: string[];
  category: "infrastructure" | "automation" | "monitoring" | "security" | "cicd" | "serverless";
  githubUrl?: string;
  liveUrl?: string;
  architectureUrl?: string;
  // Documentation fields 
  hook?: string;
  problem?: string;
  solution?: string;
  keyFeatures?: string[];
  lessonsLearned?: string[];
  visuals?: string[];
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
    architectureUrl: "https://example.com/architecture",
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
    architectureUrl: "https://example.com/architecture",
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
    architectureUrl: "https://example.com/architecture",
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
  {
  id: "10",
  name: "AWS Static Portfolio Hosting",
  description:
    "Production Grade, Secure static website on AWS using Terraform: private S3 buckets, CloudFront CDN with OAC, Route53 custom domain, ACM HTTPS, and automated GitHub Actions deployment.",
  techStack: ["Terraform", "AWS", "S3", "CloudFront", "Route53", "ACM", "GitHub Actions", "Bash"],
  category: "infrastructure",
  githubUrl: "https://github.com/lightsspeed/Infra-Portfolio",
  liveUrl: "https://deployone.cloud",
  architectureUrl: "https://github.com/lightsspeed/Infra-Portfolio/blob/main/Assets/Infra-Portfolio.png"
},
{
  id: "11",
  name: "QR Code Generator on AWS Lambda, AWS API Gateway and AWS Amplify",
  description:
    "Serverless QR Code Generator using AWS Lambda, API Gateway, and Amplify: Generates QR codes on-demand with a user-friendly web interface, leveraging serverless architecture for scalability and cost-efficiency.",
  techStack: ["AWS Lambda", "API Gateway", "AWS Amplify", "Python","Javascript", "CICD"],
  category: "serverless",
  githubUrl: "https://github.com/lightsspeed/QR_Lambda",
  liveUrl: "https://qr.deployone.cloud",
  architectureUrl: "public/Architecture/QRCode.png",
  // Add these optional fields for richer detail pages:
  hook: "Generate QR codes instantly with our serverless solution!",
  problem: "Need a quick and easy way to generate QR codes without managing servers?",
  solution: "Leverage AWS Lambda and API Gateway to create a scalable, on-demand QR code generator with a simple web interface using AWS Amplify.",
  keyFeatures: ["Instant QR code generation", "Serverless architecture", "Web interface"],
  lessonsLearned: ["Serverless architecture simplifies deployment and scaling.", "AWS services can be seamlessly integrated for rapid development.", "Cost efficiency is achieved by paying only for what you use.", "Importance of security best practices in serverless applications.", "Monitoring and logging are crucial for debugging and performance tracking.","AWS Amplify accelerates front-end development with built-in hosting and CI/CD."],
  visuals: ["/path/to/screenshot1.png", "/path/to/screenshot2.png"]

}

];

export const projectCategories = [
  { value: "all", label: "All" },
  { value: "infrastructure", label: "Infrastructure" },
  { value: "automation", label: "Automation" },
  { value: "monitoring", label: "Monitoring" },
  { value: "security", label: "Security" },
  { value: "cicd", label: "CI/CD" },
  { value: "serverless", label: "Serverless" }
];

