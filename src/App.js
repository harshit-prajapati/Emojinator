import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance",
  "😵": "dizzy face",
  "😕": "Confused Face",
  "🥴":
    "Woozy Face" /** add some more to show how the app now expands when there's new data */
};
const emojis = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [meaning, setMeaning] = useState("translation here");
  function changeHandler(event) {
    const inputEmoji = event.target.value;
    setEmoji(inputEmoji);

    if (inputEmoji in emojiDictionary) {
      setMeaning(emojiDictionary[inputEmoji]);
    } else {
      setMeaning("failure to recognise this emoji");
    }
  }

  function emojiClickHandler(inputEmoji) {
    // var click_emoji = inputEmoji;
    setMeaning(emojiDictionary[inputEmoji]);
  }
  return (
    <div className="App">
      <div className="body-container">
        <h5 className="salutation">All hail the Emojinator</h5>
        <div className="hero-header">
          <h1 className="hero-text">
            Keep your chat going. Find the right meaning of Emoji.
          </h1>
          <img src="images/logo.svg" alt="logo" className="hero-img" />
        </div>
        <div className="search-section">
          <div className="search-emoji">
            <p className="head">Emoji you are searching for:</p>
            <input
              onChange={changeHandler}
              // value={emoji}
              className="input-emoji"
              id="input-txt"
              placeholder="Input ypur emoji here"
            ></input>
            <br />
            <button className="search-btn" id="search-bttn">
              <strong>Search</strong>
            </button>
          </div>
        </div>
        <div className="translate-section">
          <div className="t-left">
            <p className="head">Or find out what below ones mean:</p>
            <div className="emojiList">
              {emojis.map((emoji) => (
                <span onClick={() => emojiClickHandler(emoji)}> {emoji} </span>
              ))}
            </div>
          </div>
          <div className="t-right">
            <h2> {emoji} </h2>
            {/* <h1> {click_emoji} </h1> */}
            <h3> {meaning} </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
