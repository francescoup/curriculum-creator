import React from "react";
import { motion } from "framer-motion";

const Modal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: -20 }}
      className="h-auto w-full top-0 left-0 fixed p-4 bg-white"
    >
      {children}
    </motion.div>
  );
};

export default Modal;
