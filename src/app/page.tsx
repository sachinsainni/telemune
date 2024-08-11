"use client"

import { CoreValue } from "@/components/pages/CoreValue";
import { FirstLampPage } from "@/components/pages/FirstLampPage";
import { FirstSpotLightPage } from "@/components/pages/FirstSpotLightPage";
import { FirstTypewriter } from "@/components/pages/FirstTypeWriter";
import Footer from "@/components/pages/Footer";
import { GlowingCards } from "@/components/pages/GrowingCards";
import { MeteorEffect } from "@/components/pages/MeteorEffect";
import { TopNavbar } from "@/components/pages/TopNavbar";
import Image from "next/image";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.addEventListener('DOMContentLoaded', () => {
      console.log('DOM fully loaded and parsed');
    });

    window.addEventListener('load', () => {
      console.log('Page fully loaded');
    });

  }, [])
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-black">
      <FirstLampPage />
      <CoreValue />
      <MeteorEffect />
    </main>
  );
}
