import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const [find, setFind] = useState("");
  const [foundPosition, setFoundPosition] = useState(null);

  const handlecopyClick = () => {
    var copyText = document.getElementById("mybox");

    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.ShowAlert("Text Copied!", "success");
  };

  const handlespacesClick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
    props.ShowAlert("Extra Spaces have been removed!", "primary");
  };

  const handleUpClick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
    props.ShowAlert("Converted to Upper Case!", "success");
  };

  const handleDownClick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
    props.ShowAlert("Converted to Lower Case!", "success");
  };
  const handleClearClick = () => {
    let newtext = "";
    setText(newtext);
    props.ShowAlert("Text Cleared!", "warning");
  };

  const handleFindClick = () => {
    const position = text.toLowerCase().indexOf(find.toLowerCase());
    setFoundPosition(position !== -1 ? position : null);
    props.ShowAlert("Word Found!", "success");
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleFindChange = (event) => {
    setFind(event.target.value);
    setFoundPosition(null);
  };

  const handleRandomizeClick = () => {
    // Use Web Speech API to read the content of the text box aloud
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      synthesis.speak(utterance);
      props.ShowAlert("We are using your Microphone!", "danger");
    } else {
      // Fallback for browsers that do not support Web Speech API
      alert(text);
    }
  };

  return (
    <>
      <div className={`text-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="container my-3">
          <h1>{props.heading}</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              style={{
                backgroundColor: props.mode === "light" ? "#ced4da" : "white",
                color: "black",
              }}
              value={text}
              onChange={handleOnChange}
              id="mybox"
              rows="8"
            ></textarea>
          </div>
          <button className="btn btn-primary" onClick={handleUpClick}>
            Convert to upper case
          </button>
          <button className="btn btn-primary mx-2" onClick={handleDownClick}>
            Convert to lower case
          </button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>
            Clear Text
          </button>
          <button className="btn btn-primary mx-1" onClick={handlecopyClick}>
            Copy to Clipboard
          </button>
          <button className="btn btn-primary mx-1" onClick={handlespacesClick}>
            Remove Extra Spaces
          </button>
        </div>

        <div className="container my-4">
          <h2>Your Text Summary</h2>
          <p>
            {text.trim().length > 0 ? text.trim().split(/\s+/).length : 0}{" "}
            words, {text.replace(/\s/g, "").length} characters
          </p>

          <p>
            Average time to read this is:{" "}
            {0.008 * text.trim().split(/\s+/).length} minutes
          </p>
          <h2>Preview</h2>
          <p>{text}</p>
          <form className="d-flex">
            <input
              className="form-control me-2 w-25"
              type="search"
              placeholder="Enter word to search"
              aria-label="Search"
              value={find}
              onChange={handleFindChange}
            />
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleFindClick}
            >
              Search
            </button>
            {foundPosition !== null && (
              <p className="ms-3">Word found at position {foundPosition}</p>
            )}
          </form>
        </div>

        <div className="container my-4">
          <form action="" method="post" onSubmit={() => false}>
            <input
              className="btn-primary"
              type="button"
              value="Read aloud"
              name="sessionid"
              onClick={handleRandomizeClick}
            />
          </form>
          <form action="" method="post" onSubmit={() => false}></form>
        </div>
      </div>
    </>
  );
}
