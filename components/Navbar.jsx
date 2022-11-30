"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  // NOTE we can declare tags with motion like this for whichever tag we want to animate
  <nav className={`${styles.xPaddings} py-8 relative`}>
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="absolute w-[50%] inset-0 gradient-01"
    />

    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
    >
      <img
        src="/search.svg"
        alt="searchIcon"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white ">
        METAVERSUS
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </motion.div>
  </nav>
);

export default Navbar;
