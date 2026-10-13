"use client";

import { motion } from "motion/react";
import { useState } from "react";
import Link from "next/link";

export default function LetterPage() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fff8fb] px-5 py-16">
      {/* Soft background */}
      <div className="pointer-events-none fixed inset-0">
        <motion.div
          className="absolute left-[-100px] top-[10%] h-80 w-80 rounded-full bg-pink-200/30 blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-rose-200/30 blur-3xl"
          animate={{
            scale: [1.15, 1, 1.15],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <FloatingHeart
        className="left-[8%] top-[20%]"
        delay={0}
      />

      <FloatingHeart
        className="right-[8%] top-[25%]"
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

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-8rem)] max-w-3xl flex-col items-center justify-center">
        {!opened ? (
          /* ============================= */
          /* ENVELOPE */
          /* ============================= */

          <motion.div
            className="flex w-full flex-col items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-pink-500">
              One last thing
            </p>

            <h1 className="mt-4 text-center font-serif text-5xl font-bold text-pink-950 sm:text-6xl">
              A Letter For You
              <span className="text-pink-500"> 💌</span>
            </h1>

            <p className="mt-5 text-center text-sm text-pink-950/60">
              Some things are easier to write than to say.
            </p>

            {/* Envelope */}
            <motion.button
              onClick={() => setOpened(true)}
              className="group relative mt-14 h-[250px] w-full max-w-[380px]"
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.97 }}
            >
              {/* Envelope shadow */}
              <div className="absolute bottom-0 left-1/2 h-8 w-[85%] -translate-x-1/2 rounded-full bg-pink-300/30 blur-2xl" />

              {/* Envelope body */}
              <div className="absolute bottom-0 left-0 h-[210px] w-full rounded-2xl bg-gradient-to-br from-pink-200 to-pink-300 shadow-[0_25px_60px_rgba(190,24,93,0.2)]" />

              {/* Letter inside */}
              <motion.div
                className="absolute left-[8%] top-[15px] z-10 h-[190px] w-[84%] rounded-xl bg-[#fffdf8] p-6 shadow-lg"
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="text-left font-serif text-pink-950">
                  <p className="text-sm">Dear you,</p>

                  <div className="mt-5 space-y-2">
                    <div className="h-2 w-[85%] rounded bg-pink-100" />
                    <div className="h-2 w-[95%] rounded bg-pink-100" />
                    <div className="h-2 w-[70%] rounded bg-pink-100" />
                    <div className="h-2 w-[90%] rounded bg-pink-100" />
                  </div>

                  <p className="mt-6 text-right text-xl">♡</p>
                </div>
              </motion.div>

              {/* Envelope flap */}
              <div
                className="
                  absolute
                  left-0
                  top-0
                  z-20
                  h-0
                  w-0
                  border-l-[190px]
                  border-r-[190px]
                  border-t-[125px]
                  border-l-transparent
                  border-r-transparent
                  border-t-pink-400
                  sm:border-l-[190px]
                  sm:border-r-[190px]
                "
              />

              {/* Heart seal */}
              <motion.div
                className="absolute left-1/2 top-[105px] z-30 flex h-14 w-14 -translate-x-1/2 items-center justify-center rounded-full bg-white shadow-lg"
                animate={{
                  scale: [1, 1.08, 1],
                }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                }}
              >
                💗
              </motion.div>
            </motion.button>

            <motion.p
              className="mt-8 text-sm font-medium text-pink-500"
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              Tap the letter to open it ✨
            </motion.p>
          </motion.div>
        ) : (
          /* ============================= */
          /* LETTER */
          /* ============================= */

          <motion.div
            className="w-full"
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >
            {/* Letter paper */}
            <div
              className="
                relative
                mx-auto
                max-w-2xl
                overflow-hidden
                rounded-[6px]
                bg-[#fffdf8]
                px-7
                py-12
                shadow-[0_25px_80px_rgba(120,30,70,0.12)]
                sm:px-14
                sm:py-16
              "
            >
              {/* Paper decoration */}
              <div className="absolute left-0 top-0 h-2 w-full bg-gradient-to-r from-pink-300 via-pink-500 to-pink-300" />

              <div className="absolute right-6 top-6 text-2xl text-pink-200">
                ♡
              </div>

              {/* Letter */}
              <div className="font-serif text-pink-950">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg"
                >
                  Dear Karan,
                </motion.p>

                <LetterParagraph delay={0.8}>
                  I don't think I say it enough and I even if I say I can't say it enough , but having you in my life
                  means more to me than I can properly put into words.
                </LetterParagraph>

                <LetterParagraph delay={1.5}>
                  We've shared moments together. Some were
                  beautiful, some were completely silly, and some were 
                  downright embarrassing. But every single one of those moments
                  has been a treasure to me.
                </LetterParagraph>

                <LetterParagraph delay={2.2}>
                    I want you to know that I see you. I see the effort you put into everything you do, the kindness you show to those around you, and the love you give so freely. You are truly one of a kind.
                </LetterParagraph>

                <LetterParagraph delay={2.9}>
                  I hope this year brings you everything you've been wishing
                  for. I hope you laugh more, dream bigger, and never forget
                  how incredibly special you are.
                </LetterParagraph>

                <LetterParagraph delay={3.6}>
                  And selfishly, I hope I get to be there with you for many more of
                  those moments.
                </LetterParagraph>

                <LetterParagraph delay={4.3}>
                  Thank you for being there for me ❤️ I love you more than words can say ❤️ Hope we can make more memories together and I hope I try to make you feel as special as you are to me ❤️
                  </LetterParagraph>

                  <LetterParagraph delay={4.8}>
                 I also want to say that I am sorry for all the times I have hurt you and I promise to try to be a better person for you ❤️ I just want to let you know that I am always there for you ❤️ .
                </LetterParagraph>
                  
                <LetterParagraph delay={4.8}>
                  Happy Birthday Karan ❤️
                </LetterParagraph>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 5 }}
                  className="mt-12"
                >
                    <p className="text-lg">From Serii</p>

                  <p className="mt-2 text-3xl font-bold text-pink-600">
                    With all my love ❤️ 
                  </p>
                </motion.div>
              </div>

              {/* Bottom decoration */}
              <div className="mt-14 text-center text-xl tracking-[0.5em] text-pink-300">
                ♡ ✦ ♡
              </div>
            </div>

            {/* Final button */}
            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5.5 }}
            >
              <p className="font-serif text-xl text-pink-950/60">
                But... I saved one more surprise for you.
              </p>

              <Link
                href="/more"
                className="
                  mt-6
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
                One last thing 🎁
                <span>→</span>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </main>
  );
}

/* ============================= */
/* LETTER PARAGRAPH */
/* ============================= */

function LetterParagraph({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  return (
    <motion.p
      className="mt-7 text-[16px] leading-8 text-pink-950/75 sm:text-lg sm:leading-9"
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay,
        duration: 0.8,
      }}
    >
      {children}
    </motion.p>
  );
}

/* ============================= */
/* FLOATING HEART */
/* ============================= */

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