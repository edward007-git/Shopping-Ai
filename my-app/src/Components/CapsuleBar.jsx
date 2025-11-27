import { ChevronUp } from "lucide-react";

export default function CapsuleBar({ capsules }) {
  const last = capsules[capsules.length - 1];

  return (
    <footer className="border-t border-white/10 px-4 py-4 bg-black">
      <div className="mx-auto flex max-w-2xl items-center gap-2 rounded-full 
        border border-white/15 bg-white/5 px-4 py-2 text-[13px] 
        shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-sm 
        focus-within:border-rose-300/70 transition-all">
{/*Chip*/}
        {last && (
        <span className="flex-shrink-0 rounded-full border border-white/20 
      bg-white text-black px-3 py-[6px] text-[11px] font-medium 
       shadow-[0_0_8px_rgba(255,255,255,0.3)]">
      {last}
</span>

        )}

        {/* INPUT */}
        <input
          className="flex-1 bg-transparent text-[13px] text-neutral-100 outline-none 
          placeholder:text-neutral-500"
          placeholder="Ask further details or compare prices..."
        />

        {/* SEND BUTTON */}
        <button
          className="ml-1 flex h-8 w-8 items-center justify-center rounded-full 
          bg-rose-300 text-black font-medium transition hover:bg-rose-200 
          shadow-[0_0_12px_rgba(248,180,191,0.7)] border border-rose-200"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
      </div>
    </footer>
  );
}
