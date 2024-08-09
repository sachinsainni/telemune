"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from '@/images/logoname.webp'
import { usePathname } from "next/navigation";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
  link
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
  link?: string;
}) => {
  const pathname = usePathname()
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <Link href={link || ''}>
        <motion.p
          transition={{ duration: 0.3 }}
          className={`cursor-pointer text-black hover:text-orange-600 hover:dark:text-orange-600  ${pathname === link ? 'text-orange-600 dark:text-orange-600' : 'dark:text-white  text-white'}`}
        >
          {item}
        </motion.p>
      </Link>
      {active !== null && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && children && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4  ">
              <motion.div
                transition={transition}
                layoutId="active" // layoutId ensures smooth animation
                className="bg-white dark:bg-black backdrop-blur-sm rounded-2xl overflow-hidden border border-black/[0.2] dark:border-white/[0.2] shadow-xl"
              >
                <motion.div
                  layout // layout ensures smooth animation
                  className="w-max h-full p-4 "
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const pathname = usePathname()

  return (
    <div className="flex justify-between bg-gradient-to-t from-slate-950 to-black ">
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2 }}
        className="my-auto ml-4"
      >
        <Link href='/' className={`link ${pathname === '/' ? 'active' : ''}`} >
          <Image
            alt="logo"
            src={logo}
            className="left-0 top-0 h-8 w-36 "
          />
        </Link>
      </motion.div>
      <motion.nav
        variants={{
          hidden: { opacity: 0, y: -75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        onMouseLeave={() => setActive(null)} // resets the state
        className={`relative shadow-input flex justify-center space-x-8 px-6 py-4`}
      >

        {children}
      </motion.nav>
      <div className=" h-8 w-36 " >

      </div>
    </div>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="text-neutral-700 dark:text-neutral-200 hover:text-black hover:underline"

    >
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 5 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.3, delay: 0.25 }}
      >
        {children}
      </motion.p>
    </Link>
  );
};
