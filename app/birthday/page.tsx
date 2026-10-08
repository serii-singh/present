"use client";

import { motion } from "motion/react";
import Link from "next/link";

export default function BirthdayPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] px-5 py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-100px] top-[10%] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />

        <div className="absolute left-[50%] top-[40%] h-60 w-60 -translate-x-1/2 rounded-full bg-rose-100/60 blur-3xl" />
      </div>

      {/* Floating hearts */}
      <FloatingHeart className="left-[8%] top-[15%]" delay={0} />
      <FloatingHeart className="right-[10%] top-[25%]" delay={1} />
      <FloatingHeart className="left-[15%] bottom-[20%]" delay={2} />
      <FloatingHeart className="right-[15%] bottom-[15%]" delay={1.5} />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Top text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-pink-500">
            For someone very special
          </p>

          <motion.h1
            className="mt-5 font-serif text-5xl font-bold text-pink-950 sm:text-7xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            It's Your Day
            <span className="text-pink-500">. 💗</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-pink-950/60 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Today isn't just another day. It's the day someone incredibly
            special came into this world.
          </motion.p>
        </motion.div>

        {/* Main memory card */}
        <motion.div
          className="mx-auto mt-14 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <div className="relative overflow-hidden rounded-[36px] border border-white/80 bg-white/60 p-3 shadow-[0_25px_80px_rgba(190,24,93,0.15)] backdrop-blur-xl">
            {/* Image placeholder */}
            <div className="relative flex aspect-[4/3] items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">
              {/* Replace this with your photo */}
              <div className="text-center">
                <motion.div
                  className="text-7xl"
                  animate={{
                    y: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  📸
                </motion.div>

                <p className="mt-4 text-sm font-medium text-pink-700/70">
                  Our first memory goes here...
                </p>
              </div>

              {/* Decorative heart */}
              <motion.div
                className="absolute right-5 top-5 text-3xl"
                animate={{
                  rotate: [-8, 8, -8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                💕
              </motion.div>
            </div>

            {/* Card text */}
            <div className="px-5 pb-6 pt-7 text-center">
              <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                A little reminder
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-pink-950">
                You are loved.
              </h2>

              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-pink-950/60">
                More than you probably realise. And today, I want to remind
                you of every little reason why.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Continue */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link
            href="/details"
            className="group flex items-center gap-3 rounded-full bg-pink-500 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-pink-300/40 transition-all hover:bg-pink-600 hover:shadow-xl"
          >
            <span>See Our Memories</span>

            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
              }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
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
      className={`pointer-events-none absolute text-2xl text-pink-400/50 ${className}`}
      animate={{
        y: [-12, 12, -12],
        rotate: [-8, 8, -8],
        opacity: [0.3, 0.8, 0.3],
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