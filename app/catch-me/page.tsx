
"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";

const MAX_DODGES = 10;

const taunts = [
  "Catch my heart ♡",
  "Nope, too slow! 🤭",
  "Try, try again! 💗",
  "Missed me! Hehe 🦋",
  "Almost got me...",
  "Almost, almost! 😏",
  "Sooo close, try again!",
  "Almost almost almost! 😂",
  "You really want my heart, huh? 🥹",
  "Okay, okay... one last try! 💌",
  "Hehe, you still can't catch me!",
  "Fineee, you win! My heart is yours ♡",
];

export default function DodgeFieldPage() {
  const [position, setPosition] = useState({ x: 50, y: 52 });
  const [dodges, setDodges] = useState(0);
  const [caught, setCaught] = useState(false);
  const [message, setMessage] = useState(
    "Come a little closer... if you can 💌",
  );

  const lastDodgeRef = useRef(0);
  const dodgesRef = useRef(0);
  const caughtRef = useRef(false);

  const moveHeart = () => {
    if (caughtRef.current || dodgesRef.current >= MAX_DODGES) return;

    const now = Date.now();

    // Avoid excessively rapid movement.
    if (now - lastDodgeRef.current < 300) return;

    lastDodgeRef.current = now;

    const nextDodge = dodgesRef.current + 1;

    dodgesRef.current = nextDodge;
    setDodges(nextDodge);

    setPosition({
      x: 18 + Math.random() * 64,
      y: 20 + Math.random() * 58,
    });

    setMessage(
      nextDodge === MAX_DODGES
        ? "Okay, okay... you win. My heart is yours forever. 🥹💗"
        : taunts[nextDodge],
    );
  };

  const handleCatch = () => {
    if (caughtRef.current) return;

    if (dodgesRef.current < MAX_DODGES) {
      moveHeart();
      return;
    }

    caughtRef.current = true;
    setCaught(true);
    setMessage("You caught my heart. It's yours, always. ♡");
  };

  const handlePointerMove = (
    event: React.PointerEvent<HTMLDivElement>,
  ) => {
    if (event.pointerType === "touch" || caughtRef.current) return;
    if (dodgesRef.current >= MAX_DODGES) return;

    const button = event.currentTarget.querySelector("button");
    if (!button) return;

    const rect = button.getBoundingClientRect();

    const distance = Math.hypot(
      event.clientX - (rect.left + rect.width / 2),
      event.clientY - (rect.top + rect.height / 2),
    );

    if (distance < 95) {
      moveHeart();
    }
  };

  const handleReset = () => {
    caughtRef.current = false;
    dodgesRef.current = 0;
    lastDodgeRef.current = 0;

    setCaught(false);
    setDodges(0);
    setPosition({ x: 50, y: 52 });
    setMessage("Come a little closer... if you can 💌");
  };

  useEffect(() => {
    // Keep the page from scrolling while interacting with the field.
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#fff5f8] via-[#fce8f0] to-[#f8d9e7] px-5 py-12 text-[#713750]">
      {/* Dreamy background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-pink-300/30 blur-[100px]" />
        <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-rose-300/30 blur-[120px]" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/40 blur-[100px]" />

        {["♡", "✧", "♡", "✦", "♡", "✧", "♡"].map(
          (item, index) => (
            <motion.span
              key={index}
              className="absolute select-none text-pink-400/50"
              style={{
                left: `${7 + index * 14}%`,
                top: `${10 + ((index * 17) % 78)}%`,
                fontSize: index % 2 === 0 ? 25 : 17,
              }}
              animate={{
                y: [0, -14, 0],
                rotate: [0, 8, -8, 0],
                opacity: [0.35, 0.8, 0.35],
              }}
              transition={{
                duration: 4 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            >
              {item}
            </motion.span>
          ),
        )}
      </div>

      {/* Page introduction */}
      <motion.section
        className="relative z-10 w-full max-w-3xl text-center"
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#a45b7d] shadow-sm backdrop-blur-md sm:text-sm">
          <span>♡</span>
          A tiny birthday challenge
          <span>♡</span>
        </span>

        <h1 className="mt-7 font-serif text-4xl leading-tight text-[#713750] sm:text-6xl">
          Catch My Heart
          <span className="ml-2 inline-block text-pink-400">♡</span>
        </h1>

        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-[#98627a] sm:text-base sm:leading-8">
          Birthday boy, I have one little surprise for you.
          But first, you have to catch something that belongs to you. 🤭
        </p>

        <motion.div
          className="mx-auto mt-6 flex items-center justify-center gap-2"
          animate={{ scale: [1, 1.06, 1] }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-2xl">💗</span>
          <span className="text-sm italic text-[#a45b7d]">
            {caught
              ? "Challenge completed!"
              : "Think you can catch it?"}
          </span>
          <span className="text-2xl">💗</span>
        </motion.div>

        {/* Interactive dodge field */}
        <div
          onPointerMove={handlePointerMove}
          className="relative mt-9 h-[300px] w-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/35 shadow-[0_20px_70px_rgba(174,94,131,0.12)] backdrop-blur-xl sm:h-[340px]"
        >
          <div className="pointer-events-none absolute inset-4 rounded-[1.5rem] border border-pink-200/50" />

          <span className="pointer-events-none absolute left-8 top-8 text-pink-300/70">
            ✧
          </span>
          <span className="pointer-events-none absolute right-10 top-12 text-xl text-pink-300/70">
            ♡
          </span>
          <span className="pointer-events-none absolute bottom-10 left-12 text-xl text-pink-300/70">
            ♡
          </span>
          <span className="pointer-events-none absolute bottom-8 right-8 text-pink-300/70">
            ✧
          </span>

          {/* Dodging heart button */}
          <motion.button
            type="button"
            onClick={handleCatch}
            aria-label="Catch the heart"
            className={`absolute z-10 flex min-h-14 -translate-x-1/2 -translate-y-1/2 touch-manipulation items-center justify-center gap-2 rounded-full px-6 py-4 font-medium shadow-[0_12px_35px_rgba(195,100,145,0.25)] outline-none transition-colors duration-300 focus-visible:ring-4 focus-visible:ring-pink-300/60 ${
              caught
                ? "bg-[#a04f76] text-white"
                : "border border-white/80 bg-gradient-to-r from-[#e99bbd] to-[#d77ba4] text-white"
            }`}
            style={{
              left: `${position.x}%`,
              top: `${position.y}%`,
              cursor: caught ? "default" : "pointer",
            }}
            animate={{
              scale: caught ? [1, 1.12, 1] : 1,
              rotate: caught ? [0, -5, 5, 0] : 0,
            }}
            transition={{
              duration: caught ? 0.6 : 0.2,
              ease: "easeInOut",
            }}
            whileHover={
              caught || dodges >= MAX_DODGES
                ? { scale: 1.05 }
                : undefined
            }
            whileTap={{ scale: 0.94 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={caught ? "caught" : dodges}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.15 }}
                className="whitespace-nowrap"
              >
                {caught
                  ? "You won my heart ♡"
                  : dodges === MAX_DODGES
                    ? "Okay, you win! 💗"
                    : taunts[dodges]}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Heart celebration */}
          <AnimatePresence>
            {caught && (
              <motion.div
                className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {["♡", "♥", "✧", "♡", "♥", "✦", "♡", "♥"].map(
                  (heart, index) => (
                    <motion.span
                      key={index}
                      className="absolute text-2xl text-pink-500 sm:text-3xl"
                      initial={{
                        x: 0,
                        y: 0,
                        scale: 0.3,
                        opacity: 0,
                      }}
                      animate={{
                        x: Math.cos((index / 8) * Math.PI * 2) * 115,
                        y: Math.sin((index / 8) * Math.PI * 2) * 95,
                        scale: [0.3, 1.2, 0.8],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 1.3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 0.3,
                      }}
                    >
                      {heart}
                    </motion.span>
                  ),
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Sweet message after catching the heart */}
          <AnimatePresence>
            {caught && (
              <motion.div
                className="pointer-events-none absolute inset-x-5 bottom-5 z-30 text-center font-serif text-lg italic text-[#874a67] sm:text-xl"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                A little piece of me, always yours. 💌
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Messages and progress */}
        <div className="mt-6 min-h-12">
          <AnimatePresence mode="wait">
            <motion.p
              key={message}
              className="text-sm leading-6 text-[#98627a] sm:text-base"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.2 }}
            >
              {message}
            </motion.p>
          </AnimatePresence>

          {!caught && (
            <>
              <div className="mt-4 flex items-center justify-center gap-2">
                {Array.from({ length: MAX_DODGES + 1 }).map(
                  (_, index) => (
                    <motion.span
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        index <= dodges
                          ? "w-7 bg-pink-400"
                          : "w-4 bg-pink-200"
                      }`}
                      animate={{
                        scale: index === dodges ? [1, 1.12, 1] : 1,
                      }}
                      transition={{
                        duration: 1.1,
                        repeat: index === dodges ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                    />
                  ),
                )}
              </div>

              <p className="mt-3 text-xs text-[#b07b94]">
                {dodges < MAX_DODGES
                  ? `${MAX_DODGES - dodges} little ${
                      MAX_DODGES - dodges === 1 ? "dodge" : "dodges"
                    } before I surrender ♡`
                  : "Okay, birthday boy. Now catch me! ♡"}
              </p>
            </>
          )}
        </div>

        {/* Continue or replay */}
        <AnimatePresence mode="wait">
          {caught ? (
            <motion.div
              key="continue"
              className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <Link
                href="/letter"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-[#a04f76] px-8 py-4 text-sm font-medium text-white shadow-[0_10px_30px_rgba(160,79,118,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#8d4167] hover:shadow-[0_15px_35px_rgba(160,79,118,0.3)]"
              >
                <span>Unlock your surprise</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <button
                type="button"
                onClick={handleReset}
                className="rounded-full px-5 py-3 text-sm text-[#98627a] transition hover:text-[#713750]"
              >
                Play again ↻
              </button>
            </motion.div>
          ) : (
            <motion.p
              key="hint"
              className="mt-7 text-xs tracking-wide text-[#b07b94]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              Made with love, just for you ♡
            </motion.p>
          )}
        </AnimatePresence>

        <Link
          href="/gallery"
          className="mt-8 inline-block text-xs text-[#b07b94] underline decoration-pink-200 underline-offset-4 transition hover:text-[#874a67]"
        >
          ← Back to our little album
        </Link>
      </motion.section>
    </main>
  );
}