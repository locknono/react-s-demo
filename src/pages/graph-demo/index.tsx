"use client";

import { useState } from "react";
import { MODE } from "@/constant";
import Panel from "@/components/panel";

/**
 * @description data rendered as html; Should be sanitized
 */
const source1 = {
  mode: MODE.HTML,
  content: `<div>HTML <img src="" onerror='alert("you were hacked")'></div>`,
};

/**
 * @description data rendered as text; No need to sanitize
 */
const source2 = {
  mode: MODE.TEXT,
  content: `<img src="" onerror='alert("you were hacked")'>`,
};

export default function Demo() {
  const [data, setData] = useState(source2);

  /**
   * @description Switch the rendering mode
   */
  const handleSwitchMode = () => {
    if (data.mode === MODE.HTML) {
      setData(source2);
    } else {
      setData(source1);
    }
  };

  return (
    <div>
      <button onClick={handleSwitchMode}>change Data</button>
      <Panel {...data} />
    </div>
  );
}
