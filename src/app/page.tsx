"use client";

import { useEffect, useState } from "react";
import purify from "dompurify";

/**
 * @description rendering mode
 */
const MODE = {
  /** content will be rendered as html */
  HTML: 1,
  /** content will be rendered as text */
  TEXT: 2,
};

/**
 * @description data rendered as html; Should be sanitized
 */
const DATA_HTML = {
  mode: MODE.HTML,
  content: `<div>HTML <img src="" onerror='alert("you were hacked")'></div>`,
};

/**
 * @description data rendered as text; No need to sanitize
 */
const DATA_TEXT = {
  mode: MODE.TEXT,
  content: `<img src="" onerror='alert("you were hacked")'>`,
};

export default function Home() {
  const [data, setData] = useState(DATA_TEXT);

  /**
   * @description Switch the rendering mode
   */
  const handleSwitchMode = () => {
    if (data.mode === MODE.HTML) {
      setData(DATA_TEXT);
    } else {
      setData(DATA_HTML);
    }
  };

  return (
    <div>
      <button onClick={handleSwitchMode}>change Data</button>
      <Panel {...data} />
    </div>
  );
}

interface IPanelProps {
  mode: number;
  content: string;
}

/**
 * @description render the content with respect to the rendering mode
 */
function Panel(props: IPanelProps) {
  /**
   * @description process the content. If the rendering mode is `html`, the content should be sanitized.
   */
  const processContent = (content: string) => {
    if (props.mode === MODE.TEXT) {
      return content;
    } else {
      const sanitizedHtml = purify.sanitize(props.content);

      return sanitizedHtml;
    }
  };

  const [html, setHtml] = useState(processContent(props.content));

  useEffect(() => {
    const processedContent = processContent(props.content);
    setHtml(processedContent);
  }, [props.mode, props.content]);

  if (props.mode === MODE.TEXT) {
    return <div>{html}</div>;
  } else {
    return (
      <div
        dangerouslySetInnerHTML={{
          __html: html,
        }}
      />
    );
  }
}
