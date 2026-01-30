"use client";
import React, { useState, useEffect } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [hovered, setHovered] = useState(false);
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  const movingMap = {
    TOP: "radial-gradient(20.7% 50% at 60% 0%,   #5F9FFF 0%, rgba(95, 159, 255, 0) 100%)",
    LEFT: "radial-gradient(16.6% 43.1% at 0% 60%,  #5F9FFF 0%, rgba(95, 159, 255, 0) 100%)",
    BOTTOM:
      "radial-gradient(20.7% 50% at 60% 100%, #5F9FFF 0%, rgba(95, 159, 255, 0) 100%)",
    RIGHT:
      "radial-gradient(16.2% 41.2% at 100% 60%,#5F9FFF 0%, rgba(95, 159, 255, 0) 100%)",
  };

  const highlight =
    "radial-gradient(75% 181.16% at 50% 50%, #3275F8 0%, rgba(50, 117, 248, 0) 100%)";
  useEffect(() => {
    if (!hovered) {
      const interval = setInterval(() => {
        setDirection((prevState) => rotateDirection(prevState));
      }, duration * 2000);
      return () => clearInterval(interval);
    }
  }, [hovered]);
  return (
    <Tag
      onMouseEnter={(event) => {
        setHovered(true);
      }}
      onMouseLeave={() => setHovered(false)}
      className={cn(
        "relative flex rounded-full border-2  content-center bg-black/20 hover:bg-blue-500 transition duration-900 dark:bg-gray-900/20 items-center flex-col flex-nowrap gap-7 h-min justify-center overflow-visible p-px decoration-clone w-fit shadow-sm",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-black z-10 bg-white dark:text-white dark:bg-gray-900 px-2 py-1 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className={cn(
          "flex-none inset-0 overflow-hidden absolute z-0 rounded-[inherit]"
        )}
        style={{
          filter: "blur(2px)",
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: hovered
            ? [movingMap[direction], highlight]
            : movingMap[direction],
        }}
        transition={{ ease: "linear", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 flex-none inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
