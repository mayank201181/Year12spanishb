"use client";
// Typed-answer box with an on-screen Spanish accent keypad (á é í ó ú ñ ü ¿ ¡)
// and optional maths preview for numeric/expression answers.
import { useId, useRef } from "react";
import type { AnswerSpec } from "@/lib/types";
import { typedToMathML } from "@/lib/mathml";
import { normalizeInput } from "@/lib/mathParse";

const KEYS_BY_TYPE: Record<AnswerSpec["type"], string[]> = {
  number: ["−", "/", ".", "%"],
  fraction: ["−", "/", "␣"],
  list: [",", "−", "/", "(", ")"],
  ratio: [":", "/", "."],
  expression: ["x", "y", "n", "^", "(", ")", "−", "/"],
  text: ["á", "é", "í", "ó", "ú", "ñ", "ü", "¿", "¡"],
};

const PLACEHOLDER: Record<AnswerSpec["type"], string> = {
  number: "e.g. 250, 30 or 450",
  fraction: "e.g. 3/4",
  list: "e.g. 250, 400",
  ratio: "e.g. 3 : 4",
  expression: "e.g. 2x + 1",
  text: "Escribe tu respuesta (or tap á é í ó ú ñ ü ¿ ¡ below)",
};

/** Convert typed input into display maths for the preview, read the way the marker reads it. */
function previewMarkup(raw: string, type: AnswerSpec["type"]): string {
  return typedToMathML(normalizeInput(raw), type === "expression");
}

export function AnswerInput({
  value,
  onChange,
  onSubmit,
  type,
  disabled,
  autoFocus,
  label = "Your answer",
}: {
  value: string;
  onChange: (v: string) => void;
  onSubmit?: () => void;
  type: AnswerSpec["type"];
  disabled?: boolean;
  autoFocus?: boolean;
  label?: string;
}) {
  const id = useId();
  const ref = useRef<HTMLInputElement>(null);
  const keys = KEYS_BY_TYPE[type] ?? [];
  const showPreview = type !== "text" && value.trim().length > 0 && /[/^√π*×]|sqrt|\d\s+\d+\//.test(value);

  function insert(key: string) {
    const el = ref.current;
    const text = key === "␣" ? " " : key === "−" ? "-" : key;
    const start = el?.selectionStart ?? value.length;
    const end = el?.selectionEnd ?? value.length;
    const next = value.slice(0, start) + text + value.slice(end);
    onChange(next);
    requestAnimationFrame(() => {
      if (!el) return;
      el.focus();
      const pos = start + text.length;
      el.setSelectionRange(pos, pos);
    });
  }

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="text-sm font-bold text-ink-2">
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        className="input font-semibold"
        value={value}
        disabled={disabled}
        autoFocus={autoFocus}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="off"
        spellCheck={false}
        inputMode="text"
        placeholder={PLACEHOLDER[type]}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && onSubmit) {
            e.preventDefault();
            onSubmit();
          }
        }}
      />
      {!disabled && keys.length ? (
        <div
          className="flex flex-wrap items-center gap-1.5"
          aria-label={type === "text" ? "Spanish accent keys" : "Symbol keys"}
        >
          {type === "text" ? (
            <span className="mr-0.5 text-[0.7rem] font-bold uppercase tracking-wide text-ink-2">Tildes:</span>
          ) : null}
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              className="kbd min-w-[2rem] text-sm font-bold"
              onClick={() => insert(key)}
              aria-label={`insert ${key === "␣" ? "space" : key}`}
            >
              {key}
            </button>
          ))}
        </div>
      ) : null}
      {showPreview ? (
        <div className="text-sm text-ink-2" aria-live="polite">
          We read this as: <span className="math align-middle text-ink" dangerouslySetInnerHTML={{ __html: previewMarkup(value, type) }} />
        </div>
      ) : null}
    </div>
  );
}
