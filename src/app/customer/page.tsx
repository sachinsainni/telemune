"use client"

import Reveal from '@/components/animation/Reveal'
import { FirstSpotLightPage } from '@/components/pages/FirstSpotLightPage'
import { InfiniteMovingCards } from '@/components/ui/infinite-moving-cards'
import { Divider } from '@nextui-org/react'
import React, { useRef } from 'react'

const testimonials = [
  {
    quote:
      "“We are extremely satisfied to partner with a provider who specializes in VAS industry and provides appropriate, cost effective 'out of the box' solutions. Telemune is not only a company with vast domain experience; but also a great partner that is willing to go that extra mile.” ",
    name: "Orange Niger",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "Continuously expanding Ring Back Tone Platform deployed at 35 markets in Caribbean region Entertaining over 10 million subscribers with CRBT, Ad RBT and AVC",
    name: "Digicel",
    title: "Hamlet",
  },
  {
    quote: "Successfully serving over 1.5 million subscribers with bundled services on VAS SDP Increased revenue through bundle of services namely SMS Portal, Voice Portal, CRBT, USSD GW, MCA, Pay4Me, Voice Mail, Voice SMS and Mobile 2 Internet",
    name: "telecel",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "Serving operator base across 9 African Nations. Helping over 20 million subscribers under unavailable scenarios with Call Completion Suite : Missed Call Information, Voice Mail, Voice SMS",
    name: "Airtel",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "LIME has partnered with Telemune for over 4 years to implement various VAS services across our Caribbean operations. Their innovative and feature-rich solutions have significantly boosted customer loyalty and our top-line. Telemune’s managed service approach, handling everything from platform development to customer management, has allowed us to focus on our core activities, thereby enhancing business efficiency.",
    name: "LIME Jamaica",
    title: "Moby-Dick",
  },
];
export default function page() {

  return (
    <div className='mx-12' >
      <FirstSpotLightPage />
      <Divider className="my-4" />
      <Reveal>
        <p className="text-neutral-600 dark:text-white text-lg mt-6 text-justify ">
        Our customers partner with us because we deliver value, revenue growth and faster service. We are transparent, consistent and steadfast in delivering on our commitments and continuing to add value to our customers’ business. With Managed VAS, we enable a range of services to be launched and managed end-to-end with zero capex – and we collaborate closely with our customers to ensure services are customized specific market requirements.
        </p>
      </Reveal>
     
      <Reveal>
        <p className="text-neutral-600 dark:text-white text-lg mt-6 text-justify ">
          We have deployed our Managed VAS, products and solutions for the following mobile operators.
        </p>
      </Reveal>
      <Divider className="my-4" />
      <Reveal>
        <p className="text-neutral-600 dark:text-orange-600 text-2xl mt-6 text-center ">
          Customers Deployments
        </p>
      </Reveal>
      <div className=" rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>


    </div>
  )
}

