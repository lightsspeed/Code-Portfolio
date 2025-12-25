import { Cloud, Container, GitBranch, Server, Activity, Terminal } from "lucide-react";

export const skillCategories = [
  {
    name: "Cloud Platforms",
    icon: Cloud,
    skills: ["AWS", "Azure", "Google Cloud Platform"],
  },
  {
    name: "Containers & Orchestration",
    icon: Container,
    skills: ["Docker", "Kubernetes", "Helm", "Docker Compose"],
  },
  {
    name: "CI/CD Tools",
    icon: GitBranch,
    skills: ["GitHub Actions", "GitLab CI", "Jenkins", "ArgoCD"],
  },
  {
    name: "Infrastructure as Code",
    icon: Server,
    skills: ["Terraform", "Ansible"],
  },
  {
    name: "Monitoring & Logging",
    icon: Activity,
    skills: ["Prometheus", "Grafana Stack", "Alert Manager", ],
  },
  {
    name: "Scripting & Languages",
    icon: Terminal,
    skills: ["Python", "Bash"],
  },
];
