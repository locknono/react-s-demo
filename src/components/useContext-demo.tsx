import { ThemeContext } from "@/constant/context";
import React, { useContext } from "react";

function UseContextDemo() {
  const record = useContext(ThemeContext);
  return <div dangerouslySetInnerHTML={{ __html: record }}></div>;
}

export default UseContextDemo;
