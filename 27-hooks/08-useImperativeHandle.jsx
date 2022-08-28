import React, {
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

const ChildInputComponent = forwardRef((props, ref) => {
  const inputRef = useRef(null);
  useImperativeHandle(ref, () => inputRef.current);
  return <input type="text" name="child input" ref={inputRef} />;
});

function App() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <ChildInputComponent ref={inputRef} />
    </div>
  );
}

export default App;
