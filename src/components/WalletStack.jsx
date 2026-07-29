import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";


 
const CARDS = [
  {
    id: "stripe",
    label: "Stripe",
    holderLabel: "Holder",
    holderValue: "ALEX SMITH",
    last4: "4242",
    full: "5524 9910 4242",
    bg: "bg-[#635bff]",
    text: "text-white",
    labelColor: "text-white/70",
    chipBg: "bg-white/20",
    bottom: 90,
    z: 10,
    delay: "0.1s",
    walletHover: "translateY(-75px) rotate(-3deg)",
    cardHover: "translateY(-60px) scale(1.05) rotate(0deg)",
  },
  {
    id: "wise",
    label: "Wise",
    holderLabel: "Business",
    holderValue: "STUDIO LLC",
    last4: "8810",
    full: "9012 4432 8810",
    bg: "bg-[#9bd86a]",
    text: "text-white",
    labelColor: "text-white/70",
    chipBg: "bg-white/20",
    bottom: 65,
    z: 20,
    delay: "0.2s",
    walletHover: "translateY(-45px) rotate(2deg)",
    cardHover: "translateY(-70px) scale(1.05) rotate(0deg)",
  },
  {
    id: "paypal",
    label: (
      <>
        Pay<span className="text-[#0079C1]">Pal</span>
      </>
    ),
    holderLabel: "Email",
    holderValue: "hello@work.com",
    last4: "0094",
    full: "3312 0045 0094",
    bg: "bg-white",
    text: "text-[#003087]",
    labelColor: "text-[#8c979d]",
    chipBg: "bg-black/5",
    bottom: 40,
    z: 30,
    delay: "0.3s",
    walletHover: "translateY(-10px)",
    cardHover: "translateY(-60px) scale(1.05) rotate(0deg)",
  },
];

export default function WalletStack() {
  const [walletHover, setWalletHover] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [balanceVisible, setBalanceVisible] = useState(false);

  const showBalance = walletHover || balanceVisible;

  return (
    <div className="flex flex-col items-center justify-center py-16 absolute right-6 bottom-37  -rotate-12 ">
      <style>{`
        @keyframes wallet-slide-in {
          0%   { transform: translateY(-100px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .wallet-card-enter {
          animation: wallet-slide-in 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
        }
      `}</style>

      <div
        className="relative flex h-[230px] w-[280px] items-end justify-center"
        style={{ perspective: "1000px" }}
      >
        <div
          className="relative flex h-full w-full items-end justify-center transition-transform duration-300 ease-out"
          style={{ transform: walletHover ? "translateY(-5px)" : "none" }}
          onMouseEnter={() => setWalletHover(true)}
          onMouseLeave={() => {
            setWalletHover(false);
            setHoveredCard(null);
          }}
        >
          {/* Wallet back */}
          <div
            className="absolute bottom-0 h-[200px] w-[280px] rounded-[22px_22px_60px_60px] bg-[#1e341e]"
            style={{
              boxShadow:
                "inset 0 25px 35px rgba(0,0,0,0.4), inset 0 5px 15px rgba(0,0,0,0.5)",
            }}
          />

          {/* Cards */}
          {CARDS.map((card) => {
            const isCardHovered = hoveredCard === card.id;
            const transform = isCardHovered
              ? card.cardHover
              : walletHover
              ? card.walletHover
              : "none";

            return (
              <div
                key={card.id}
                className={`wallet-card-enter absolute left-[10px] h-[140px] w-[260px] cursor-pointer rounded-2xl p-[18px] ${card.bg} ${card.text} transition-transform duration-500`}
                style={{
                  bottom: card.bottom,
                  zIndex: isCardHovered ? 100 : card.z,
                  transform,
                  transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
                  transitionDelay: isCardHovered ? "0s" : undefined,
                  animationDelay: card.delay,
                  boxShadow:
                    "inset 0 1px 1px rgba(255,255,255,0.3), 0 -4px 15px rgba(0,0,0,0.1)",
                }}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="flex items-center justify-between text-sm font-medium uppercase tracking-wide">
                    <span>{card.label}</span>
                    <div className={`h-6 w-8 rounded border border-white/10 ${card.chipBg}`} />
                  </div>
                  <div className="flex items-end justify-between">
                    <div>
                      <span className={`mb-0.5 block text-[8px] uppercase ${card.labelColor}`}>
                        {card.holderLabel}
                      </span>
                      <span className="text-[10px] font-medium">{card.holderValue}</span>
                    </div>
                    <div className="text-right">
                      {isCardHovered ? (
                        <span className="font-mono text-sm tracking-wide">{card.full}</span>
                      ) : (
                        <span className="text-base tracking-wider">**** {card.last4}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Pocket */}
          <div
            className="absolute bottom-0 z-40 h-[160px] w-[280px]"
            style={{ filter: "drop-shadow(0 15px 25px rgba(20,40,20,0.4))" }}
          >
            <svg className="h-full w-full" viewBox="0 0 280 160" fill="none">
              <path
                d="M 0 20 C 0 10, 5 10, 10 10 C 20 10, 25 25, 40 25 L 240 25 C 255 25, 260 10, 270 10 C 275 10, 280 10, 280 20 L 280 120 C 280 155, 260 160, 240 160 L 40 160 C 20 160, 0 155, 0 120 Z"
                fill="#1e341e"
              />
              <path
                d="M 8 22 C 8 16, 12 16, 15 16 C 23 16, 27 29, 40 29 L 240 29 C 253 29, 257 16, 265 16 C 268 16, 272 16, 272 22 L 272 120 C 272 150, 255 152, 240 152 L 40 152 C 25 152, 8 152, 8 120 Z"
                stroke="#3d5635"
                strokeWidth="1.5"
                strokeDasharray="6 4"
              />
            </svg>

            <div className="absolute top-[45px] z-50 flex w-full flex-col items-center gap-2">
              <div className="relative h-6 w-full text-center">
                <div
                  className="transition-opacity duration-300"
                  style={{ opacity: showBalance ? 0 : 1 }}
                >
                  <span className="text-2xl tracking-[4px] text-[#839e7b]">******</span>
                </div>
                <div
                  className="absolute left-1/2 top-0 -translate-x-1/2 text-[22px] font-semibold text-[#a7c59e] transition-all duration-300"
                  style={{
                    opacity: showBalance ? 1 : 0,
                    transform: showBalance
                      ? "translate(-50%, 0)"
                      : "translate(-50%, 10px)",
                  }}
                >
                  $12,450.00
                </div>
              </div>
              <div className="text-xs font-medium text-[#698263]">Total Balance</div>

              <button
                type="button"
                aria-label="Toggle balance visibility"
                onClick={(e) => {
                  e.stopPropagation();
                  setBalanceVisible((v) => !v);
                }}
                className="relative mt-1 flex h-5 w-5 items-center justify-center transition-opacity duration-300"
                style={{ opacity: walletHover || balanceVisible ? 1 : 0.3 }}
              >
                {showBalance ? (
                  <Eye size={18} className="text-[#3be60b]" strokeWidth={2} />
                ) : (
                  <EyeOff size={18} className="text-[#3be60b]" strokeWidth={2} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

     
    </div>
  );
}
