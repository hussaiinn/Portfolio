import React from "react";
import { motion } from "framer-motion";
// import styles from "../styles/about.modules.css";
// import '../styles/about.css'

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-black" : "text-black";

  return (
    <>
      <button className='customButton'>
        <p
          className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}
          onClick={selectTab}
        >
          {children}
        </p>
        <motion.div
          animate={active ? "active" : "default"}
          variants={variants}
          className="h-1 bg-black mt-2 mr-3"
        ></motion.div>
      </button>
    </>
  );
};

export default TabButton;
