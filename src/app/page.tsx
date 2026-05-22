import Link from "next/link"
import { ArrowRight, Cpu, GitBranch, TestTube } from "lucide-react"
import { projects } from "@/data/projects"
import { ProjectCard } from "@/components/ProjectCard"
import { AnimatedSection } from "@/components/AnimatedSection"

const highlights = [
  {
    icon: Cpu,
    title: "Distributed Systems",
    desc: "Fault-tolerant protocols, leader election, Two-Phase Commit — built from scratch with gRPC and Protocol Buffers.",
  },
  {
    icon: GitBranch,
    title: "Compilers & Languages",
    desc: "Full compiler pipeline: Lex + Yacc → x86 assembly. Custom languages with formal grammar specifications.",
  },
  {
    icon: TestTube,
    title: "Software Testing",
    desc: "Mutation testing, property-based testing, logic coverage — rigorous methodologies for reliable code.",
  },
]

export default function Home() {
  const featured = projects.slice(0, 3)

  return (
    <div className="mx-auto max-w-5xl px-6">
      <AnimatedSection>
        <section className="flex min-h-[70vh] flex-col justify-center py-20">
          <span className="mb-4 inline-block rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
            Computer Analyst & CS Candidate
          </span>
          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              José
            </span>
            .
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Computer Analyst at UNRC with strong foundations in distributed
            systems, compilers, and software testing. I build clean,
            well-tested, maintainable code.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              View projects
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-6 py-3 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
            >
              Get in touch
            </Link>
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <h2 className="mb-2 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            What I do
          </h2>
          <p className="mb-10 text-zinc-600 dark:text-zinc-400">
            Areas I&apos;ve explored deeply through academic projects.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800"
                >
                  <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                    <Icon size={20} className="text-zinc-700 dark:text-zinc-300" />
                  </div>
                  <h3 className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {item.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="py-20">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                Featured projects
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400">
                A selection of things I&apos;ve built at university and beyond.
              </p>
            </div>
            <Link
              href="/projects"
              className="hidden items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 sm:flex"
            >
              View all
              <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} />
            ))}
          </div>

          <div className="mt-8 flex justify-center sm:hidden">
            <Link
              href="/projects"
              className="inline-flex items-center gap-1 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
            >
              View all projects
              <ArrowRight size={14} />
            </Link>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}
