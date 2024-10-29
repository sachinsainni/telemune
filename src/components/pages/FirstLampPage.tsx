"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { Button } from "../ui/moving-border";

export function FirstLampPage() {
    return (
        <LampContainer>
            <motion.h1
                initial={{ opacity: 0.5, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0,
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="mt-10 bg-gradient-to-t from-slate-300 to-orange-500 pt-2 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
            >
                Boost your VAS revenue with us
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0.3, y: 120 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.2,
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className=" bg-gradient-to-br from-slate-300 to-slate-500 pt-2 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent md:text-2xl"
            >How Managed VAS delivers superior performance over traditional alternatives
            </motion.h1>
            <motion.h1
                initial={{ opacity: 0.1, y: 140 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.4,
                    duration: 0.4,
                    ease: "easeInOut",
                }}
                className="mt-12 bg-gradient-to-br from-slate-300 to-orange-600 pt-4 bg-clip-text text-center text-xl font-medium tracking-tight text-transparent "
            >
                <Button
                    borderRadius="1.50rem"
                    className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-black text-lg hover:text-orange-600 hover:dark:bg-orange-500 hover:dark:text-black    "
                >
                    Join now
                </Button>

                {/* <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#844016,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 hover:text-orange-500 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-orange-50">
                    Join us
                </button> */}



            </motion.h1>
        </LampContainer>
    );
}
