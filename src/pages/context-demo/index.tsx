import UseContextDemo from "@/components/useContext-demo";
import { ThemeContext } from "@/constant/context";
import React from "react";

function ContextDemo() {
  const value = "dark2";
  return (
    <ThemeContext.Provider value={value}>
      <UseContextDemo />
    </ThemeContext.Provider>
  );
}

export default ContextDemo;
