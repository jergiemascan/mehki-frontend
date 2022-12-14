import "./ForumPage.css";
import Chat from "./Chat";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import io from "socket.io-client";
import Footer from "./Footer";

const socket = io.connect("https://thawing-beyond-87063.herokuapp.com/");

function ForumPage() {
  const [username, setUserName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setshowChat] = useState(false);

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
      setshowChat(true);
    }
  };

  const navigate = useNavigate();

  const signoutHandler = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <>
      <div className="nav">
        <Link className="link" to="/">
          Home
        </Link>
        <button type="submit" className="btn-auth" onClick={signoutHandler}>
          Sign out
        </button>
      </div>

      <div className="chat-container">
        <div className="App">
          {!showChat ? (
            <div className="joinChatContainer">
              <h3>Join A Chat</h3>
              <input
                type="text"
                placeholder="Name"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              ></input>
              <input
                type="text"
                placeholder="Room ID..."
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
              ></input>
              <button onClick={joinRoom}>Join A Room</button>
            </div>
          ) : (
            <Chat socket={socket} username={username} room={room}></Chat>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ForumPage;
