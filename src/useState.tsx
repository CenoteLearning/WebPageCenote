import { useState } from "react";
import "./global.css";

const App: React.FC = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Vite + React</h1>
      <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
      </button>
    </>
  );
};

export default App;
