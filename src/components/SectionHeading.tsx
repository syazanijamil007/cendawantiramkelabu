import { Sprout } from "lucide-react";
import Link from "next/link";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  dark?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
}: SectionHeadingProps) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : "text-left"} max-w-2xl`}>
      {eyebrow && (
        <span
          className={`chip mb-4 ${
            dark ? "bg-white/10 text-brand-green" : "bg-brand-mint text-forest-700"
          }`}
        >
          <Sprout className="h-4 w-4" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${
          dark ? "text-white" : "text-brand-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? "text-white/75" : "text-brand-muted"}`}>
          {description}
        </p>
      )}
      {align === "center" && !description && <span className="mx-auto mt-4 block h-1.5 w-16 rounded-full bg-brand-green" />}
      {align === "left" && !description && <span className="mt-4 block h-1.5 w-16 rounded-full bg-brand-green" />}
    </div>
  );
}
