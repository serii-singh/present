"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function LandingPage() {
  const [isMobile, setIsMobile] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const butterflyX = useSpring(mouseX, {
    stiffness: 35,
    damping: 12,
    mass: 0.8,
  });

  const butterflyY = useSpring(mouseY, {
    stiffness: 35,
    damping: 12,
    mass: 0.8,
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handlePointerMove = (event: PointerEvent) => {
      mouseX.set(event.clientX - window.innerWidth / 2);
      mouseY.set(event.clientY - window.innerHeight / 2);
    };

    window.addEventListener("pointermove", handlePointerMove);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, [isMobile, mouseX, mouseY]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fdf2f8]">
      {/* DREAMY BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#fce7f3_0%,#fbcfe8_35%,#f9a8d4_70%,#ec4899_100%)]" />

      {/* Soft background glow */}
      <motion.div
        className="absolute left-[10%] top-[15%] h-40 w-40 rounded-full bg-pink-300/30 blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute bottom-[10%] right-[10%] h-52 w-52 rounded-full bg-pink-500/20 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* ========================= */}
      {/* BUTTERFLY */}
      {/* ========================= */}

      {isMobile ? (
        <MobileButterfly />
      ) : (
        <motion.div
          className="pointer-events-none absolute left-1/2 top-1/2 z-20"
          style={{
            x: butterflyX,
            y: butterflyY,
          }}
        >
          <Butterfly />
        </motion.div>
      )}

      {/* ========================= */}
      {/* CENTER CARD */}
      {/* ========================= */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-5">
        <motion.button
          className="
            group
            relative
            flex
            w-full
            max-w-[340px]
            flex-col
            items-center
            justify-center
            overflow-hidden
            rounded-[32px]
            border
            border-white/70
            bg-white/40
            px-8
            py-12
            text-center
            shadow-[0_20px_80px_rgba(190,24,93,0.25)]
            backdrop-blur-xl
          "
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
            duration: 1,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.04,
            y: -6,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          {/* Card glow */}
          <div
            className="
              absolute
              -inset-10
              -z-10
              rounded-full
              bg-pink-400/30
              blur-3xl
              transition-all
              duration-700
              group-hover:bg-pink-500/50
            "
          />

          {/* Heart */}
          <motion.div
            className="mb-6 text-6xl"
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            💗
          </motion.div>

          <p className="text-xs font-medium uppercase tracking-[0.3em] text-pink-600">
            A little surprise
          </p>

          <h1 className="mt-3 font-serif text-4xl font-bold text-pink-950 sm:text-5xl">
            For You
          </h1>

          <p className="mt-5 max-w-[240px] text-sm leading-6 text-pink-900/60">
           I have made something very special for you...
          </p>

          <motion.div
            className="
              mt-8
              rounded-full
              border
              border-pink-300/60
              bg-white/50
              px-6
              py-3
              text-sm
              font-medium
              text-pink-700
            "
            whileHover={{
              backgroundColor: "#ec4899",
              color: "#ffffff",
            }}
          >
          <Link
  href="/birthday"
>
  Open Your Surprise ✨
</Link>
          </motion.div>
        </motion.button>
      </div>

      {/* Floating hearts */}
      <FloatingHeart
        className="left-[12%] top-[20%]"
        delay={0}
      />

      <FloatingHeart
        className="right-[12%] top-[18%]"
        delay={1}
      />

      <FloatingHeart
        className="bottom-[18%] left-[15%]"
        delay={2}
      />

      <FloatingHeart
        className="bottom-[22%] right-[15%]"
        delay={1.5}
      />
    </main>
  );
}

/* ================================= */
/* BUTTERFLY */
/* ================================= */

function Butterfly() {
  return (
    <motion.div
      className="relative -translate-x-1/2 -translate-y-1/2"
      animate={{
        y: [-8, 8, -8],
        rotate: [-5, 5, -5],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Left wing */}
      <motion.div
        className="
          absolute
          right-[7px]
          top-[-18px]
          h-[38px]
          w-[27px]
          rounded-[70%_30%_70%_30%]
          bg-gradient-to-br
          from-pink-300
          to-pink-600
          shadow-lg
        "
        animate={{
          rotateY: [0, 55, 0],
        }}
        transition={{
          duration: 0.45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "right center",
        }}
      />

      {/* Right wing */}
      <motion.div
        className="
          absolute
          left-[7px]
          top-[-18px]
          h-[38px]
          w-[27px]
          rounded-[30%_70%_30%_70%]
          bg-gradient-to-bl
          from-pink-300
          to-pink-600
          shadow-lg
        "
        animate={{
          rotateY: [0, -55, 0],
        }}
        transition={{
          duration: 0.45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          transformOrigin: "left center",
        }}
      />

      {/* Body */}
      <div className="relative z-10 h-[35px] w-[7px] rounded-full bg-pink-950" />

      {/* Antennas */}
      <div className="absolute -top-5 left-1/2 h-5 w-[1px] -translate-x-1/2 -rotate-[25deg] bg-pink-950" />

      <div className="absolute -top-5 left-1/2 h-5 w-[1px] -translate-x-1/2 rotate-[25deg] bg-pink-950" />
    </motion.div>
  );
}

/* ================================= */
/* MOBILE BUTTERFLY */
/* ================================= */

function MobileButterfly() {
  return (
    <motion.div
      className="pointer-events-none absolute left-1/2 top-1/2 z-20"
      initial={{
        x: -130,
        y: -100,
      }}
      animate={{
        x: [-130, 100, 130, -100, -130],
        y: [-100, -140, 100, 130, -100],
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <Butterfly />
    </motion.div>
  );
}

/* ================================= */
/* FLOATING HEART */
/* ================================= */

function FloatingHeart({
  className,
  delay,
}: {
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      className={`absolute text-2xl text-pink-500/50 ${className}`}
      animate={{
        y: [-10, 10, -10],
        rotate: [-10, 10, -10],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 3,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      ♡
    </motion.div>
  );
}