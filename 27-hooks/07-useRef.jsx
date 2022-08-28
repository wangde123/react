// import React, { createRef } from "react";
// import React, { useRef } from "react";

// const App = () => {
//   const ipt = useRef();

//   const fn = () => {
//     console.log(ipt.current.value);
//   };

//   return (
//     <>
//       <h2>useRef</h2>
//       <input type="text" ref={ipt} />
//       <button onClick={fn}>btn</button>
//     </>
//   );
// };

// export default App;

import React, { useRef } from "react";

// function App() {
//   const [count, setCount] = useState(1);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log("count: " + count);
//     }, 3000);
//   }, [count]);

//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>增加 count</button>
//       <button onClick={() => setCount(count - 1)}>减少 count</button>
//     </div>
//   );
// }

function App() {
  const count = useRef(0);

  const showCount = () => {
    console.log("count: " + count.current);
  };

  const handleClick = (number) => {
    count.current = count.current + number;
    setTimeout(showCount, 3000);
  };

  return (
    <div>
      <p>You clicked {count.current} times</p>
      <button onClick={() => handleClick(1)}>增加 count</button>
      <button onClick={() => handleClick(-1)}>减少 count</button>
    </div>
  );
}

export default App;
