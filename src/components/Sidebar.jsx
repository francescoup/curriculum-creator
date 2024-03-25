import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import TemplateStyle from "./multiStepForm/TemplateStyle";

const Sidebar = ({ isRight }) => {
  return (
    <>
      <AnimatePresence>
        {isRight && (
          <motion.div
            initial={{
              opacity: 0,
              x: "var(--x-closed, 100)",
              y: "var(--y-open,0)",
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{
              opacity: 0,
              x: "var(--x-closed, 100)",
              y: "var(--y-closed, 0)",
            }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-0 top-0 w-96 right-0 p-4 max-sm:rounded-t-xl max-sm:w-full max-sm:h-1/2 max-sm:top-1/2 bg-slate-700 max-sm:[--x-closed:0]
            [--x-closed:100%] max-sm:[--y-open:100%] max-sm:[--y-closed:100%] [--y-closed:0] [--y-open:0]"
          >
            <TemplateStyle />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
