"use client";
import { Button } from "../ui/moving-border";
import { TypewriterEffectSmooth } from "../ui/typewriter-effect";
export function FirstTypewriter() {
    const words = [
        {
            text: "Maximize",
        },
        {
            text: "your",
        },
        {
            text: "VAS",
        },
        {
            text: "revenue",
        },
        {
            text: "with our",
        },
        {
            text: "solutions.",
            className: "text-orange-600 dark:text-orange-600",
        },
    ];
    return (
        <div className="flex flex-col items-center justify-center h-[40rem]  ">
            <p className="text-neutral-600 dark:text-neutral-200 text-xl   ">
                Grow Your VAS Revenues
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
                {/* <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                    Join now
                </button> */}
                {/* <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                    Join now
                </button> */}
                <Button
                    borderRadius="1.75rem"
                    className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800 text-lg hover:text-orange-600 hover:dark:text-orange-600"
                >
                    Join now
                </Button>
            </div>
        </div>
    );
}
