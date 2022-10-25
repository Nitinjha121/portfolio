import "./src/styles/global.css";
import React from "react";

import Layout from "./src/components/Layout";

import { useSetRouter } from "./src/hooks";
//framer motion
import { AnimatePresence } from "framer-motion";

export const wrapPageElement = ({ element, props }) => {
  // props provide same data to Layout as Page element will get
  // including location, data, etc - you don't need to pass it
  useSetRouter(props);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {element}
    </AnimatePresence>
  );
  // return <Layout {...props}>{element}</Layout>;
};
