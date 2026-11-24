import { ImageResponse } from "next/og";
import { SUBJECT } from "@/lib/subject";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${SUBJECT.themeColorLight} 0%, #9a3412 100%)`,
          borderRadius: 8,
        }}
      >
        <svg width={24} height={24} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 78 L24 38 L76 78 L76 38" fill="none" stroke="#ffffff" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M26 24 C36 14, 46 14, 50 20 C54 26, 64 26, 74 16" fill="none" stroke="#fde68a" strokeWidth={9} strokeLinecap="round" />
        </svg>
      </div>
    ),
    { ...size },
  );
}
