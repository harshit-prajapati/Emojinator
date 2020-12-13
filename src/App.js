import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😂": "Face with Tears of Joy",
  "🤣": "Rolling on the Floor Laughing",
  "😉": "Winking Face",
  "😊": "Smiling Face with Smiling Eyes",
  "🥰": "Smiling Face with Hearts",
  "😘": "Face Blowing a Kiss",
  "🤗": "Hugging Face",
  "😑": "Expressionless Face",
  "😒": "Unamused Face",
  "🤤": "Drooling Face",
  "🤯": "Exploding Head",
  "😕": "Confused Face",
  "😟": "Worried Face",
  "🙁": "Slightly Frowning Face",
  "😲": "Astonished Face",
  "😳": "Flushed Face",
  "🥺": "Pleading Face",
  "😭": "Loudly Crying Face",
  "😱": "Face Screaming in Fear",
  "😖": "Confounded Face",
  "😣": "Persevering Face",
  "😞": "Disappointed Face",
  "😡": "Pouting Face",
  "😠": "Angry Face",
  "🤬": "Face with Symbols on Mouth",
  "😑": "annoyance",
  "😵": "Dizzy Face",
  "😕": "Confused Face",
  "🥴": "Woozy Face",
  "👋": "Waving Hand",
  "🤏": "Pinching Hand",
  "🤟": "Love-You Gesture",
  "🤘": "Sign of the Horns",
  "🤙": "Call Me Hand",
  "🖕": "Middle Finger",
  "✊": "Raised Fist",
  "👊": "Oncoming Fist",
  "👏": "Clapping Hands",
  "🤝": "Handshake",
  "🙏": "Folded Hands",
  "❤️": "Red Heart",
  "❣️": "Heart Exclamation",
  "💋": "Kiss Mark",
  "💯": "Hundred Points"
  // "💢": "Anger Symbol",
  /** add some more to show how the app now expands when there's new data */
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
      setMeaning("Emoji not in our database");
    }
  }

  function emojiClickHandler(inputEmoji) {
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
            {/* <h2> {emoji_c} </h2> */}
            <h3> {meaning} </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
