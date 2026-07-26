import React from "react";
import Jagdeep from '../assets/images/my image -circle.JPG'

export default function SwingingIDCard() {
  return (
    <div className="flex items-center justify-center  absolute top-[-90px] left-16">
      <style>{`
        @keyframes badge-swing {
          0%, 100% { transform: rotate(-4deg); }
          50%      { transform: rotate(4deg); }
        }
        .badge-swing {
          animation: badge-swing 4.5s ease-in-out infinite;
          transform-origin: top center;
        }
        .badge-swing:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="badge-swing group/badge flex flex-col items-center">
        {/* Lanyard strap */}
        <div className="relative z-0 h-[240px] w-[26px] bg-stone-800 shadow-sm">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 3px)",
            }}
          />
          <span className="absolute bottom-[40%] left-1/2 -translate-x-1/2 -rotate-90 whitespace-nowrap select-none font-mono text-[6px] font-bold uppercase tracking-[0.2em] text-white/60">
            jagdeep.dev
          </span>
        </div>

        {/* Badge card — pulled up to overlap the strap's bottom edge */}
        <div
          className="relative -mt-[22px] rounded-xl p-[6px]"
          style={{
            background:
              "linear-gradient(170deg, #57534e 0%, #44403c 15%, #292524 60%, #1c1917 100%)",
            borderTop: "1.5px solid rgba(255,255,255,0.15)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
            borderRight: "1px solid rgba(0,0,0,0.3)",
            borderBottom: "2px solid rgba(0,0,0,0.4)",
            transform: "rotateX(1deg)",
            transformStyle: "preserve-3d",
          }}
        >
          <div
            className="pointer-events-none absolute inset-0 z-20 rounded-xl"
            style={{
              background:
                "linear-gradient(115deg, rgba(255,255,255,0.12) 0%, rgba(255,255,255,0.04) 15%, transparent 40%, transparent 85%, rgba(255,255,255,0.03) 100%)",
            }}
          />
          <div className="absolute top-0 left-1/2 z-0 h-[22px] w-[26px] -translate-x-1/2 rounded-b-sm bg-stone-800" />

          <div className="relative z-10 flex justify-center pb-0 pt-1">
            <div
              className="h-[6px] w-8 rounded-full border border-stone-500/50"
              style={{
                background: "linear-gradient(180deg, #1c1917, #292524)",
                boxShadow: "inset 0 1px 2px rgba(0,0,0,0.5)",
              }}
            />
          </div>

          <div
            className="relative z-10 flex flex-col overflow-hidden rounded-lg"
            style={{
              borderTop: "1px solid rgba(255,255,255,0.06)",
              borderBottom: "1px solid rgba(0,0,0,0.3)",
            }}
          >
            <div
              className="relative px-4 pb-4 pt-4"
              style={{
                background:
                  "linear-gradient(175deg, #6b6560 0%, #57534e 20%, #44403c 100%)",
              }}
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
                  backgroundSize: "18px 18px",
                }}
              />
              <div className="relative z-10">
                <h3 className="text-[28px] font-bold leading-[1.05] tracking-[0.15em] text-white">
                    JAGDEEP

                </h3>
                <p
                  className="mt-2 text-[11px] leading-relaxed tracking-[0.05em] text-white/50"
                  style={{ fontFamily: "var(--font-noto)" }}
                >
                  Love exploring, prototyping,
                  <br />
                  storytelling, and visual craft
                </p>
              </div>
            </div>

            <div
              className="flex flex-col items-center px-4 pb-5 pt-5"
              style={{
                background: "linear-gradient(180deg, #1c1917, #0c0a09)",
              }}
            >
              <div
                className="relative h-32 w-32 overflow-hidden rounded-full bg-stone-600"
                style={{ border: "3px solid #57534e" }}
              >
                <img
                  src={Jagdeep}
                  alt="Jagdeep"
                  className="h-full w-full object-cover transition-opacity duration-300 group-hover/badge:opacity-0"
                  draggable={false}
                />
                <video
                  src="/badge-hover.mp4"
                  muted
                  loop
                  playsInline
                  autoPlay
                  className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover/badge:opacity-100"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
