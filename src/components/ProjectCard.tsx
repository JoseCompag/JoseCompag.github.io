"use client"

import { motion } from "framer-motion"
import { GitBranch } from "lucide-react"
import Link from "next/link"
import type { Project } from "@/data/projects"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="group rounded-2xl border border-zinc-200 bg-white p-6 transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
    >
      <div className="mb-4 flex items-center gap-2">
        <div className="size-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <div className="size-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
        <div className="size-3 rounded-full bg-zinc-300 dark:bg-zinc-600" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        {project.title}
      </h3>

      <p className="mb-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {project.description}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3">
        {project.github && (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
          >
            <GitBranch size={16} />
            Source
          </Link>
        )}
      </div>
    </motion.article>
  )
}
