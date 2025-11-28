import { useState } from "react";
import { ChevronUp } from "lucide-react";
import Aibot from "../assets/robot.png";

export default function DefaultChatScreen({ query, setQuery, onSubmit }) {
  // activeTab controls which nav button is white
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4 py-6">
      {/* OUTER FRAME (like device border) */}
      <div className="w-full max-w-5xl rounded-[32px] border-[3px] border-white/80 bg-black p-3">
        <div className="w-full h-[620px] rounded-[26px] bg-gradient-to-br from-[#050509] via-[#0b0b0f] to-black shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden">
          {/* TOP BAR */}
          <header className="flex items-center justify-between px-8 pt-6 pb-4">
            <div className="flex items-center gap-3">
              <img
                src={Aibot}
                alt="AI Bot"
                className="h-10 w-10 rounded-full object-cover border border-white/20"
              />
              <div>
                <p className="text-sm font-semibold text-white">Nova</p>
                <p className="text-xs text-neutral-400">Ask anything about brands &amp; prices</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-2 text-xs" role="tablist">
              <button
                role="tab"
                aria-pressed={activeTab === "home"}
                onClick={() => setActiveTab("home")}
                onMouseDown={(e) => e.currentTarget.blur()}
                className={`px-4 py-1.5 rounded-full font-medium transition ${
                  activeTab === "home"
                    ? "bg-white text-black"
                    : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/60`}
              >
                Home
              </button>

              <button
                role="tab"
                aria-pressed={activeTab === "products"}
                onClick={() => setActiveTab("products")}
                onMouseDown={(e) => e.currentTarget.blur()}
                className={`px-4 py-1.5 rounded-full font-medium transition ${
                  activeTab === "products"
                    ? "bg-white text-black"
                    : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/60`}
              >
                Products
              </button>

              <button
                role="tab"
                aria-pressed={activeTab === "collections"}
                onClick={() => setActiveTab("collections")}
                onMouseDown={(e) => e.currentTarget.blur()}
                className={`px-4 py-1.5 rounded-full font-medium transition ${
                  activeTab === "collections"
                    ? "bg-white text-black"
                    : "bg-white/5 text-neutral-300 border border-white/10 hover:bg-white/10"
                } focus:outline-none focus-visible:ring-2 focus-visible:ring-rose-300/60`}
              >
                Collections
              </button>
            </nav>
          </header>

          {/* CONTENT */}
          <main className="flex-1 flex items-center justify-between px-8 pb-6 gap-6 flex-col md:flex-row">
            <div className="w-full md:w-1/2 space-y-4">
              <p className="text-[12px] tracking-[0.25em] uppercase text-rose-200/80">
                Modern Shopping Style
              </p>

              <h1 className="text-[32px] md:text-[40px] leading-tight font-semibold text-white">
                Shop Smart with <span className="text-neutral-300">AI-Powered</span> Recommendations.
              </h1>

              <p className="text-sm text-neutral-400 max-w-md">
                Discover the latest trends, compare prices across brands, and find the best deals in
                seconds with your personal shopping AI.
              </p>

              {/* Small stats row */}
              <div className="flex flex-wrap gap-6 pt-2 text-xs text-neutral-300">
                <div>
                  <p className="text-lg font-semibold text-white">2.5K+</p>
                  <p className="text-[11px] text-neutral-400">Products tracked</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">120+</p>
                  <p className="text-[11px] text-neutral-400">Brands covered</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">400+</p>
                  <p className="text-[11px] text-neutral-400">Happy shoppers</p>
                </div>
              </div>
            </div>

            {/* RIGHT SIMPLE CARD */}
            <div className="w-full md:w-1/2 flex md:justify-end">
              <div className="w-full max-w-sm h-52 rounded-[24px] bg-gradient-to-br from-[#1b1b23] via-[#111118] to-black border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_#f5a8b3_0,_transparent_55%)]" />
                <div className="relative h-full flex flex-col justify-between p-5">
                  <div>
                    <p className="text-xs text-rose-200/90">Live Suggestion</p>
                    <p className="mt-1 text-base font-semibold text-white">“Best smartwatches AMOLED display”</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="text-[11px] text-neutral-400">
                      <p>Updated just now</p>
                      <p className="text-rose-200 mt-0.5">5 top deals found</p>
                    </div>
                    <div className="h-12 w-24 rounded-2xl bg-rose-300 flex items-center justify-center text-xs font-medium text-black">
                      See Picks
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>

          {/* FOOTER SEARCH */}
          <footer className="px-8 pb-6">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (!query.trim()) return;
                onSubmit();
              }}
            >
              <div className="w-full flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm backdrop-blur-sm focus-within:border-rose-300/70 transition-all">
                <input
                  type="text"
                  className="flex-1 bg-transparent outline-none placeholder:text-neutral-500 text-neutral-50"
                  placeholder='Try: "Best headphone with noise cancellation" or "Best Android phones for gaming"...'
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                <button
                  type="submit"
                  className="ml-3 h-8 w-8 rounded-full bg-rose-300 text-black flex items-center justify-center hover:bg-rose-200 transition shadow-[0_0_15px_rgba(248,180,191,0.7)]"
                >
                  <ChevronUp size={14} />
                </button>
              </div>
            </form>
          </footer>
        </div>
      </div>
    </div>
  );
}
