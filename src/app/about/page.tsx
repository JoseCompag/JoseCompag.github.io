import { skills } from "@/data/skills"
import { experiences } from "@/data/experience"
import { profile } from "@/data/profile"
import { SkillBadge } from "@/components/SkillBadge"
import { ExperienceTimeline } from "@/components/ExperienceTimeline"
import { AnimatedSection } from "@/components/AnimatedSection"

export default function About() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <AnimatedSection>
        <section className="mb-20">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            About me
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;m a Computer Analyst and Bachelor&apos;s in Computer Science
            candidate at UNRC with strong academic foundations across software
            engineering, algorithms, distributed systems, and simulation.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            I&apos;ve built real projects applying Two-Phase Commit, leader
            election, compiler construction, adversarial search (MiniMax), OO
            design patterns, TDD, and DEVS-formalism simulation. Skilled in Java,
            Python, C, and React.
          </p>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Actively seeking a Junior Full-Stack or Backend Developer role to
            contribute meaningfully in a collaborative team.
          </p>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section className="mb-20">
          <h2 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Skills & tools
          </h2>
          <div className="flex flex-wrap gap-2.5">
            {skills.map((skill, i) => (
              <SkillBadge key={skill.name} skill={skill} index={i} />
            ))}
          </div>
        </section>
      </AnimatedSection>

      <AnimatedSection>
        <section>
          <h2 className="mb-8 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <ExperienceTimeline experiences={experiences} />
        </section>
      </AnimatedSection>
    </div>
  )
}
