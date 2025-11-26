import { Star, Send, MessageSquarePlus } from "lucide-react";

export default function ProductCard({ product, onFollow }) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-[#131318] via-[#0e0e13] to-black border border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.6)] p-4 hover:border-rose-200/40 transition-all duration-300">
      
      <div className="flex gap-4">
        {/* Image + badge */}
        <div className="relative flex-shrink-0">
          {product.badge && (
            <span className="absolute left-2 top-2 rounded-full bg-rose-300 px-2 py-[2px] text-[10px] font-semibold text-black shadow-[0_0_12px_rgba(248,180,191,0.7)]">
              {product.badge}
            </span>
          )}

          <img
            src={product.image}
            alt={product.title}
            className="h-28 w-28 rounded-xl object-cover border border-white/10 shadow-[0_6px_20px_rgba(0,0,0,0.6)]"
          />
        </div>

        {/* Text section */}
        <div className="flex-1">
          <h3 className="font-sf font-semibold text-sm text-white leading-snug">
            {product.title}
          </h3>

          {/* Rating */}
          <div className="mt-1 flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < product.rating
                    ? "fill-rose-300 stroke-rose-300"
                    : "stroke-neutral-700"
                }`}
              />
            ))}
            <span className="ml-2 text-[11px] text-neutral-400">
              ({product.reviews})
            </span>
          </div>

          {/* Description */}
          <p className="mt-2 text-[11px] leading-snug text-neutral-400">
            {product.description}
          </p>

          {/* Price */}
          <p className="mt-2 font-semibold text-sm text-white">
            {product.price}
            {product.originalPrice && (
              <span className="ml-2 text-[11px] line-through text-neutral-600">
                {product.originalPrice}
              </span>
            )}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-3 flex justify-between border-t border-white/10 pt-3 text-[11px]">
        <button className="flex items-center gap-1 px-2 py-1 rounded-lg bg-white/5 text-neutral-300 hover:bg-white/10 transition">
          <Send className="h-3 w-3" />
          <span>Send</span>
        </button>

        <button
          className="flex items-center gap-1 px-2 py-1 rounded-lg bg-rose-300 text-black font-medium shadow-[0_0_12px_rgba(248,180,191,0.6)] hover:bg-rose-200 transition"
          onClick={() => onFollow(product)}
        >
          <MessageSquarePlus className="h-3 w-3" />
          <span>Follow-up</span>
        </button>
      </div>
    </div>
  );
}
