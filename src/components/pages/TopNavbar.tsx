"use client";
import React, { useState } from "react";
import { motion } from "framer-motion"
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Tooltip, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";
import Image from "next/image";
import logo from '@/images/logoname.webp'
import { usePathname } from "next/navigation";

export function TopNavbar() {
    const pathname = usePathname()
    const icons = {
        chevron: <ChevronDown fill="currentColor" size={16} />,
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        lock: <Lock className="text-success" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
        server: <Server className="text-success" fill="currentColor" size={30} />,
        user: <TagUser className="text-danger" fill="currentColor" size={30} />,
    };
    return (
        <Navbar shouldHideOnScroll maxWidth="full"  >
            <NavbarBrand>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="my-auto ml-4"
                >
                    <Tooltip color="default" content="Home"  offset={15} delay={1000} showArrow size="lg" >
                        <Link href='/'  >
                            <Image
                                alt="logo"
                                src={logo}
                                className="left-0 top-0 h-8 w-36 "
                            />
                        </Link>
                    </Tooltip>
                </motion.div>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <Dropdown  >
                    <NavbarItem>
                        <DropdownTrigger >
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                <NavlinkAmimation delay={0.1}>
                                Features
                                </NavlinkAmimation>
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="ACME scales apps to meet user demand, automagically, based on load."
                            startContent={icons.scale}
                        >
                            Autoscaling
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
                            startContent={icons.activity}
                        >
                            Usage Metrics
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="ACME runs on ACME, join us and others serving requests at web scale."
                            startContent={icons.flash}
                        >
                            Production Ready
                        </DropdownItem>
                        <DropdownItem
                            key="99_uptime"
                            description="Applications stay on the grid with high availability and high uptime guarantees."
                            startContent={icons.server}
                        >
                            +99% Uptime
                        </DropdownItem>
                        <DropdownItem
                            key="supreme_support"
                            description="Overcome any challenge with a supporting team ready to respond."
                            startContent={icons.user}
                        >
                            +Supreme Support
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <NavbarItem>
                    <Link color={`${pathname === 'successStories' ? "primary" : "foreground"}`} href="#">
                        <NavlinkAmimation delay={0.2}>
                            Success Stories
                        </NavlinkAmimation>
                    </Link>
                </NavbarItem>
                <NavbarItem >
                    <Link color={`${pathname === '/customer' ? "primary" : "foreground"}`} href="/customer"  >
                        <NavlinkAmimation delay={0.3}>
                            Customers
                        </NavlinkAmimation>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={`${pathname === '/people' ? "primary" : "foreground"}`} href="/people">
                        <NavlinkAmimation delay={0.4}>
                            People
                        </NavlinkAmimation>
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color={`${pathname === '/about' ? "primary" : "foreground"}`} href="#">
                        <NavlinkAmimation delay={0.5}>
                            About
                        </NavlinkAmimation>
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                {/* <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                </NavbarItem> */}
                <motion.div
                    initial={{ opacity: 0, x:   50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                    className="my-auto ml-4"
                >

                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Contact Us
                    </Button>
                </NavbarItem>
                </motion.div>
            </NavbarContent>
        </Navbar>
    );
}


function NavlinkAmimation({
    children,
    delay
}: {
    children?: string;
    delay?: number;
}) {
    return (
        <motion.div
            variants={{
                hidden: { opacity: 0, y: -75 },
                visible: { opacity: 1, y: 0 }
            }}
            initial="hidden"
            animate="visible"
            transition={{ delay: delay }}
        >
            {children}
        </motion.div>
    )
}






interface ScaleProps extends React.SVGProps<SVGSVGElement> {
    fill?: string;
    size?: number | string;
    height?: number | string;
    width?: number | string;
}


const ChevronDown: React.FC<ScaleProps> = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            fill="none"
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

const Lock: React.FC<ScaleProps> = ({ fill, size, height, width, ...props }) => {
    const color = fill;

    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g transform="translate(3.5 2)">
                <path
                    d="M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(3.85 0.75)"
                />
                <path
                    d="M.5,0V2.221"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(7.91 12.156)"
                />
                <path
                    d="M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z"
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth={1.5}
                    transform="translate(0.75 6.824)"
                />
            </g>
        </svg>
    );
};

const Activity: React.FC<ScaleProps> = ({ fill, size, height, width, ...props }) => {
    return (
        <svg
            height={size || height || 24}
            viewBox="0 0 24 24"
            width={size || width || 24}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <g
                fill="none"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            >
                <path d="M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78" />
                <path d="M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z" />
                <path d="M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187" />
            </g>
        </svg>
    );
};

const Flash: React.FC<ScaleProps> = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
        </svg>
    );
};

const Server: React.FC<ScaleProps> = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};

const TagUser: React.FC<ScaleProps> = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={1.5}
            />
            <path
                d="M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};


const Scale: React.FC<ScaleProps> = ({
    fill = "currentColor",
    size,
    height,
    width,
    ...props
}) => {
    return (
        <svg
            fill="none"
            height={size || height}
            viewBox="0 0 24 24"
            width={size || width}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path
                d="M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
            <path
                d="M18 10V6h-4M6 14v4h4"
                stroke={fill}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
            />
        </svg>
    );
};