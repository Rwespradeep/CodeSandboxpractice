import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry.jsx";

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">
        {emojipedia.map((eachEmoji) => (
          <Entry
            emoji={eachEmoji.emoji}
            name={eachEmoji.name}
            meaning={eachEmoji.meaning}
          />
        ))}
      </dl>
    </div>
  );
}

export default App;
