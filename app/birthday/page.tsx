"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";

const memories = [
  {
    src: "/images/pic1.jpeg",
    caption: "That smile ❤️",
  },
  {
    src: "/images/pic2.jpeg",
    caption: "One of my favourite days",
  },
  {
    src: "/images/pic3.jpeg",
    caption: "Just us 🥹",
  },
  {
    src: "/images/pic4.jpeg",
    caption: "This moment ✨",
  },
  {
    src: "/images/pic5.jpeg",
    caption: "Always this happy",
  },
];

export default function BirthdayPage() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const nextMemory = () => {
    setActiveIndex((current) => (current + 1) % memories.length);
  };

  const previousMemory = () => {
    setActiveIndex(
      (current) => (current - 1 + memories.length) % memories.length
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] px-5 py-16">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[-100px] top-[10%] h-72 w-72 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="absolute bottom-[-100px] right-[-80px] h-80 w-80 rounded-full bg-pink-300/30 blur-3xl" />
        <div className="absolute left-1/2 top-[40%] h-60 w-60 -translate-x-1/2 rounded-full bg-rose-100/60 blur-3xl" />
      </div>

      {/* Floating hearts */}
      <FloatingHeart className="left-[8%] top-[15%]" delay={0} />
      <FloatingHeart className="right-[10%] top-[25%]" delay={1} />
      <FloatingHeart className="left-[15%] bottom-[20%]" delay={2} />
      <FloatingHeart className="right-[15%] bottom-[15%]" delay={1.5} />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Heading */}
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
            It&apos;s Your Day
            <span className="text-pink-500">. 💗</span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-xl text-base leading-7 text-pink-950/60 sm:text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Today isn&apos;t just another day. It&apos;s the day someone
            incredibly special came into this world.
          </motion.p>
        </motion.div>

        {/* 3D Flip Card */}
        <motion.div
          className="mx-auto mt-14 max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{ perspective: 1600 }}
        >
          <motion.div
            className="relative min-h-[490px] sm:min-h-[560px]"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {/* FRONT FACE */}
            <div
              onClick={() => setIsFlipped(true)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setIsFlipped(true);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label="Flip the birthday card to see our memories"
              aria-hidden={isFlipped}
              className={`absolute inset-0 cursor-pointer rounded-[36px] outline-none focus-visible:ring-4 focus-visible:ring-pink-300 ${
                isFlipped ? "pointer-events-none" : ""
              }`}
              style={{
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-[36px] border border-white/80 bg-white/60 p-3 shadow-[0_25px_80px_rgba(190,24,93,0.15)] backdrop-blur-xl">
                {/* Image placeholder */}
                <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-[28px] bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300">
                  <div className="text-center">
                    <motion.div
                      className="text-7xl"
                      animate={{ y: [-5, 5, -5] }}
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

                    <p className="mt-3 text-xs tracking-wide text-pink-600/60">
                      Tap anywhere on this card ✨
                    </p>
                  </div>

                  <motion.div
                    className="absolute right-5 top-5 text-3xl"
                    animate={{ rotate: [-8, 8, -8] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    💕
                  </motion.div>

                  <motion.div
                    className="absolute bottom-5 left-5 text-xl"
                    animate={{ y: [0, -6, 0], rotate: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    🦋
                  </motion.div>
                </div>

                {/* Front text */}
                <div className="shrink-0 px-4 pb-5 pt-6 text-center sm:px-5 sm:pb-7 sm:pt-7">
                  <p className="text-xs uppercase tracking-[0.25em] text-pink-500">
                    A little reminder
                  </p>

                  <h2 className="mt-3 font-serif text-3xl font-bold text-pink-950">
                    I love you and I&apos;ll never stop reminding you of it
                  </h2>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-pink-950/60">
                    More than you probably realise .
                  </p>

                  <motion.p
                    className="mt-4 text-xs font-medium text-pink-500"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    ✨ Tap to reveal our memories ✨
                  </motion.p>
                </div>
              </div>
            </div>

            {/* BACK FACE: Photo carousel */}
            <div
              aria-hidden={!isFlipped}
              className={`absolute inset-0 rounded-[36px] ${
                isFlipped ? "" : "pointer-events-none"
              }`}
              style={{
                transform: "rotateY(180deg)",
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[36px] border border-white/80 bg-white/80 p-3 shadow-[0_25px_80px_rgba(190,24,93,0.18)] backdrop-blur-xl sm:p-4">
                {/* Carousel header */}
                <div className="shrink-0 px-2 pb-3 pt-3 text-center">
                  <p className="text-xs uppercase tracking-[0.3em] text-pink-500">
                    A little trip down memory lane
                  </p>

                  <h2 className="mt-2 font-serif text-2xl font-bold text-pink-950 sm:text-3xl">
                    Our Little World 💗
                  </h2>
                </div>

                {/* Image carousel */}
                <div className="relative min-h-0 flex-1 overflow-hidden rounded-[26px] bg-gradient-to-br from-pink-100 via-rose-50 to-pink-200">
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={activeIndex}
                      className="absolute inset-0"
                      initial={{ opacity: 0, x: 45, scale: 0.98 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -45, scale: 0.98 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      drag="x"
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.15}
                      onDragEnd={(_, info) => {
                        if (info.offset.x < -50) nextMemory();
                        if (info.offset.x > 50) previousMemory();
                      }}
                    >
                      <img
                        src={memories[activeIndex].src}
                        alt={memories[activeIndex].caption}
                        draggable={false}
                        className="h-full w-full select-none object-cover"
                      />

                      {/* Caption overlay */}
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent px-5 pb-6 pt-16">
                        <p className="text-center font-serif text-xl text-white drop-shadow sm:text-2xl">
                          {memories[activeIndex].caption}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Previous */}
                  <button
                    type="button"
                    onClick={previousMemory}
                    aria-label="Previous memory"
                    className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/75 text-xl text-pink-700 shadow-md backdrop-blur transition hover:scale-110 hover:bg-white"
                  >
                    ‹
                  </button>

                  {/* Next */}
                  <button
                    type="button"
                    onClick={nextMemory}
                    aria-label="Next memory"
                    className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-white/75 text-xl text-pink-700 shadow-md backdrop-blur transition hover:scale-110 hover:bg-white"
                  >
                    ›
                  </button>

                  {/* Image count */}
                  <div className="absolute right-4 top-4 z-10 rounded-full bg-black/30 px-3 py-1 text-xs text-white backdrop-blur-sm">
                    {activeIndex + 1} / {memories.length}
                  </div>
                </div>

                {/* Dots */}
                <div className="flex shrink-0 items-center justify-center gap-2 py-4">
                  {memories.map((memory, index) => (
                    <button
                      key={memory.src}
                      type="button"
                      onClick={() => setActiveIndex(index)}
                      aria-label={`View memory ${index + 1}`}
                      aria-current={activeIndex === index ? "true" : undefined}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === index
                          ? "w-7 bg-pink-500"
                          : "w-2.5 bg-pink-200 hover:bg-pink-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Back controls */}
                <div className="flex shrink-0 items-center justify-between gap-2 border-t border-pink-100 px-1 pt-3 pb-2">
                  <button
                    type="button"
                    onClick={() => setIsFlipped(false)}
                    className="rounded-full px-3 py-2 text-xs font-medium text-pink-600 transition hover:bg-pink-50 sm:px-4 sm:text-sm"
                  >
                    ↶ Flip back
                  </button>

                  <p className="text-center text-xs text-pink-400">
                    Made of little moments ♡
                  </p>

                  <span className="w-3" aria-hidden="true" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Continue */}
        <motion.div
          className="mt-12 flex flex-col items-center justify-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <Link
            href="/details"
            className="group flex min-h-12 items-center gap-3 rounded-full bg-pink-500 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-pink-300/40 transition-all hover:bg-pink-600 hover:shadow-xl"
          >
            <span>See Our Memories</span>

            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>

          <p className="text-xs text-pink-400/80">
             💌  💌  💌  💌  💌  💌  💌
          </p>
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