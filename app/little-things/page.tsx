"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

const notes = [
  {
    emoji: "🌸",
    title: "The little things",
    message:
      "It's not always the big moments. Sometimes it's the smallest things you do that stay with me the longest.",
  },
  {
    emoji: "🥹",
    title: "The way you look at me",
    message:
      "There are moments when you look at me and I just forget whatever I was thinking about.",
  },
  {
    emoji: "😂",
    title: "Our silly moments",
    message:
      "Some of my favourite memories aren't even the planned ones. They're the random, ridiculous moments where we couldn't stop laughing.",
  },
  {
    emoji: "🫶",
    title: "The way you care",
    message:
      "You have this way of caring that makes me feel safe, even when you don't realise you're doing it.",
  },
  {
    emoji: "🌙",
    title: "The quiet moments",
    message:
      "I love that we don't always have to do something. Sometimes simply being together is enough.",
  },
  {
    emoji: "❤️",
    title: "And then there's us",
    message:
      "Out of all the people in this world, I'm really glad that somehow our paths crossed.",
  },
];

export default function LittleThingsPage() {
  const [current, setCurrent] = useState(0);
  const [opened, setOpened] = useState(false);

  const note = notes[current];

  const nextNote = () => {
    setOpened(false);

    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % notes.length);
    }, 200);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff7fb] px-5 py-14 sm:py-20">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <motion.div
          className="absolute left-[-100px] top-[5%] h-80 w-80 rounded-full bg-pink-200/40 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-rose-200/40 blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Floating decorations */}
      <FloatingHeart
        className="left-[8%] top-[18%]"
        delay={0}
      />

      <FloatingHeart
        className="right-[10%] top-[25%]"
        delay={1}
      />

      <FloatingHeart
        className="bottom-[20%] left-[12%]"
        delay={2}
      />

      <FloatingHeart
        className="bottom-[15%] right-[12%]"
        delay={1.5}
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] max-w-4xl flex-col items-center justify-center">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-pink-500">
            Just between us
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold text-pink-950 sm:text-7xl">
            A Few Little Things
            <span className="text-pink-500">. 💗</span>
          </h1>

          <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-pink-950/60 sm:text-base">
            There are some things I probably don't say enough.
          </p>
        </motion.div>

        {/* Note area */}
        <div className="mt-12 flex w-full flex-col items-center">
          <AnimatePresence mode="wait">
            {!opened ? (
              <motion.button
                key={`closed-${current}`}
                onClick={() => setOpened(true)}
                className="
                  relative
                  flex
                  h-[330px]
                  w-full
                  max-w-[340px]
                  flex-col
                  items-center
                  justify-center
                  rounded-[30px]
                  border
                  border-pink-200
                  bg-gradient-to-br
                  from-pink-100
                  to-rose-200
                  shadow-[0_25px_70px_rgba(190,24,93,0.16)]
                "
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: -3,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  rotate: -2,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.9,
                  rotate: 3,
                }}
                whileHover={{
                  scale: 1.03,
                  rotate: 0,
                  y: -6,
                }}
                whileTap={{
                  scale: 0.97,
                }}
              >
                {/* Tape */}
                <div className="absolute left-1/2 top-[-10px] h-10 w-24 -translate-x-1/2 rotate-[-3deg] bg-pink-300/50 backdrop-blur-sm" />

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
                  {note.emoji}
                </motion.div>

                <p className="mt-6 font-serif text-2xl font-bold text-pink-950">
                  {note.title}
                </p>

                <p className="mt-3 text-xs uppercase tracking-[0.25em] text-pink-600">
                  Tap to open
                </p>

                <div className="absolute bottom-5 right-6 text-xl text-pink-400">
                  ♡
                </div>
              </motion.button>
            ) : (
              <motion.div
                key={`open-${current}`}
                className="
                  relative
                  w-full
                  max-w-[520px]
                  rounded-[30px]
                  border
                  border-pink-100
                  bg-white/75
                  p-8
                  shadow-[0_25px_80px_rgba(190,24,93,0.14)]
                  backdrop-blur-xl
                  sm:p-12
                "
                initial={{
                  opacity: 0,
                  scale: 0.9,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                }}
              >
                <div className="text-center">
                  <motion.div
                    className="text-5xl"
                    animate={{
                      scale: [1, 1.15, 1],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                  >
                    {note.emoji}
                  </motion.div>

                  <h2 className="mt-6 font-serif text-3xl font-bold text-pink-950 sm:text-4xl">
                    {note.title}
                  </h2>

                  <p className="mt-6 text-base leading-8 text-pink-950/65 sm:text-lg">
                    {note.message}
                  </p>

                  <div className="mt-8 text-pink-300">
                    ───────── ♡ ─────────
                  </div>

                  <button
                    onClick={nextNote}
                    className="
                      mt-8
                      min-h-[44px]
                      rounded-full
                      bg-pink-500
                      px-7
                      py-3
                      text-sm
                      font-medium
                      text-white
                      shadow-lg
                      shadow-pink-300/30
                      transition
                      hover:bg-pink-600
                    "
                  >
                    One more thing →
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Progress */}
          <div className="mt-8 flex gap-2">
            {notes.map((_, index) => (
              <motion.div
                key={index}
                className="h-1.5 rounded-full bg-pink-300"
                animate={{
                  width: index === current ? 28 : 7,
                  opacity: index === current ? 1 : 0.4,
                }}
              />
            ))}
          </div>
        </div>

        {/* Final transition */}
        {current === notes.length - 1 && opened && (
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="font-serif text-xl text-pink-950/70">
              And there's something else I've been wanting to tell you...
            </p>

            <Link
              href="/letter"
              className="
                mt-6
                inline-flex
                min-h-[44px]
                items-center
                gap-3
                rounded-full
                bg-pink-500
                px-7
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
              Open my letter 💌
              <span>→</span>
            </Link>
          </motion.div>
        )}
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