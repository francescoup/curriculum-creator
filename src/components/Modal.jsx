import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Modal = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="h-full w-full top-0 left-0 fixed p-4 flex flex-col gap-2 bg-white shadow-md z-10 "
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default Modal;
