"use client";
// Top bar (logo, desktop nav, SL/HL toggle, stars, profile menu), optional provisional banner,
// and persistent bottom navigation dock across ALL screen sizes (mobile, iPad & desktop).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { rankFor } from "@/lib/learning";
import { addDaysISO, todayISO } from "@/lib/dates";
import { SUBJECT } from "@/lib/subject";

const NAV = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/topics", label: "Topics", icon: "📚" },
  { href: "/cram", label: "Cram", icon: "🚨" },
  { href: "/ia", label: "IA", icon: "🧪" },
  { href: "/exam", label: "Mocks", icon: "📝" },
  { href: "/daily", label: "Daily 5", icon: "🎯" },
  { href: "/review", label: "Review", icon: "🔁" },
  { href: "/progress", label: "Progress", icon: "📈" },
];

const DESKTOP_NAV = [
  { href: "/topics", label: "Topics" },
  { href: "/vocab", label: "🗣️ Vocab" },
  { href: "/cram", label: "🚨 Cram" },
  { href: "/formulas", label: `${SUBJECT.vaultIcon} ${SUBJECT.vaultShort}` },
  { href: "/ia", label: `🎙️ ${SUBJECT.iaNavLabel}` },
  { href: "/exam", label: `📝 ${SUBJECT.examShort}` },
  { href: "/sprint", label: "⚡ Sprint" },
];

function active(path: string, href: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export function SiteHeader() {
  const { data, activeProfile, mode, account, accountsAvailable, ibLevel, setIbLevel, switchProfile, logout, leaveGuest } = useStore();
  const path = usePathname() ?? "/";
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;
  const menuRef = useRef<HTMLDivElement>(null);
  const { rank } = rankFor(data.stars);
  const streak = data.streak;
  const streakLive = streak.count > 1 && (streak.last === todayISO() || streak.last === addDaysISO(-1));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenAt(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="no-print sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-2 px-3 sm:gap-3 sm:px-4">
        <Link href="/" className="flex shrink-0 items-center gap-2 font-black tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-lg text-white" aria-hidden>
            {SUBJECT.icon}
          </span>
          <span className="hidden sm:inline">{SUBJECT.shortName}</span>
        </Link>

        <nav className="ml-1 hidden items-center gap-0.5 lg:flex" aria-label="Main">
          {DESKTOP_NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`whitespace-nowrap rounded-lg px-2 py-1.5 text-sm font-bold ${active(path, n.href) ? "bg-brand-soft text-brand" : "text-ink-2 hover:bg-surface-2"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1.5 sm:gap-2">
          <div className="inline-flex shrink-0 items-center rounded-full border border-line bg-surface-2 p-0.5 text-xs font-extrabold" role="group" aria-label="IB Diploma level">
            {(["SL", "HL"] as const).map((lvl) => (
              <button
                key={lvl}
                type="button"
                aria-pressed={ibLevel === lvl}
                onClick={() => setIbLevel(lvl)}
                className={`rounded-full px-2 py-1 transition-colors ${ibLevel === lvl ? "bg-brand text-brand-ink" : "text-ink-2 hover:text-ink"}`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <Link href="/formulas" className="chip border-brand/30 bg-brand-soft text-brand text-xs sm:text-sm lg:hidden" title={SUBJECT.vaultTitle} aria-label={SUBJECT.vaultShort}>
            <span aria-hidden>{SUBJECT.vaultIcon}</span>
            <span className="hidden sm:inline">{SUBJECT.vaultShort}</span>
          </Link>

          <Link href="/progress" className="chip text-xs sm:text-sm" title={`${rank.name} · ${data.stars} stars`}>
            ⭐ {data.stars}
          </Link>

          {streakLive ? (
            <span className="chip hidden text-sm sm:inline-flex" title="Days in a row">
              🔥 {streak.count}
            </span>
          ) : null}

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpenAt(open ? null : path)}
              aria-expanded={open}
              aria-haspopup="menu"
              aria-label={`${activeProfile?.name ?? "Vanishree"} menu`}
              className="flex h-10 items-center gap-1 rounded-xl px-1.5 hover:bg-surface-2 sm:px-2"
            >
              <span className="text-xl sm:text-2xl" aria-hidden>
                {activeProfile?.avatar ?? SUBJECT.icon}
              </span>
              <span className="hidden max-w-[7rem] truncate text-sm font-bold sm:inline">{activeProfile?.name ?? "Vanishree"}</span>
            </button>

            {open ? (
              <div role="menu" className="card absolute right-0 top-12 z-40 w-64 p-2 text-sm">
                <div className="px-3 py-2 text-xs text-ink-2">
                  {mode === "guest" ? "Local iPad/device mode — saved automatically" : `${account?.name ?? ""} family`}
                  <span className="mt-0.5 block font-bold text-brand">Viewing: IB {ibLevel} syllabus</span>
                </div>
                <Link role="menuitem" href="/vocab" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  🗣️ Vocab &amp; Verb Hub (1,000+)
                </Link>
                <Link role="menuitem" href="/cram" className="block rounded-lg px-3 py-2 font-bold text-bad hover:bg-surface-2">
                  🚨 Custom Exam Cram Sheet
                </Link>
                <Link role="menuitem" href="/formulas" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  {SUBJECT.vaultIcon} {SUBJECT.vaultShort}
                </Link>
                <Link role="menuitem" href="/ia" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  🎙️ {SUBJECT.iaTitle}
                </Link>
                <Link role="menuitem" href="/exam" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  📝 {SUBJECT.examShort}
                </Link>
                <Link role="menuitem" href="/skills" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  🧩 Skills &amp; Procedural Drills
                </Link>
                <Link role="menuitem" href="/sprint" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  ⚡ 60s Fluency Sprint
                </Link>
                <Link role="menuitem" href="/watch" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  🎬 Watch Hub (Phase C)
                </Link>
                {mode === "cloud" ? (
                  <>
                    <hr className="my-1 border-line" />
                    <Link role="menuitem" href="/parent" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                      👨‍👩‍👧 Parent dashboard
                    </Link>
                    {account && account.profiles.length > 1 ? (
                      <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={switchProfile}>
                        🔄 Switch learner
                      </button>
                    ) : null}
                    <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={() => void logout()}>
                      🚪 Sign out
                    </button>
                  </>
                ) : accountsAvailable ? (
                  <>
                    <hr className="my-1 border-line" />
                    <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={leaveGuest}>
                      ☁️ Sign in / create account
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
      {SUBJECT.provisionalBanner ? (
        <div className="border-t border-warn/30 bg-warn-soft px-3 py-1.5 text-center text-xs font-bold text-warn" role="status">
          ⚠️ {SUBJECT.provisionalBanner}
        </div>
      ) : null}
    </header>
  );
}

export function MobileNav() {
  const path = usePathname() ?? "/";

  return (
    <nav className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur" aria-label="Bottom navigation">
      <div className="mx-auto grid max-w-3xl grid-cols-8 px-1">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={`flex min-w-0 flex-col items-center gap-0.5 py-2 text-[0.625rem] font-bold leading-tight whitespace-nowrap transition-colors sm:text-xs ${active(path, n.href) ? "text-brand" : "text-ink-2 hover:text-ink"}`} aria-current={active(path, n.href) ? "page" : undefined}>
            <span className="text-lg sm:text-xl" aria-hidden>
              {n.icon}
            </span>
            <span className="truncate">{n.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
