"use client";

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";

export default function FinalPage() {
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(3);
  const [celebrate, setCelebrate] = useState(false);

  useEffect(() => {
    if (!started || celebrate) return;

    if (count === 0) {
      setCelebrate(true);
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [started, count, celebrate]);

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#4a102d] px-5">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#9d174d_0%,#701a45_35%,#4a102d_75%,#2b0b1d_100%)]" />

      {/* Ambient glow */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/20 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
      />

      {/* Stars / sparkles */}
      <Sparkles />

      <div className="relative z-10 flex w-full max-w-4xl flex-col items-center text-center">
        <AnimatePresence mode="wait">
          {!started ? (
            /* ============================== */
            /* BEFORE START */
            /* ============================== */

            <motion.div
              key="start"
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.1,
              }}
            >
              <motion.div
                className="text-7xl"
                animate={{
                  y: [-8, 8, -8],
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              >
                🎁
              </motion.div>

              <p className="mt-8 text-xs uppercase tracking-[0.4em] text-pink-200/70">
                Okay...
              </p>

              <h1 className="mt-4 font-serif text-5xl font-bold text-white sm:text-7xl">
                One Last Surprise
                <span className="text-pink-300">...</span>
              </h1>

              <p className="mx-auto mt-6 max-w-md text-sm leading-7 text-pink-100/60">
                You made it all the way here. So I saved the biggest one for
                last. ❤️
              </p>

              <motion.button
                onClick={() => setStarted(true)}
                className="mt-10 min-h-[52px] rounded-full bg-white px-8 py-4 text-sm font-semibold text-pink-700 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
                whileHover={{
                  scale: 1.06,
                }}
                whileTap={{
                  scale: 0.96,
                }}
              >
                I'm ready ✨
              </motion.button>
            </motion.div>
          ) : !celebrate ? (
            /* ============================== */
            /* COUNTDOWN */
            /* ============================== */

            <motion.div
              key={`count-${count}`}
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 1.5,
              }}
              transition={{
                duration: 0.5,
              }}
            >
              <p className="text-xs uppercase tracking-[0.4em] text-pink-200/70">
                Something special is coming
              </p>

              <motion.div
                className="mt-8 font-serif text-[140px] font-bold leading-none text-white sm:text-[200px]"
                animate={{
                  scale: [0.9, 1.1, 1],
                }}
              >
                {count}
              </motion.div>

              <p className="mt-8 text-sm text-pink-100/50">
                Make a wish... 💗
              </p>
            </motion.div>
          ) : (
            /* ============================== */
            /* FINAL REVEAL */
            /* ============================== */

            <motion.div
              key="celebrate"
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="w-full"
            >
              {/* Big heart */}
              <motion.div
                className="text-7xl sm:text-8xl"
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: [0, 1.2, 1],
                }}
                transition={{
                  duration: 1,
                  ease: "easeOut",
                }}
              >
                ❤️
              </motion.div>

              {/* Birthday */}
              <motion.p
                className="mt-8 text-sm uppercase tracking-[0.45em] text-pink-200"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                Happy Birthday
              </motion.p>

              <motion.h1
                className="mt-3 font-serif text-6xl font-bold text-white sm:text-8xl"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.9,
                  duration: 0.9,
                  ease: "easeOut",
                }}
              >
                Karan
                <span className="text-pink-300">. ✨</span>
              </motion.h1>

              {/* Divider */}
              <motion.div
                className="mx-auto mt-8 h-px w-24 bg-pink-300/50"
                initial={{ width: 0 }}
                animate={{ width: 96 }}
                transition={{ delay: 1.6 }}
              />

              {/* Message */}
              <motion.p
                className="mx-auto mt-8 max-w-xl font-serif text-xl leading-9 text-pink-100/80 sm:text-2xl"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 1.8,
                  duration: 1,
                }}
              >
                I hope this year gives you a million reasons to smile,
                countless moments to remember, and everything your heart is
                wishing for.
              </motion.p>

              {/* Final love message */}
              <motion.div
                className="mt-12"
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 2.8,
                }}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-pink-300/70">
                  And most importantly...
                </p>

                <motion.p
                  className="mt-4 font-serif text-3xl font-bold text-white sm:text-4xl"
                  animate={{
                    scale: [1, 1.03, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                >
                  I hope you always know how loved you are. ❤️
                </motion.p>
              </motion.div>

              <motion.p
                className="mt-12 text-xs text-pink-200/40"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4 }}
              >
                Made with lots of love, just for you. 🦋
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </main>
  );
}

/* ================================= */
/* SPARKLES */
/* ================================= */

function Sparkles() {
  const sparkles = [
    { left: "8%", top: "15%", delay: 0 },
    { left: "18%", top: "70%", delay: 1.2 },
    { left: "28%", top: "25%", delay: 0.5 },
    { left: "72%", top: "18%", delay: 1.8 },
    { left: "85%", top: "65%", delay: 0.8 },
    { left: "65%", top: "80%", delay: 2 },
    { left: "45%", top: "10%", delay: 1 },
    { left: "92%", top: "35%", delay: 1.5 },
  ];

  return (
    <>
      {sparkles.map((sparkle, index) => (
        <motion.div
          key={index}
          className="pointer-events-none absolute z-0 text-lg text-pink-200/60"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.7, 1.2, 0.7],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 2.5,
            delay: sparkle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          ✦
        </motion.div>
      ))}
    </>
  );
}