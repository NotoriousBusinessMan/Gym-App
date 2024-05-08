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
            className="text-2xl lg:text-7xl font-semibold w-3/6 text-white mb-10 sm:text-6xl sm:w-3/4">
            Never
            <br />
            Give Up On
            <br />
            your Dreams
          </motion.h1>
          <motion.div
            initial={{ x: -1000, opacity: 0 }}
            animate={controls}
            className="two_buttons flex items-center mb-10">
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
            className="counting_numbers flex items-center">
            <div className="first_one mr-12 border-r-2 border-slate-300 pr-8 ">
              <h4 className="text-white text-lg font-bold">3+</h4>
              <span className="text-gray-300 text-sm">Expert Trainers</span>
            </div>
            <div className="second_one mr-12 border-r-2 border-slate-300 pr-8 ">
              <h4 className="text-white text-lg font-bold">935+</h4>
              <span className="text-gray-300 text-sm">Members Joined</span>
            </div>
            <div className="third_one">
              <h4 className="text-white text-lg font-bold">80+</h4>
              <span className="text-gray-300 text-sm">Fitness Programmes</span>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
