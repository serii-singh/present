
"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

type Stage = "candle" | "cake" | "gift" | "done";

export default function BirthdayCelebrationPage() {
  const [stage, setStage] = useState<Stage>("candle");
  const [candleOut, setCandleOut] = useState(false);
  const [cakeCut, setCakeCut] = useState(false);
  const [giftOpen, setGiftOpen] = useState(false);

  const blowCandle = () => {
    setCandleOut(true);
  };

  const cutCake = () => {
    setCakeCut(true);
  };

  const openGift = () => {
    setGiftOpen(true);
  };

  const nextStage = () => {
    if (stage === "candle") setStage("cake");
    else if (stage === "cake") setStage("gift");
    else if (stage === "gift") setStage("done");
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-[#fff4f8] via-[#fbe4ee] to-[#f7d8e6] px-5 py-12 text-[#713750]">
      {/* Floating background hearts */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 18 }).map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-pink-300/60"
            style={{
              left: `${(i * 37 + 9) % 100}%`,
              top: `${(i * 23 + 5) % 100}%`,
              fontSize: `${14 + (i % 3) * 8}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 12, -12, 0],
              opacity: [0.25, 0.8, 0.25],
            }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.12,
            }}
          >
            {i % 3 === 0 ? "♡" : "✦"}
          </motion.span>
        ))}
      </div>

      <section className="relative z-10 w-full max-w-2xl text-center">
        <motion.p
          className="text-xs uppercase tracking-[0.3em] text-[#a45b7d] sm:text-sm"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          A little birthday magic
        </motion.p>

        <AnimatePresence mode="wait">
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 18, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="mt-6 rounded-[2rem] border border-white/80 bg-white/50 px-5 py-9 shadow-[0_20px_80px_rgba(174,94,131,0.13)] backdrop-blur-xl sm:px-10 sm:py-12"
          >
            {stage === "candle" && (
              <>
                <h1 className="font-serif text-4xl sm:text-5xl">
                  Make a wish, Karan 🎂
                </h1>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#98627a] sm:text-base">
                  Before anything else, close your eyes, make a little wish,
                  and get ready to blow out your candle.
                </p>

                {/* Birthday cake */}
                <div className="relative mx-auto mt-12 w-fit">
                  <AnimatePresence>
                    {!candleOut && (
                      <motion.div
                        className="absolute -top-16 left-1/2 z-20 -translate-x-1/2"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: 1,
                          scale: [1, 1.12, 0.9, 1],
                          y: [0, -3, 0],
                        }}
                        exit={{ opacity: 0, scale: 0, y: -25 }}
                        transition={{
                          scale: {
                            duration: 0.8,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          opacity: { duration: 0.2 },
                        }}
                      >
                        <span className="text-4xl">🔥</span>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="relative z-10 mx-auto h-12 w-2 rounded-t-full bg-gradient-to-b from-yellow-100 to-pink-300 shadow-sm">
                    <div className="absolute inset-y-2 left-0.5 w-0.5 rounded-full bg-white/70" />
                  </div>

                  <div className="relative h-20 w-56 rounded-t-[1.5rem] border-b-4 border-[#e8a0bc] bg-gradient-to-b from-[#ffd8e7] to-[#f6aeca] shadow-[0_10px_25px_rgba(195,100,145,0.18)] sm:w-64">
                    <div className="absolute inset-x-0 top-0 flex justify-around">
                      {Array.from({ length: 7 }).map((_, i) => (
                        <span
                          key={i}
                          className="h-4 w-5 rounded-b-full bg-[#fff0f6]"
                        />
                      ))}
                    </div>

                    <div className="absolute inset-x-0 bottom-5 text-center text-2xl">
                      ♡ ♡ ♡
                    </div>
                  </div>

                  <div className="h-3 w-64 rounded-full bg-[#d47d9f] shadow-md sm:w-72" />
                  <div className="mx-auto h-3 w-72 rounded-full bg-[#efbad0] shadow-sm sm:w-80" />
                </div>

                <p className="mt-10 font-serif text-lg italic text-[#874a67]">
                  {candleOut
                    ? "Wish made? Okay, birthday boy... 💗"
                    : "Tap below to blow out your candle!"}
                </p>

                {!candleOut ? (
                  <button
                    onClick={blowCandle}
                    className="mt-6 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8d4167] active:scale-95"
                  >
                    Blow out the candle 🕯️
                  </button>
                ) : (
                  <motion.button
                    onClick={nextStage}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8d4167]"
                  >
                    Now let's cut the cake →
                  </motion.button>
                )}
              </>
            )}

            {stage === "cake" && (
              <>
                <h2 className="font-serif text-4xl sm:text-5xl">
                  Cake time! 🍰
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#98627a] sm:text-base">
                  Every birthday deserves cake. Tap the cake to cut your
                  first slice — and don't forget to save me some!
                </p>

                <button
                  type="button"
                  onClick={cutCake}
                  disabled={cakeCut}
                  aria-label="Cut the birthday cake"
                  className="relative mx-auto mt-12 block rounded-3xl p-4 transition hover:scale-105 disabled:cursor-default disabled:hover:scale-100"
                >
                  <motion.div
                    animate={
                      cakeCut
                        ? { rotate: [0, -3, 3, 0], scale: [1, 1.05, 1] }
                        : { y: [0, -5, 0] }
                    }
                    transition={{
                      duration: cakeCut ? 0.5 : 2,
                      repeat: cakeCut ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                    className="relative"
                  >
                    <span className="block text-[130px] leading-none drop-shadow-xl sm:text-[160px]">
                      {cakeCut ? "🍰" : "🎂"}
                    </span>

                    {cakeCut && (
                      <motion.span
                        initial={{ opacity: 0, x: -20, y: 10 }}
                        animate={{ opacity: 1, x: 0, y: 0 }}
                        className="absolute -right-5 top-0 text-4xl"
                      >
                        🔪
                      </motion.span>
                    )}
                  </motion.div>

                  {!cakeCut && (
                    <span className="mt-4 block text-sm text-[#a45b7d]">
                      Tap the cake to cut it ✨
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {cakeCut && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-5"
                    >
                      <p className="font-serif text-xl italic text-[#874a67]">
                        The first slice is yours. The second is mine. Deal? 🤭
                      </p>

                      <p className="mt-3 text-sm text-[#98627a]">
                        Calories don't count on birthdays!
                      </p>

                      <button
                        onClick={nextStage}
                        className="mt-6 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8d4167]"
                      >
                        One last surprise →
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {stage === "gift" && (
              <>
                <h2 className="font-serif text-4xl sm:text-5xl">
                  Something for you 🎁
                </h2>

                <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-[#98627a] sm:text-base">
                  Your birthday isn't complete without a little surprise
                  from me. Go on, open it.
                </p>

                <button
                  type="button"
                  onClick={openGift}
                  disabled={giftOpen}
                  aria-label="Open your birthday present"
                  className="mx-auto mt-10 block rounded-3xl p-5 transition hover:scale-105"
                >
                  <motion.div
                    animate={
                      giftOpen
                        ? { y: -12, rotate: [0, -4, 4, 0] }
                        : { y: [0, -8, 0] }
                    }
                    transition={{
                      duration: giftOpen ? 0.5 : 2,
                      repeat: giftOpen ? 0 : Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[130px] leading-none drop-shadow-xl sm:text-[160px]"
                  >
                    {giftOpen ? "💝" : "🎁"}
                  </motion.div>

                  {!giftOpen && (
                    <span className="mt-5 block text-sm text-[#a45b7d]">
                      Tap to unwrap your present ♡
                    </span>
                  )}
                </button>

                <AnimatePresence>
                  {giftOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-5"
                    >
                      <p className="font-serif text-2xl italic text-[#874a67]">
                        Surprise! You have all my love. 🥹
                      </p>

                      <p className="mt-3 text-sm leading-7 text-[#98627a]">
                        I hope this year brings you every beautiful thing
                        your heart has been wishing for.
                      </p>

                      <button
                        onClick={nextStage}
                        className="mt-6 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8d4167]"
                      >
                        Read your birthday letter 💌
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            )}

            {stage === "done" && (
              <>
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ duration: 0.6 }}
                  className="text-7xl"
                >
                  💗
                </motion.div>

                <h2 className="mt-6 font-serif text-4xl sm:text-5xl">
                  Happy Birthday, Karan!
                </h2>

                <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-[#98627a] sm:text-base">
                  Candle blown. Cake cut. Present opened.
                  Now there's just one thing left — a little letter
                  from someone who loves you very much. ♡
                </p>

                <Link
                  href="/letter"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#8d4167]"
                >
                  Open your letter 💌
                  <span>→</span>
                </Link>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        <Link
          href="/album"
          className="mt-7 inline-block text-xs text-[#a8738c] underline decoration-pink-200 underline-offset-4 transition hover:text-[#713750]"
        >
          ← Back to our memories
        </Link>
      </section>
    </main>
  );
}
