import { Cloud, Container, GitBranch, Server, Activity, Terminal } from "lucide-react";

export const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud Platform", "DigitalOcean"],
  },
  {
    name: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
  },
  {
    name: "CI/CD Tools",
    icon: GitBranch,
    skills: ["Jenkins", "GitLab CI", "GitHub Actions", "ArgoCD"],
  },
  {
    name: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform", "Ansible", "CloudFormation", "Pulumi"],
  },
  {
    name: "Monitoring & Logging",
    icon: Activity,
    skills: ["Prometheus", "Grafana", "ELK Stack", "Datadog"],
  },
  {
    name: "Scripting & Languages",
    icon: Terminal,
    skills: ["Python", "Bash", "Go", "PowerShell"],
  },
];
