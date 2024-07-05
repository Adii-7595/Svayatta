import React, { useContext } from "react";
import './index.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png';
import msgIcon from './assets/message.svg';
import home from './assets/home.svg';
import saved from './assets/bookmark.svg';
import rocket from './assets/rocket.svg';
import sendBtn from './assets/send.svg';
import userIcon from './assets/user-icon.png';
import gptImgLogo from './assets/chatgptLogo.svg';
import { Context } from "./context/context";

function App() {
  const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

  const handleSend = () => {
    if (input.trim() !== "") {
      onSent(input); // Call onSent function with input
      setInput(""); // Clear input field after sending
    }
  };

  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperside">
          <div className="upperSideTop">
            <img src={gptLogo} alt="Logo" classNazme='logo' />
            <span className='brand'>Svayatta GPT</span>
          </div>
          <button className='midBtn'>
            <img src={addBtn} alt='New Chat' className='add' />New Chat
          </button>
          <div className='upperSideBottom'>
            <button className='query'>
              <img src={msgIcon} alt='Query' /> What is Programming ?
            </button>
            <button className='query'>
              <img src={msgIcon} alt='Query' /> How to use an API ?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={home} alt='' className='listItemImg' /> Home
          </div>
          <div className="listItems">
            <img src={saved} alt='' className='listItemImg' /> Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt='' className='listItemImg' /> Upgrade to Pro
          </div>
        </div>
      </div>
      <div className='main'>
        <div className='chats'>
          {/* Display user's input */}
          {recentPrompt && (
            <div className='chat'>
              <img className='chatImg' src={userIcon} alt='' />
              <p className='txt'>{recentPrompt}</p>
            </div>
          )}

          {/* Display bot's response */}
          {showResult && (
            <div className='chat bot'>
              <img className='chatImg' src={gptImgLogo} alt='' />
              <p className='txt'>{resultData}</p>
            </div>
          )}

          {/* Display loading indicator */}
          {loading && (
            <div className='chat bot'>
              <img className='chatImg' src={gptImgLogo} alt='' />
              <p className='txt'>Loading...</p>
            </div>
          )}
        </div>
        <div className='chatFooter'>
          <div className='inp'>
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type='text'
              placeholder='Send a message'
            />
            <button className='send' onClick={handleSend}>
              <img src={sendBtn} alt='SendBtn' />
            </button>
          </div>
          <p>Svayatta may produce inaccurate information about people, places, or facts. Svayatta April 23 Version</p>
        </div>
      </div>
    </div>
  );
}

export default App;
