import React, { useState } from "react";
import { Music2, Play, Pause } from "lucide-react";


const DEFAULT_TRACKS = [
  { id: 1, name: "Mehnat Chaddni Ni", artist: "Satinder Sartaj" },
  { id: 2, name: "Charmer", artist: "Diljit dosanjh" },
  { id: 3, name: "Dandelions", artist: "Ruth B" },
];

export default function RetroTapePlayer({ tracks = DEFAULT_TRACKS }) {
  const [activeId, setActiveId] = useState(tracks[0]?.id);
  const [isPlaying, setIsPlaying] = useState(true);
  const activeTrack = tracks.find((t) => t.id === activeId) ?? tracks[0];

  return (
    <div className="mx-auto w-full max-w-sm rounded-3xl border border-indigo-100 bg-white p-4 shadow-[0_12px_40px_-14px_rgba(79,70,229,0.3)] absolute left-4 top-1">
      <style>{`
        @keyframes disc-spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes eq-bar {
          0%   { height: 20%; }
          25%  { height: 65%; }
          50%  { height: 100%; }
          100% { height: 20%; }
        }
        .disc-spin { animation: disc-spin 4s linear infinite; }
        .disc-spin[data-paused="true"] { animation-play-state: paused; }
        .eq-bar { animation: eq-bar 1s ease-in-out infinite; }
      `}</style>

      {/* Header */}
      <div className="mb-3 flex items-center gap-2 px-1">
        <Music2 size={14} className="text-indigo-600" strokeWidth={2.25} />
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-indigo-600">
          Now Playing
        </p>
      </div>

      {/* Now-playing row: spinning vinyl + info + play button */}
      <div className="mb-3 flex items-center gap-3 rounded-2xl border border-indigo-100 bg-indigo-50/60 px-3 py-3">
        {/* washi tape sliver behind the disc */}
        <div className="relative flex h-14 w-14 flex-shrink-0 items-center justify-center">
          <div className="absolute -top-1.5 left-0 h-3 w-8 -rotate-12 rounded-[2px] bg-amber-300/70" />
          <div
            data-paused={String(!isPlaying)}
            className="disc-spin relative flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 via-indigo-600 to-indigo-800 shadow-inner"
          >
            <div className="absolute h-full w-full rounded-full border border-white/20" />
            <div className="absolute h-9 w-9 rounded-full border border-white/20" />
            <div className="h-3 w-3 rounded-full bg-amber-300 shadow" />
          </div>
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-slate-900">
            {activeTrack?.name}
          </p>
          <p className="truncate text-xs text-slate-400">{activeTrack?.artist}</p>
        </div>

        <button
          type="button"
          onClick={() => setIsPlaying((p) => !p)}
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-indigo-600 text-white shadow-md shadow-indigo-200 transition-transform duration-150 hover:scale-105 active:scale-95"
        >
          {isPlaying ? (
            <Pause size={14} fill="currentColor" strokeWidth={0} />
          ) : (
            <Play size={14} fill="currentColor" strokeWidth={0} className="translate-x-[1px]" />
          )}
        </button>
      </div>

      {/* Track list */}
      <div className="flex flex-col gap-0.5">
        {tracks.map((track) => {
          const isActive = track.id === activeId;
          return (
            <button
              key={track.id}
              type="button"
              onClick={() => {
                setActiveId(track.id);
                setIsPlaying(true);
              }}
              className={`group flex w-full items-center gap-3 rounded-xl px-2 py-1.5 text-left transition-colors duration-200 ${
                isActive ? "bg-indigo-50" : "hover:bg-indigo-50/60"
              }`}
            >
              <div
                className={`flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full ${
                  isActive
                    ? "bg-gradient-to-br from-indigo-500 to-indigo-700"
                    : "bg-slate-100"
                }`}
              >
                {!isActive && (
                  <Music2 size={12} className="text-slate-400" strokeWidth={2} />
                )}
              </div>

              <div className="min-w-0 flex-1">
                <p
                  className={`truncate text-xs font-medium ${
                    isActive ? "text-indigo-700" : "text-slate-900"
                  }`}
                >
                  {track.name}
                </p>
                <p className="truncate text-[10px] text-slate-400">{track.artist}</p>
              </div>

              <div className="flex h-5 w-7 flex-shrink-0 items-center justify-center">
                {isActive && isPlaying ? (
                  <div className="flex h-3.5 items-end gap-[2px]">
                    {[0, 1, 2].map((i) => (
                      <span
                        key={i}
                        className="eq-bar w-[2px] rounded-full bg-indigo-600"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      />
                    ))}
                  </div>
                ) : (
                  <Play
                    size={11}
                    fill="currentColor"
                    strokeWidth={0}
                    className="text-slate-300 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-hover:text-indigo-600"
                  />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
