"use client";
import React from "react";
import {
    GlowingStarsBackgroundCard,
    GlowingStarsDescription,
    GlowingStarsTitle,
} from "../ui/glowing-stars";

export function GlowingCards() {

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
        <div className="flex py-20 items-center justify-center antialiased space-x-2">
            {
                data?.map((each,index) => {
                    return (
                        <GlowingStarsBackgroundCard key={index}>
                            <GlowingStarsTitle>{each.name}</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription>
                                   {each.Description}
                                </GlowingStarsDescription>
                                <div className="h-8 w-8 rounded-full bg-[hsla(0,0%,100%,.1)] flex items-center justify-center">
                                    <Icon />
                                </div>
                            </div>
                        </GlowingStarsBackgroundCard>
                    )
                })
            }

        </div>
    );
}

const Icon = () => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-white stroke-2"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
        </svg>
    );
};
