import { MODE } from "@/constant";
import React, { useEffect, useState } from "react";
import purify from "dompurify";

interface IProps {
  mode: number;
  content: string;
}

/**
 * @description render the content with respect to the rendering mode
 */
export default function Panel(props: IProps) {
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

  const processedContent = processContent(props.content);
  const [html, setHtml] = useState(processedContent);

  useEffect(() => {
    const processedContent = processContent(props.content);
    setHtml(processedContent);
  }, [props.mode, props.content]);

  return (
    <div>
      {props.mode === MODE.TEXT ? (
        <div>{html}</div>
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      )}
    </div>
  );
}
