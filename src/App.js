import { useState } from "react";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isKeep, setIsKeep] = useState(false);

  function messageLayer() {
    setIsOpen(true);
  }
  function closeLayer() {
    setIsOpen(false);
    console.log(isKeep);
  }
  return (
    <div className="app">
      <div className="flex justify-center flex-col items-center">
        <section>
          <button className="bg-gray-500 z-1" onClick={messageLayer}>
            Click me
          </button>
        </section>
        {isOpen && (
          <div className="bg-black/50 inset-0 absolute flex ">
            <section role="alertdialog" aria-modal="true" className=" bg-blue-500 z-10 h-20 w-60">
              <h1>Message sent</h1>
              <button
                className="bg-white mr-5"
                onClick={closeLayer}
                onFocus={() => {
                  setIsKeep(true);
                }}
              >
                remove
              </button>
              <button
                className="bg-white"
                onClick={closeLayer}
                onFocus={() => {
                  setIsKeep(false);
                }}
              >
                Keep
              </button>
            </section>
          </div>
        )}
        {isKeep && <div>Your message has been deleted</div>}
      </div>
    </div>
  );
}

export default App;
