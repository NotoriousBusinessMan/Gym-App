"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

import Button from "@/components/includes/Button";

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      x: 0, // Move the h1 element to its original position on the x-axis
      opacity: 1, // Make the h1 element fully visible
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    });
  }, [controls]);
  return (
    <>
      <section className="max-container padding-container mt-12">
        <div>
          <motion.h1
            initial={{ x: -1000, opacity: 0 }}
            animate={controls}
            className="text-5xl w-full text-center font-semibold sm:text-6xl sm:text-left text-white mb-10 lg:text-7xl">
            Never
            <br />
            Give Up On
            <br />
            your Dreams
          </motion.h1>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={controls}
            className="two_buttons flex flex-col flex-wrap items-center mb-10 sm:flex-row">
            <Button
              type="button"
              title="learn more"
              variant="btn_dark_green"
              margin="0"
            />

            <Button
              type="button"
              title="watch videos"
              margin="0"
              variant="btn_transparent"
              icon="/assets/images/play.png"
            />
          </motion.div>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={controls}
            className="counting_numbers flex flex-col items-center sm:flex-row">
            <div className="flex flex-col items-center first_one mb-10 border-b-2 border-slate-300 pb-8 sm:mr-10 sm:border-r-2 pr-4 sm:border-b-0 sm:mb-0 sm:pb-0">
              <h4 className="text-white text-lg font-bold">3+</h4>
              <span className="text-gray-300 text-sm">Expert Trainers</span>
            </div>
            <div className="flex flex-col items-center second_one mb-10 border-b-2 border-slate-300 pb-8 sm:mr-10 sm:border-r-2 pr-4 sm:border-b-0 sm:mb-0 sm:pb-0">
              <h4 className="text-white text-lg font-bold">935+</h4>
              <span className="text-gray-300 text-sm">Members Joined</span>
            </div>
            <div className="flex flex-col items-center third_one mb-10 sm:mb-0">
              <h4 className="text-white text-lg font-bold">80+</h4>
              <span className="text-gray-300 text-sm">Fitness Programmes</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
