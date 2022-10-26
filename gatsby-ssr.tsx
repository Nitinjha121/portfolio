import "./src/styles/global.css";
import React from "react";

//framer motion
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  );
};
