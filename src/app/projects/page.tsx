"use client"

import { useState } from "react"
import { projects, type Project } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { AnimatedSection } from "@/components/AnimatedSection"

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)))

export default function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null)

  const filtered: Project[] = activeTag
    ? projects.filter((p) => p.tags.includes(activeTag))
    : projects

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <AnimatedSection>
        <section className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Projects
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Things I&apos;ve built, broken, and rebuilt — sometimes on purpose.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTag(null)}
            className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
              activeTag === null
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag === activeTag ? null : tag)}
              className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors ${
                activeTag === tag
                  ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="py-12 text-center text-zinc-500 dark:text-zinc-400">
            No projects match this filter.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>
        )}
      </AnimatedSection>
    </div>
  )
}
