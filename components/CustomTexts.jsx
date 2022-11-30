"use client";

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "../utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles}`}
  >
    {/* This Array will split the characters in the title and then map over that characters */}
    {/* NOTE use 'parenthesis' over 'curly brackets' to return something instantly */}
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {/* checking if letter are available or not */}
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyles} `}
  >
    {title}
  </motion.h2>
);
