import UseContextDemo from "@/components/useContext-demo";
import { ThemeContext } from "@/constant/context";
import React from "react";

function ContextDemo() {
  const value = "dark";
  return (
    <ThemeContext.Provider value={value}>
      <UseContextDemo />
    </ThemeContext.Provider>
  );
}

export default ContextDemo;
