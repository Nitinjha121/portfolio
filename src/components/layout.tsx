import React from "react";

//components
import Header from "./Header";
import SEO from "./SEO";

//framer motion
import { motion } from "framer-motion";

interface IProps {
  title: string;
}

function Layout(props: React.PropsWithChildren<IProps>) {
  const { children ,title} = props;

  return (
    <div className="h-screen flex flex-col">
      <SEO title={title} />
      <Header />
      <section className="overflow-y-auto flex-1 overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
        <motion.main
          className="container mx-auto p-5 h-full w-full relative"
          initial={{ bottom: "-100%" }}
          animate={{ bottom: "0%" }}
          exit={{ left: "-100%", top: "-100%" }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
      </section>
    </div>
  );
}

export default Layout;
