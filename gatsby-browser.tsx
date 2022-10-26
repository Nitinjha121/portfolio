import "./src/styles/global.css";
import React from "react";

import { useSetLocation } from "./src/hooks";
//framer motion
import { AnimatePresence } from "framer-motion";

export const onRouteUpdate = ({ location }) => {
  useSetLocation(location);
};

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  );
};
