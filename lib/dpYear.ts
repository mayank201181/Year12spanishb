"use client";
// Optional ?dp=2 filter for IB DP2 (Year 13) learners sharing the two-year IB Diploma apps.
// Default (no query param, clean session) returns null so Year 12 views are 100% unchanged.
import { useEffect, useSyncExternalStore } from "react";
import { TOPIC_META } from "./topics/meta";

export type DpYear = 1 | 2;

const STORAGE_KEY = "ib.dpYearFilter";
const CHANGE_EVENT = "ib-dp-year-change";

function readStoredDpYear(): 2 | null {
  if (typeof window === "undefined") return null;
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === "2" ? 2 : null;
  } catch {
    return null;
  }
}

export function readDpYearFilter(): 2 | null {
  if (typeof window === "undefined") return null;
  const param = new URLSearchParams(window.location.search).get("dp");
  if (param === "2") return 2;
  if (param === "1" || param === "all") return null;
  return readStoredDpYear();
}

function subscribeDpYear(onChange: () => void): () => void {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("popstate", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("popstate", onChange);
  };
}

export function setDpYearFilter(next: 2 | null): void {
  if (typeof window === "undefined") return;
  try {
    if (next === 2) window.sessionStorage.setItem(STORAGE_KEY, "2");
    else window.sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore storage restrictions
  }
  try {
    const url = new URL(window.location.href);
    if (next === 2) url.searchParams.set("dp", "2");
    else url.searchParams.delete("dp");
    window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
  } catch {
    // ignore history errors
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function useDpYearFilter(): 2 | null {
  const active = useSyncExternalStore(subscribeDpYear, readDpYearFilter, () => null);
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("dp");
    try {
      if (param === "2") {
        window.sessionStorage.setItem(STORAGE_KEY, "2");
      } else if (param === "1" || param === "all") {
        window.sessionStorage.removeItem(STORAGE_KEY);
      }
    } catch {
      // ignore storage restrictions
    }
  }, [active]);
  return active;
}

const META_MAP = new Map(TOPIC_META.map((t) => [t.id, t]));

export function topicDpYear(topicId: string): DpYear {
  return META_MAP.get(topicId)?.dpYear ?? 1;
}

export function topicDpOrder(topicId: string): number {
  return META_MAP.get(topicId)?.dpOrder ?? 999;
}

export function sortForDp2<T extends { id: string; dpYear?: DpYear; dpOrder?: number }>(
  items: readonly T[],
): T[] {
  return [...items].sort((a, b) => {
    const ya = a.dpYear ?? topicDpYear(a.id);
    const yb = b.dpYear ?? topicDpYear(b.id);
    if (ya !== yb) return yb - ya; // DP2 (2) before DP1 (1)
    const oa = a.dpOrder ?? topicDpOrder(a.id);
    const ob = b.dpOrder ?? topicDpOrder(b.id);
    return oa - ob;
  });
}
