import { Code2, Link as LinkIcon, Globe } from "lucide-react"
import NextLink from "next/link"
import { profile } from "@/data/profile"

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>

        <div className="flex items-center gap-3">
          <NextLink
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="GitHub"
          >
            <Code2 size={18} />
          </NextLink>
          <NextLink
            href="https://linkedin.com/in/jose-ignacio-cb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="LinkedIn"
          >
            <LinkIcon size={18} />
          </NextLink>
          <NextLink
            href="mailto:joseic2000@gmail.com"
            className="rounded-full p-2 text-zinc-500 transition-colors hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
            aria-label="Email"
          >
            <Globe size={18} />
          </NextLink>
        </div>
      </div>
    </footer>
  )
}
