import { useRef } from "react";

export default function UseRefDemo() {
  const inputRef = useRef<any>(null);

  function handleClick() {
    if (!inputRef.current) {
      return;
    }
    const html = `<div>HTML <img src="" onerror='alert("you were hacked")'></div>`;
    inputRef.current.innerHtml = html;
  }

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={handleClick}>change the content</button>
    </div>
  );
}
