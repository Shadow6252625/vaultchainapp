"use client";

export function BackgroundVideo({ src = "/vault-bg.mp4", brightness = 0.35 }: { src?: string, brightness?: number }) {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#0b0c10]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        style={{ filter: `brightness(${brightness}) saturate(1.2)` }}
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Dark overlay to keep text readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(11,12,16,0.3) 0%, rgba(11,12,16,0.85) 100%)",
        }}
      />
    </div>
  );
}
