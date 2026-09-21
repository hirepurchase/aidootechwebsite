import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
      <Image
        src="/logo-mark.png"
        alt=""
        width={248}
        height={250}
        priority
        className={compact ? "h-7 w-auto" : "h-9 w-auto"}
      />
      <span className="flex flex-col leading-none">
        <span className="font-serif text-[1.0625rem] font-semibold tracking-tight text-accent">
          Aidoo Tech
        </span>
        <span className="mt-0.5 text-[0.5625rem] font-semibold uppercase tracking-[0.22em] text-ink-faint">
          Solutions
        </span>
      </span>
    </Link>
  );
}
