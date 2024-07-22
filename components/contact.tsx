"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  // const { ref } = useSectionInView("Contact");
  // State to manage form input values
  const [formData, setFormData] = useState({
    senderEmail: "",
    message: "",
  });
  // Function to handle input changes
  const handleInputChange = (e: any) => {
    console.log(e);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  // Function to reset the form data
  const resetForm = () => {
    setFormData({
      senderEmail: "",
      message: "",
    });
  };
  return (
    <motion.section
      id="contact"
      // ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:elviscruz45@gmail.com">
          elviscruz45@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);
          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          // Clear the form
          resetForm();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          value={formData.senderEmail}
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          onChange={handleInputChange}
        />

        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          value={formData.message}
          maxLength={5000}
          onChange={handleInputChange}
        />
        {/* <SubmitBtn /> */}
      </form>
    </motion.section>
  );
}
