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
    mediumUrl:"https://medium.com/@akhileshchoure1/building-scalable-ci-cd-pipelines-with-github-actions-from-basics-to-pro-tips-6b57f2ac554a"
  },

  {
    id: "2",
    title: "When to Use Python vs. Bash for DevOps Scripting",
    excerpt:
      "An in-depth comparison of Python and Bash for DevOps tasks, covering use cases, performance, maintainability, and community support to help you choose the right tool for your scripts.",
    date: "2025-04-27",
    readTime: "6 min read",
    tags: ["Scripting"],
    slug: "python-vs-bash-devops",
    mediumUrl:"https://medium.com/@akhileshchoure1/when-to-use-python-vs-bash-for-devops-scripting-772ab12ebda3"
  },

  {
    id: "3",
    title: "How to SSH into Your AWS EC2 Instance and Develop Directly in VS Code: A Complete Guide",
    excerpt:
      "Step-by-step instructions on setting up SSH access to your AWS EC2 instance and configuring Visual Studio Code for remote development, enhancing your workflow and productivity.",
    date: "2026-01-03",
    readTime: "3 min read",
    tags: ["AWS", "EC2", "VS Code", "Remote Development"],
    slug: "ssh-aws-ec2-vscode",
    mediumUrl:"https://medium.com/@akhileshchoure1/how-to-ssh-into-your-aws-ec2-instance-and-develop-directly-in-vs-code-a-complete-guide-3cedf924a276"
  }

];
