"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  BookOpen,
  ShieldAlert,
  GitBranch,
  FileWarning,
  PencilRuler,
} from "lucide-react";

const docs = [
  {
    title: ".github Documentation Guide",
    description:
      "Overview of community health files and their purpose in ForgeX.",
    href: "https://github.com/ForgeXFoundation/.github/blob/main/README.md",
    icon: BookOpen,
  },
  {
    title: "Contribution Guidelines",
    description:
      "Learn how to contribute effectively to ForgeX Foundation projects.",
    href: "https://github.com/ForgeXFoundation/.github/blob/main/CONTRIBUTING.md",
    icon: GitBranch,
  },
  {
    title: "Code of Conduct",
    description:
      "Expected behavior for all contributors across the ForgeX community.",
    href: "https://github.com/ForgeXFoundation/.github/blob/main/CODE_OF_CONDUCT.md",
    icon: ShieldAlert,
  },
  {
    title: "Security Policy",
    description: "Report vulnerabilities responsibly and securely.",
    href: "https://github.com/ForgeXFoundation/.github/blob/main/SECURITY.md",
    icon: FileWarning,
  },
  {
    title: "ssue & PR Templates",
    description:
      "Standard templates for submitting bug reports, features, and pull requests.",
    href: "https://github.com/ForgeXFoundation/.github/tree/main/issue_template",
    icon: PencilRuler,
  },
];

export default function DocsPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-14"
      >
        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-balance">
          ForgeX Documentation
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mx-auto max-w-2xl text-balance">
          Explore the guidelines, templates, and policies that help ForgeX
          Foundation run smoothly across all projects and contributors.
        </p>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {docs.map(({ title, description, href, icon: Icon }) => (
          <Link
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group border border-border hover:shadow-md transition-all duration-200 rounded-xl p-5 bg-background flex items-start gap-4"
          >
            <div className="mt-1 text-primary">
              <Icon className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-lg font-semibold group-hover:underline">
                {title}
              </h2>
              <p className="text-muted-foreground text-sm">{description}</p>
            </div>
          </Link>
        ))}
      </div>
          <div className="flex flex-col items-center justify-center mt-20 space-y-6 text-center">
              <div className="max-w-2xl">
                  <h2 className="text-2xl font-semibold text-foreground">Need More Help?</h2>
                  <p className="text-muted-foreground text-base mt-2">
                      If you have questions or need assistance, feel free to reach out via our community channels.
                  </p>
              </div>

              <div className="max-w-xl pt-10">
                  <p className="text-sm text-muted-foreground">
                      All documents are maintained in our{" "}
                      <Link
                          href="https://github.com/ForgeXFoundation/.github"
                          target="_blank"
                          className="underline underline-offset-2 text-primary"
                      >
                          official .github repository
                      </Link>
                      .
                  </p>
              </div>
          </div>



    </main>
  );
}
