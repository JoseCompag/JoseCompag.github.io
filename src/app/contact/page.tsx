import { Mail, MapPin, GitBranch } from "lucide-react"
import NextLink from "next/link"
import { ContactForm } from "@/components/ContactForm"
import { AnimatedSection } from "@/components/AnimatedSection"
import { profile } from "@/data/profile"

export default function Contact() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <AnimatedSection>
        <section className="mb-12">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Get in touch
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
            Looking for a Junior Developer who writes clean, tested code? Let&apos;s
            talk.
          </p>
        </section>
      </AnimatedSection>

      <div className="grid gap-12 lg:grid-cols-5">
        <AnimatedSection className="lg:col-span-3">
          <ContactForm />
        </AnimatedSection>

        <AnimatedSection className="lg:col-span-2">
          <aside className="space-y-8 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800">
            <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              Contact info
            </h2>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500 dark:text-zinc-400"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Email
                  </p>
                  <a
                    href={`mailto:${profile.email}`}
                    className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500 dark:text-zinc-400"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    Location
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {profile.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <GitBranch
                  size={18}
                  className="mt-0.5 shrink-0 text-zinc-500 dark:text-zinc-400"
                />
                <div>
                  <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                    GitHub
                  </p>
                  <NextLink
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-600 underline underline-offset-2 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
                  >
                    {profile.github.replace("https://", "")}
                  </NextLink>
                </div>
              </div>
            </div>

            <div className="border-t border-zinc-200 pt-6 dark:border-zinc-800">
              <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Actively seeking a Junior Full-Stack or Backend Developer role.
                Available for opportunities starting immediately.
              </p>
            </div>
          </aside>
        </AnimatedSection>
      </div>
    </div>
  )
}
