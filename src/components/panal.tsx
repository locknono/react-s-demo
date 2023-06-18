import { MODE } from "@/constant";
import React, { useEffect, useState } from "react";
import purify from "dompurify";

interface IPanelProps {
  mode: number;
  content: string;
}

/**
 * @description render the content with respect to the rendering mode
 */
export default function Panel(props: IPanelProps) {
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
