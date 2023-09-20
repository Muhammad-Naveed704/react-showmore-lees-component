import { useState } from "react";
function App() {
  const [textCrectors, setTextCrectors] = useState(6);
  const [button, setbutton] = useState(true);
  const [text, setText] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia distinctio fugit perferendis repudiandae tempora, voluptatem odit totam laudantium cum vel qui, dicta doloremque! Reprehenderit enim, deserunt dolorem tenetur unde ipsum."
  );
  function conditionHandler() {
    if (textCrectors == 6) {
      setTextCrectors(text.split(" ").length);
      setbutton(false);
    } else {
      setTextCrectors(6);
      setbutton(true);
    }
  }
  const text2 = text.split(" ").slice(0, textCrectors).join(" ");
  return (
    <>
      <div className="app">
        <p>
          {text2}
          <button onClick={() => conditionHandler()}>
            {button ? "showmore" : "showless"}
          </button>
        </p>
      </div>
    </>
  );
}
export default App;
