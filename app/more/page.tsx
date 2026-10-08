

"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import Link from "next/link";

const wishes = [
  {
    emoji: "🌅",
    title: "More sunsets",
    text: "More evenings where we forget about everything else and just enjoy being together.",
  },
  {
    emoji: "✈️",
    title: "More adventures",
    text: "More places to discover, more random plans, and more stories we'll laugh about later.",
  },
  {
    emoji: "😂",
    title: "More stupid laughs",
    text: "More laughing at things that aren't even funny to anyone else.",
  },
  {
    emoji: "☕",
    title: "More ordinary days",
    text: "Because sometimes the ordinary days with you end up becoming my favourite ones.",
  },
  {
    emoji: "📸",
    title: "More memories",
    text: "More pictures, more little moments, and more memories we can look back on someday.",
  },
  {
    emoji: "🏡",
    title: "More together",
    text: "Whatever the future looks like, I just hope there is a lot more of us in it.",
  },
];

export default function MorePage() {
  const [selected, setSelected] = useState<number | null>(null);

  const close = () => setSelected(null);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] px-5 py-16">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-120px] top-[10%] h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.35, 0.55, 0.35],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-100/60 blur-3xl" />
      </div>

      {/* Floating hearts */}
      <FloatingHeart className="left-[8%] top-[20%]" delay={0} />
      <FloatingHeart className="right-[8%] top-[25%]" delay={1} />
      <FloatingHeart className="bottom-[18%] left-[12%]" delay={2} />
      <FloatingHeart className="bottom-[15%] right-[12%]" delay={1.5} />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-pink-500">
            And then...
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold text-pink-950 sm:text-7xl">
            There's More
            <span className="text-pink-500">. ✨</span>
          </h1>

          <p className="mt-6 text-sm leading-7 text-pink-950/60 sm:text-base">
            Because I don't just want to remember the moments we've had.
            I want a lot more moments with you.
          </p>
        </motion.div>

        {/* Central heart */}
        <motion.div
          className="mx-auto mt-12 flex h-24 w-24 items-center justify-center rounded-full border border-pink-200 bg-white/60 text-5xl shadow-xl shadow-pink-200/30 backdrop-blur-xl"
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ❤️
        </motion.div>

        {/* Wishes */}
        <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {wishes.map((wish, index) => (
            <motion.button
              key={wish.title}
              onClick={() => setSelected(index)}
              className="
                group
                relative
                min-h-[190px]
                overflow-hidden
                rounded-[28px]
                border
                border-white/80
                bg-white/55
                p-7
                text-left
                shadow-[0_15px_50px_rgba(190,24,93,0.10)]
                backdrop-blur-xl
              "
              initial={{
                opacity: 0,
                y: 40,
                rotate: index % 2 === 0 ? -1 : 1,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                rotate: 0,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <div className="text-4xl transition-transform duration-300 group-hover:scale-110">
                {wish.emoji}
              </div>

              <h2 className="mt-5 font-serif text-2xl font-bold text-pink-950">
                {wish.title}
              </h2>

              <p className="mt-2 text-xs text-pink-500">
                Tap to read →
              </p>

              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-pink-100/60" />
            </motion.button>
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mx-auto mt-20 max-w-2xl text-center"
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="font-serif text-2xl leading-relaxed text-pink-950 sm:text-3xl">
            There are still so many places to go,
            <br />
            things to do,
            <br />
            and moments to make.
          </p>

          <p className="mt-6 text-sm text-pink-950/50">
            And I hope we get to experience a lot of them together. ❤️
          </p>

          <Link
            href="/surprise"
            className="
              mt-9
              inline-flex
              min-h-[44px]
              items-center
              gap-3
              rounded-full
              bg-pink-500
              px-8
              py-4
              text-sm
              font-medium
              text-white
              shadow-lg
              shadow-pink-300/40
              transition
              hover:bg-pink-600
            "
          >
            One last surprise 🎁
            <span>→</span>
          </Link>
        </motion.div>
      </div>

      {/* Popup */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-pink-950/20 px-5 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              className="relative w-full max-w-md rounded-[32px] border border-white/80 bg-[#fffafd] p-8 text-center shadow-2xl sm:p-10"
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
                y: 20,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-pink-50 text-pink-500"
              >
                ×
              </button>

              <motion.div
                className="text-6xl"
                animate={{
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                {wishes[selected].emoji}
              </motion.div>

              <h2 className="mt-6 font-serif text-3xl font-bold text-pink-950">
                {wishes[selected].title}
              </h2>

              <p className="mt-5 text-base leading-8 text-pink-950/65">
                {wishes[selected].text}
              </p>

              <div className="mt-7 text-xl text-pink-300">
                ♡ ✦ ♡
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}

function FloatingHeart({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`pointer-events-none absolute text-2xl text-pink-400/40 ${className}`}
      animate={{
        y: [-12, 12, -12],
        rotate: [-8, 8, -8],
        opacity: [0.3, 0.7, 0.3],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ♡
    </motion.div>
  );
}