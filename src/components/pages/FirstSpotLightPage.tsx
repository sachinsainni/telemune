"use client"

import React from "react";
import { motion } from "framer-motion"
import { Spotlight } from "../ui/SpotLight";
import Reveal from "../animation/Reveal";

export function FirstSpotLightPage() {
  return (
    <div className="md:h-[35rem] h-[20rem]  w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="orange"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">

        <motion.h1
          variants={{
            hidden: { opacity: 0, y: -10 },
            visible: { opacity: 1, y: 0 }
          }}
          initial="hidden"
          animate="visible"

          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Partnering <br /> with mobile operators
        </motion.h1>

        <Reveal>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Present in 45 markets across four continents.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
