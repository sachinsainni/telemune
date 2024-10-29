"use client"

import React from "react";
import { Meteors } from "../ui/meteors";
import Reveal from "../animation/Reveal";

export function MeteorEffect() {

    const data = [
        {
            "name": "SMART SDP",
            "Description": "Hugely cost-efficient multi-product platform that delivers a revenue-driving portfolio and quickens the pace of service launch.",
            "link": ""
        },
        {
            "name": "Managed VAS",
            "Description": "End-to-end management of VAS Apps on Telemune’s Smart SDP – delivering customized services and quickly boosting revenue growth.",
            "link": ""
        },
        {
            "name": "VAS Apps",
            "Description": "VAS Apps proven across 45+ markets to accelerate business growth and realize long-term revenues.",
            "link": ""
        },
        {
            "name": "Telemune News",
            "Description": "Warid Congo Partners with Telemune for Managed VAS: WAP Portal Services, Low Balance Suite and Phone Backup",
            "link": ""
        },
    ]
    return (
        <div className="mt-2">
            <Reveal>
                <div className="text-neutral-600 dark:text-neutral-200 text-4xl mx-10 ">
                    Services
                </div>
            </Reveal>
            <div className="grid grid-cols-4 gap-6 mx-10 my-16">
                {
                    data?.map((each, index) => {
                        return (
                            <div key={index} className=" w-full relative max-w-xs ">
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-orange-600 to-orange-600 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                                <div className="relative shadow-xl bg-gray-900 border border-gray-800  px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
                                    <div className="h-5 w-5 rounded-full border flex items-center justify-center mb-4 border-gray-500">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="1.5"
                                            stroke="currentColor"
                                            className="h-2 w-2 text-gray-300"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25"
                                            />
                                        </svg>
                                    </div>

                                    <h1 className="font-bold text-xl text-white mb-4 relative z-50">
                                        {each.name}
                                    </h1>

                                    <p className="font-normal text-base text-slate-500 mb-4 relative z-50">
                                        {each.Description}
                                    </p>

                                    <button className="border px-4 py-1 rounded-lg  border-gray-500 text-gray-300">
                                        Explore
                                    </button>

                                    {/* Meaty part - Meteor effect */}
                                    <Meteors number={20} />
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
