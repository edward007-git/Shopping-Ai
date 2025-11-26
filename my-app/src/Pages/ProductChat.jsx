import { useState } from "react";
import ProductCard from "../Components/ProductCard";
import CapsuleBar from "../Components/CapsuleBar";
import { products } from "../Data/products";
import Aibot from "../assets/robot.png";

export default function ProductChat({ query, onReset }) {
  const [capsules, setCapsules] = useState([]);

  const handleFollowUp = (product) => {
    setCapsules((prev) => [...prev, product.title]);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-6 text-slate-100">
   
      <div className="w-full max-w-5xl rounded-[32px] border-[3px] border-white/80 bg-black p-3">
        {/* INNER PANEL */}
        <div className="w-full h-[640px] rounded-[26px] bg-gradient-to-br from-[#050509] via-[#0b0b0f] to-black shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden">
          
          {/* TOP BAR */}
          <header className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-black/60">
            <div className="flex items-center gap-3">
              <button onClick={onReset} className="focus:outline-none">
                <img
                  src={Aibot}
                  alt="AI - Bot"
                  className="h-10 w-10 rounded-full object-cover border border-white/20 hover:opacity-80 transition"
                />
              </button>
              <div>
                <p className="text-sm font-semibold text-white">
                Nova
                </p>
                
              </div>
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] text-neutral-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 mr-1 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
              Live recommendations
            </div>
          </header>

          {/* CHAT AREA */}
          <main className="flex-1 overflow-y-auto px-6 py-5 space-y-4 bg-gradient-to-b from-black/40 to-black/80">
            {/* AI MESSAGE */}
            <div className="flex items-start gap-3">
              <img
                src={Aibot}
                alt="AI Bot"
                className="h-8 w-8 rounded-full object-cover border border-white/20"
              />
              <div className="max-w-xl rounded-2xl bg-white/5 border border-white/10 px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                <p className="text-sm text-neutral-100">
                  Here are the best recommendations for{" "}
                  <span className="font-semibold text-white">
                    {query || "your request"}
                  </span>
                  .
                </p>
                <p className="mt-1 text-[11px] text-neutral-400">
                  I’ve selected products with strong reviews, good value, and
                  reliable sellers across top platforms.
                </p>
              </div>
            </div>

            {/* PRODUCTS */}
            {products.map((p) => (
              <div key={p.id} className="ml-11">
                <ProductCard product={p} onFollow={handleFollowUp} />
              </div>
            ))}
          </main>

          {/* CAPSULE INPUT BAR (already themed) */}
          <CapsuleBar capsules={capsules} />
        </div>
      </div>
    </div>
  );
}
