"use client"

import { motion } from "framer-motion"
import type { Experience } from "@/data/experience"

interface ExperienceTimelineProps {
  experiences: Experience[]
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-[11px] top-2 h-[calc(100%-16px)] w-0.5 bg-zinc-200 dark:bg-zinc-800" />

      <div className="space-y-10">
        {experiences.map((exp, i) => (
          <motion.div
            key={`${exp.institution}-${exp.period}`}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-1.5 size-6 rounded-full border-2 border-zinc-300 bg-white dark:border-zinc-600 dark:bg-zinc-900">
              <div className="mt-[3px] ml-[3px] size-[14px] rounded-full bg-zinc-400 dark:bg-zinc-500" />
            </div>

            <span className="mb-1 block text-sm font-medium text-zinc-500 dark:text-zinc-400">
              {exp.period}
            </span>

            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {exp.title}
            </h3>

            <p className="mb-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
              {exp.institution}
            </p>

            <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
