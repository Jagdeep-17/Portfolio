









import React, { useState } from "react";
import { Antenna, Play, Pause } from "lucide-react";

const DEFAULT_TRACKS = [
  { id: 1, name: "Mehnat Chaddni Ni", artist: "Satinder Sartaj" },
  { id: 2, name: "Charmer", artist: "Diljit Dosanjh" },
  { id: 3, name: "Dandelions", artist: "Ruth B" },
];

export default function RetroRadioPlayer({ tracks = DEFAULT_TRACKS }) {
  const [activeId, setActiveId] = useState(tracks[0]?.id);
  const [isPlaying, setIsPlaying] = useState(true);
  const activeIndex = tracks.findIndex((t) => t.id === activeId);
  const activeTrack = tracks[activeIndex] ?? tracks[0];

  // Fake "frequency" derived from track position, radio-style
  const freq = (87.5 + activeIndex * 2.3).toFixed(1);

  const cycleTrack = (dir) => {
    const next = (activeIndex + dir + tracks.length) % tracks.length;
    setActiveId(tracks[next].id);
    setIsPlaying(true);
  };

  return (
    <div className="mx-auto w-full max-w-[220px] rounded-2xl border border-slate-200 bg-white p-2.5 shadow-[0_8px_22px_-8px_rgba(15,23,42,0.18)] absolute bottom-14 left-30  origin-right -rotate-6">
      <style>{`
        @keyframes needle-wag {
          0%, 100% { transform: rotate(-6deg); }
          50% { transform: rotate(6deg); }
        }
        @keyframes eq-bar {
          0%   { height: 20%; }
          25%  { height: 65%; }
          50%  { height: 100%; }
          100% { height: 20%; }
        }
        .needle-wag { animation: needle-wag 2.2s ease-in-out infinite; transform-origin: bottom center; }
        .needle-wag[data-paused="true"] { animation-play-state: paused; }
        .eq-bar { animation: eq-bar 0.9s ease-in-out infinite; }
      `}</style>

      {/* Antenna */}
      <div className="relative mb-1 flex justify-end pr-3">
        <Antenna size={14} className="-mb-1 rotate-12 text-slate-400" strokeWidth={2} />
      </div>

      {/* Body */}
      <div className="rounded-xl border border-slate-200 bg-slate-50 p-2 shadow-inner">
        {/* Display + speaker row */}
        <div className="mb-2 flex items-center gap-2">
          {/* Frequency display */}
          <div className="flex-1 rounded-md bg-slate-900 px-2 py-1.5">
            <p className="truncate text-[10px] font-medium leading-tight text-white">
              {activeTrack?.name}
            </p>
            <div className="mt-0.5 flex items-baseline justify-between">
              <p className="truncate text-[9px] text-slate-400">{activeTrack?.artist}</p>
              <p className="ml-1 flex-shrink-0 font-mono text-[9px] text-blue-400">
                {freq}
              </p>
            </div>
          </div>

          {/* Speaker grille */}
          <div className="grid h-9 w-9 flex-shrink-0 grid-cols-3 gap-[2px] rounded-full border border-slate-200 bg-slate-100 p-1.5">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className="rounded-full bg-slate-300" />
            ))}
          </div>
        </div>

        {/* Tuner dial */}
        <div className="mb-2 flex items-center gap-2 rounded-md border border-slate-200 bg-white px-2 py-1">
          <div className="relative h-4 w-4 flex-shrink-0 rounded-full border border-slate-300 bg-gradient-to-br from-white to-slate-200">
            <span
              data-paused={String(!isPlaying)}
              className="needle-wag absolute left-1/2 top-1/2 h-1.5 w-[1.5px] -translate-x-1/2 -translate-y-full bg-blue-600"
            />
          </div>
          <div className="relative h-1 flex-1 overflow-hidden rounded-full bg-slate-200">
            <div
              className="absolute top-0 h-full rounded-full bg-blue-600 transition-all duration-300"
              style={{ width: `${((activeIndex + 1) / tracks.length) * 100}%` }}
            />
          </div>
          {isPlaying && (
            <div className="flex h-3 flex-shrink-0 items-end gap-[2px]">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="eq-bar w-[2px] rounded-full bg-blue-600"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Controls: prev / play / next as knobs */}
        <div className="flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => cycleTrack(-1)}
            aria-label="Previous station"
            className="h-6 w-6 flex-shrink-0 rounded-full border border-slate-200 bg-white text-[10px] font-bold text-slate-700 shadow-sm transition-transform active:scale-90"
          >
            −
          </button>

          <button
            type="button"
            onClick={() => setIsPlaying((p) => !p)}
            aria-label={isPlaying ? "Pause" : "Play"}
            className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border-2 border-slate-900 bg-slate-900 text-white shadow-md transition-transform active:scale-95"
          >
            {isPlaying ? (
              <Pause size={12} fill="currentColor" strokeWidth={0} />
            ) : (
              <Play size={12} fill="currentColor" strokeWidth={0} className="translate-x-[1px]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => cycleTrack(1)}
            aria-label="Next station"
            className="h-6 w-6 flex-shrink-0 rounded-full border border-slate-200 bg-white text-[10px] font-bold text-slate-700 shadow-sm transition-transform active:scale-90"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}
