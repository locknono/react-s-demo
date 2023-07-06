import React, { useState, useCallback } from "react";

function ChildComponent(props: any) {
  return <button onClick={props.onClick}>Click me</button>;
}

function UseCallbackDemo() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <div>
      <ChildComponent onClick={increment} />
      <p>You clicked {count} times</p>
    </div>
  );
}

export default UseCallbackDemo;
