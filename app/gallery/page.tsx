
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";


const photos = [
  { src: "/images/img1.jpeg", caption: "One of my favourite memories 💗" },
  { src: "/images/img2.jpeg", caption: "You make ordinary days special 🦋" },
  { src: "/images/img3.jpeg", caption: "My favourite person, always 🥹" },
  { src: "/images/img4.jpeg", caption: "A little moment, a lot of love 💌" },
  { src: "/images/img5.jpeg", caption: "If I could, I'd relive this forever ✨" },
  { src: "/images/img6.jpeg", caption: "Us, and all the memories yet to come 🤍" },
  { src: "/images/img7.jpeg", caption: "Another little piece of us 💕" },
  { src: "/images/img8.jpeg", caption: "My favourite kind of happiness 🌷" },
  { src: "/images/img9.jpeg", caption: "A moment I want to keep forever 💗" },
  { src: "/images/img10.jpeg", caption: "You make life sweeter 🍓" },
  { src: "/images/img11.jpeg", caption: "One for the memory books 🥹" },
  { src: "/images/img12.jpeg", caption: "Just us, just right 🤍" },
  { src: "/images/img13.jpeg", caption: "A little memory, a lot of love 💌" },
  { src: "/images/img14.jpeg", caption: "My favourite person to make memories with 🦋" },
  { src: "/images/img15.jpeg", caption: "I'd choose this moment again ✨" },
  { src: "/images/img16.jpeg", caption: "More memories with you, please 💗" },
  { src: "/images/img17.jpeg", caption: "Our story is still unfolding ♡" },
];

const firstRow = [...photos, ...photos, ...photos];
const secondRow = [...photos].reverse();
const secondLoop = [...secondRow, ...secondRow, ...secondRow];

export default function AlbumPage() {
  const [selected, setSelected] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);

  const closeViewer = () => setSelected(null);

  const showPrevious = () => {
    setSelected((current) =>
      current === null
        ? null
        : (current - 1 + photos.length) % photos.length,
    );
  };

  const showNext = () => {
    setSelected((current) =>
      current === null ? null : (current + 1) % photos.length,
    );
  };

  useEffect(() => {
    if (selected === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeViewer();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fff5f8] via-[#fff0f5] to-[#fce5ef] text-[#68364f]">
      {/* Background decorations */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-pink-200/35 blur-[100px]" />
        <div className="absolute -right-32 top-[35%] h-96 w-96 rounded-full bg-rose-200/35 blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-purple-100/40 blur-[100px]" />

        {["♡", "✧", "♡", "✦", "♡", "✧"].map((symbol, index) => (
          <motion.span
            key={index}
            className="absolute select-none text-pink-300/60"
            style={{
              left: `${8 + index * 16}%`,
              top: `${12 + ((index * 13) % 72)}%`,
              fontSize: index % 2 === 0 ? "24px" : "18px",
            }}
            animate={{ y: [0, -12, 0], opacity: [0.35, 0.8, 0.35] }}
            transition={{
              duration: 4 + index * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: index * 0.3,
            }}
          >
            {symbol}
          </motion.span>
        ))}
      </div>

      {/* Header */}
      <section className="relative z-10 px-5 pb-12 pt-14 text-center sm:px-8 sm:pt-20">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-white/60 px-4 py-2 text-xs uppercase tracking-[0.25em] text-[#a45b7d] shadow-sm backdrop-blur-md sm:text-sm">
            <span>♡</span>
            A little collection of us
            <span>♡</span>
          </span>

          <h1 className="mx-auto max-w-4xl font-serif text-4xl font-medium leading-tight text-[#713750] sm:text-6xl md:text-7xl">
            Our Little Photo Album
            <span className="ml-2 inline-block text-pink-400">♡</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-[#98627a] sm:text-base sm:leading-8">
            A few little pieces of our story, saved here so I can always come
            back to them.
          </p>

          <motion.div
            className="mx-auto mt-7 flex items-center justify-center gap-3 text-pink-300"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="h-px w-12 bg-pink-200" />
            <span className="text-xl">♡</span>
            <span className="h-px w-12 bg-pink-200" />
          </motion.div>
        </motion.div>
      </section>

      {/* Photo carousels */}
      <section
        className="relative z-10 space-y-8 pb-12 sm:space-y-12"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={() => setPaused(true)}
        onTouchEnd={() => setPaused(false)}
      >
        {/* First row */}
        <div className="overflow-hidden py-5">
          <motion.div
            className="flex w-max gap-5 pl-5 sm:gap-8 sm:pl-8"
            animate={{ x: paused ? undefined : ["0%", "-33.3333%"] }}
            transition={{
              duration: 42,
              repeat: Infinity,
              ease: "linear",
            }}
            style={paused ? { transform: "translateX(0)" } : undefined}
          >
            {firstRow.map((photo, index) => {
              const photoIndex = index % photos.length;

              return (
                <motion.button
                  type="button"
                  key={`first-${index}`}
                  onClick={() => setSelected(photoIndex)}
                  className="group relative w-[210px] shrink-0 cursor-pointer text-left outline-none sm:w-[270px] md:w-[300px]"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`Open photo ${photoIndex + 1}`}
                >
                  <div
                    className={`relative rounded-sm bg-white p-3 shadow-[0_12px_35px_rgba(154,83,117,0.15)] transition-shadow duration-500 group-hover:shadow-[0_25px_55px_rgba(154,83,117,0.25)] sm:p-4 ${
                      index % 2 === 0 ? "rotate-[-2deg]" : "rotate-[2deg]"
                    }`}
                  >
                    <div className="relative aspect-[4/5] overflow-hidden bg-pink-100">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 640px) 210px, 300px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      <div className="absolute inset-0 flex items-center justify-center bg-[#57233e]/0 transition-colors duration-500 group-hover:bg-[#57233e]/25">
                        <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/70 bg-white/20 text-2xl text-white opacity-0 backdrop-blur-md transition-opacity duration-300 group-hover:opacity-100">
                          ♡
                        </span>
                      </div>
                    </div>

                    <span className="absolute -top-3 left-1/2 h-6 w-16 -translate-x-1/2 rotate-[-4deg] bg-pink-200/70 shadow-sm" />
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>

        {/* Second row, moving in the opposite direction */}
        <div className="overflow-hidden py-5">
          <motion.div
            className="flex w-max gap-4 pl-5 sm:gap-6 sm:pl-8"
            animate={{ x: paused ? undefined : ["-33.3333%", "0%"] }}
            transition={{
              duration: 48,
              repeat: Infinity,
              ease: "linear",
            }}
            style={paused ? { transform: "translateX(-33.3333%)" } : undefined}
          >
            {secondLoop.map((photo, index) => {
              const photoIndex = photos.findIndex(
                (item) => item.src === photo.src,
              );

              return (
                <motion.button
                  type="button"
                  key={`second-${index}`}
                  onClick={() => setSelected(photoIndex)}
                  className="group w-[165px] shrink-0 cursor-pointer text-left outline-none sm:w-[215px] md:w-[245px]"
                  whileHover={{ y: -6, scale: 1.025 }}
                  whileTap={{ scale: 0.97 }}
                  aria-label={`Open photo ${photoIndex + 1}`}
                >
                  <div className="relative rounded-sm bg-white p-2 shadow-[0_10px_30px_rgba(154,83,117,0.13)] transition-shadow duration-500 group-hover:shadow-xl sm:p-3">
                    <div className="relative aspect-[4/5] overflow-hidden bg-pink-100">
                      <Image
                        src={photo.src}
                        alt={photo.caption}
                        fill
                        sizes="(max-width: 640px) 165px, 245px"
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Closing note */}
      <section className="relative z-10 px-5 pb-16 pt-8 text-center sm:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-xl"
        >
          <span className="text-3xl text-pink-400">♡</span>

          <p className="mt-4 font-serif text-xl italic leading-relaxed text-[#874a67] sm:text-2xl">
            And somehow, my favourite memories are the ones that have you in
            them.
          </p>

          <p className="mt-3 text-sm tracking-wide text-[#b07b94]">
            Here&apos;s to all the memories we haven&apos;t made yet.
          </p>

          <div className="mt-8">
            <Link
              href="/catch-me"
              className="group inline-flex items-center gap-3 rounded-full border border-pink-200 bg-white/70 px-7 py-3.5 text-sm text-[#874a67] shadow-[0_8px_30px_rgba(177,105,140,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-pink-300 hover:bg-white hover:shadow-[0_12px_35px_rgba(177,105,140,0.2)]"
            >
              <span>Continue our story</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Full-screen photo viewer */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#210d19]/95 px-4 py-8 backdrop-blur-xl sm:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeViewer}
          >
            <motion.div
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col items-center"
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
            >
              {/* Close */}
              <button
                type="button"
                onClick={closeViewer}
                aria-label="Close photo viewer"
                className="absolute -right-1 -top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-2xl text-white backdrop-blur-md transition hover:bg-white/20 sm:-right-4 sm:-top-4"
              >
                ×
              </button>

              {/* Previous */}
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Previous photo"
                className="absolute left-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/30 sm:-left-14 sm:h-12 sm:w-12"
              >
                ‹
              </button>

              {/* Image */}
              <div className="relative h-[58vh] max-h-[650px] min-h-[260px] w-full overflow-hidden rounded-md border border-white/15 bg-white/5 shadow-[0_25px_100px_rgba(0,0,0,0.4)] sm:h-[68vh]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selected}
                    className="absolute inset-0"
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <Image
                      src={photos[selected].src}
                      alt={photos[selected].caption}
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 768px"
                      className="object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={showNext}
                aria-label="Next photo"
                className="absolute right-1 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-white/15 text-2xl text-white backdrop-blur-md transition hover:bg-white/30 sm:-right-14 sm:h-12 sm:w-12"
              >
                ›
              </button>

              {/* Viewer caption */}
              <h3 className="mt-5 text-center font-serif text-xl italic text-pink-200 sm:text-2xl">
                {photos[selected].caption}
              </h3>

              <p className="mt-2 text-xs tracking-[0.25em] text-white/50">
                {String(selected + 1).padStart(2, "0")} /{" "}
                {String(photos.length).padStart(2, "0")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
