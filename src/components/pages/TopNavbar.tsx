"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import Image from "next/image";
import logo from '@/images/TelemuneLogo.webp'

export function TopNavbar() {
    return (
        <div className="relative w-full flex items-center justify-center">
            <Navbar className="top-0 min-w-full" />
            {/* <p className="text-black dark:text-white">
        The Navbar will show on top of the page
      </p> */}
        </div>
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-30", className)}
        >
            
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Managed VAS">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/web-dev">Managed Service</HoveredLink>
                        <HoveredLink href="/interface-design">VAS Apps</HoveredLink>
                        <HoveredLink href="/seo">Smart SDP</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Success Stories" />
                <MenuItem setActive={setActive} active={active} item="Customers" link="/customer" />
                <MenuItem setActive={setActive} active={active} item="People" />
                <MenuItem setActive={setActive} active={active} item="About" />
                {/* <MenuItem setActive={setActive} active={active} item="Pricing">
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem> */}
            </Menu>
        </div>
    );
}
