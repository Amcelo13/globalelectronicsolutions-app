import * as React from "react";
import { motion } from "framer-motion";

const pathLength = 1000; // Update this based on your path's actual length

const SvgComponent = (props: any) => {
  const { stroke = "#fff", rotate = 180 } = props;
  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={88}
      height={288}
      fill="none"
      className={`${rotate !== 180 ? "" : "rotate-180"} lg:right-52 xl:right-60 -top-[28%] xl:-top-[30%] z-10 max-xl:w-12`}
      {...props}
    >
      <motion.path
        fill="transparent"
        stroke={stroke}
        strokeDasharray={pathLength} // Adjust this value based on your path length
        strokeDashoffset={pathLength} // Same as above, used to hide the path
        strokeLinecap="round"
        strokeWidth={3}
        d="M31.204 3.893C45.666.053 90.778-3.72 69.444 56.785 63.403 73.92 40.12 74.529 35.857 62.014 30.17 45.323 59.144 39.84 67.704 38.456c22.552-3.647 21.085 52.508 10.414 95.958-8.961 36.489-26.285 73.735-43.33 105.166-7.995 14.743-18.068 21.63-25.976 35.389-12.234 21.285 18.46 5.147 25.223 1.471 13.817-7.511-20.792 5.885-25.566 8.529-7.877 4.362-7.528-24.004-4.114-38.892"
        pathLength={1}
        animate={{
          strokeDashoffset: 0, // Animate to reveal the full path
        }}
        transition={{
          duration: 5, // Duration of the animation
          ease: "easeInOut",
          delay: 1, // Delay before animation starts
        }}
      />
    </motion.svg>
  )
}

export default SvgComponent;
