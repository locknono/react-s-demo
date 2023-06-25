import { MODE } from "@/constant";
import React, { useContext, useEffect, useState } from "react";
import purify from "dompurify";
import { ThemeContext } from "@/constant/context";

interface IProps {
  mode: number;
  content: string;
}

/**
 * @description render the content with respect to the rendering mode
 */
export default function Panel(props: IProps) {
  const theme = useContext(ThemeContext);
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

  return (
    <div>
      <div>theme: {theme}</div>
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
