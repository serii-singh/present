"use client";

import { motion } from "motion/react";
import Link from "next/link";

const memories = [
  {
    id: 1,
    image: "/memories/memory1.jpg",
    caption: "That smile ❤️",
    rotate: -3,
  },
  {
    id: 2,
    image: "/memories/memory2.jpg",
    caption: "One of my favourite days",
    rotate: 3,
  },
  {
    id: 3,
    image: "/memories/memory3.jpg",
    caption: "Just us 🥹",
    rotate: -2,
  },
  {
    id: 4,
    image: "/memories/memory4.jpg",
    caption: "This moment ✨",
    rotate: 4,
  },
  {
    id: 5,
    image: "/memories/memory5.jpg",
    caption: "Always this happy",
    rotate: -4,
  },
  {
    id: 6,
    image: "/memories/memory6.jpg",
    caption: "A memory I'll keep forever 💗",
    rotate: 2,
  },
];

export default function MemoriesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#fff7fb] px-5 py-16">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute left-[-120px] top-[10%] h-80 w-80 rounded-full bg-pink-200/40 blur-3xl" />

        <div className="absolute bottom-[-120px] right-[-100px] h-96 w-96 rounded-full bg-pink-300/30 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-pink-500">
            Little moments
          </p>

          <h1 className="mt-4 font-serif text-5xl font-bold text-pink-950 sm:text-7xl">
            Our Memories
            <span className="text-pink-500">. 📸</span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-pink-950/60 sm:text-base">
            A collection of little moments that somehow became some of my
            favourite memories.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {memories.map((memory, index) => (
            <MemoryCard
              key={memory.id}
              memory={memory}
              index={index}
            />
          ))}
        </div>

        {/* Bottom message */}
        <motion.div
          className="mx-auto mt-20 max-w-xl text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="text-4xl">💗</div>

          <p className="mt-5 font-serif text-2xl leading-relaxed text-pink-950 sm:text-3xl">
            And somehow, every memory with you feels a little more special.
          </p>

          <Link
            href="/little-things"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-pink-500 px-7 py-4 text-sm font-medium text-white shadow-lg shadow-pink-300/40 transition hover:bg-pink-600"
          >
            There&apos;s more →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

/* ============================= */
/* MEMORY CARD */
/* ============================= */

function MemoryCard({
  memory,
  index,
}: {
  memory: {
    image: string;
    caption: string;
    rotate: number;
  };
  index: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 60,
        rotate: memory.rotate,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate: memory.rotate,
      }}
      viewport={{
        once: true,
        margin: "-50px",
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      whileHover={{
        y: -12,
        rotate: 0,
        scale: 1.03,
      }}
      whileTap={{
        scale: 0.98,
      }}
      className="group cursor-pointer"
    >
      <div className="rounded-[8px] bg-white p-3 pb-5 shadow-[0_15px_45px_rgba(190,24,93,0.14)]">
        {/* Photo */}
        <div className="relative aspect-[4/5] overflow-hidden bg-pink-100">
          <img
            src={memory.image}
            alt={memory.caption}
            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          />

          {/* Pink overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-pink-950/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

          {/* Heart */}
          <motion.div
            className="absolute right-3 top-3 text-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            initial={{ scale: 0.5 }}
            whileHover={{ scale: 1 }}
          >
            💗
          </motion.div>
        </div>

        {/* Caption */}
        <p className="mt-4 text-center font-serif text-lg text-pink-950">
          {memory.caption}
        </p>
      </div>
    </motion.div>
  );
}