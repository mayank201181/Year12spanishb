// iOS home-screen icon: Ñ tilde emblem + IB Spanish B badge.
import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #9a3412 100%)`,
        }}
      >
        <svg width={96} height={96} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: 4 }}>
          <path d="M24 80 L24 40 L76 80 L76 40" fill="none" stroke="#ffffff" strokeWidth={10} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 24 C36 14, 46 14, 50 20 C54 26, 64 26, 74 16" fill="none" stroke="#fde68a" strokeWidth={8.5} strokeLinecap="round" />
        </svg>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 4,
            padding: "2px 14px",
            borderRadius: 999,
            background: "#ffffff",
            color: SUBJECT.themeColorLight,
            fontSize: 18,
            fontWeight: 800,
            letterSpacing: 0.6,
          }}
        >
          {SUBJECT.shortName}
        </div>
      </div>
    ),
    { ...size },
  );
}
