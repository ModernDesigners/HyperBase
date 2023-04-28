import "./Chat.css";
import call from "../../../Images/Icons/chat/call.png";
import video from "../../../Images/Icons/chat/video.png";
import shut from "../../../Images/Icons/chat/shut.png";
import close from "../../../Images/Icons/chat/close.png";
import chatsAPI from "../../../API/chatsAPI";
import { useEffect, useRef, useState } from "react";
import usersAPI from "../../../API/usersAPI";
import { Link } from "react-router-dom";

export default function Chat(props: {
  chatPrint: number;
  setChats: React.Dispatch<React.SetStateAction<number[]>>;
  chats: number[];
  setFocus: React.Dispatch<React.SetStateAction<number>>;
  focus: number;
}) {
  interface IUser {
    ID: number;
    ProfileImage: string;
    ProfileBanner: string;
    Username: string;
    Surname: string;
    active: number;
  }
  interface IChat {
    ChatColor: string;
    ChatID: number;
    MyUser: number;
    ChatUser: number;
    Messages: {
      mySend: number;
      time: string;
      Message: string;
    }[];
  }
  interface IMessage {
    mySend: number;
    time: string;
    Message: string;
  }
  const [messageInput, setMessageInput] = useState<string>("");
  const [chatDown, setChatDown] = useState<boolean>(false);
  const ChatContent = useRef<any>();
  const ChatContainer = useRef<any>();
  const ChatInput = useRef<any>();
  useEffect(() => {
    if (ChatContent.current) {
      ChatContent.current.scrollTop = ChatContainer.current.clientHeight + 100;
    }
  }, []);

  useEffect(() => {
    if (props.focus == props.chatPrint) {
      ChatInput.current.focus();
      setChatDown(false);
    }
  }, [props.focus]);
  const UserID = 3;
  const ChatData = chatsAPI.filter(
    (e: IChat) => e.ChatUser == props.chatPrint && e.MyUser == UserID
  )[0];
  const [messageC, ChangeMessageC] = useState(false);
  const UserData = usersAPI.filter((e: IUser) => e.ID == ChatData.ChatUser)[0];
  const closeChat = () => {
    props.chats.splice(props.chats.indexOf(props.chatPrint), 1);
    props.setChats([...props.chats]);
  };
  const styleMessage = {
    opacity: props.focus == props.chatPrint ? 1 : 0.8,
    backgroundColor: ChatData.ChatColor,
  };
  const styleMessageF = {
    opacity: props.focus == props.chatPrint ? 1 : 0.8,
  };
  const date = new Date();
  const sendMessage = (e: any) => {
    e.preventDefault();
    var sendMessageData = {
      mySend: 1,
      time: `${date.getHours()}:${date.getMinutes()}`,
      Message: messageInput,
    };
    ChatData.Messages.push(sendMessageData);
    ChangeMessageC(!messageC);
    setMessageInput("");
    setTimeout(() => {
      ChatContent.current.scrollTop += ChatContainer.current.clientHeight + 100;
    }, 0);
    ChatInput.current.focus();
  };
  return (
    <div className={`Chat${chatDown ? " ChatDown" : ""}`}>
      <div
        className="ChatInfo"
        style={
          props.focus == props.chatPrint
            ? { opacity: 1, backgroundColor: ChatData.ChatColor }
            : { opacity: 0.8, backgroundColor: ChatData.ChatColor }
        }
      >
        <Link to={"/Profile/" + UserData.ID}>
          <div className="ChatUser">
            <img src={UserData.ProfileImage} alt="UserProfile" />
            <div className="ChatUserInfo">
              <p>{UserData.Username}</p>
              <p>{UserData.Surname}</p>
            </div>
          </div>
        </Link>
        <div className="ChatOptions">
          <div className="ChatButton">
            <img src={call} alt="call" />
          </div>
          <div className="ChatButton">
            <img src={video} alt="video" />
          </div>
          <div className="ChatButton">
            <img src={shut} alt="shut" onClick={() => setChatDown(!chatDown)} />
          </div>
          <div className="ChatButton" onClick={closeChat}>
            <img src={close} alt="close" />
          </div>
        </div>
      </div>
      <div className="ChatContent" ref={ChatContent}>
        <div className="ChatContainer" ref={ChatContainer}>
          {ChatData.Messages.map((e: IMessage, i: number) => (
            <div
              key={i}
              className={`ChatMessages ${
                e.mySend == 1 ? "ChatMyMessage" : "ChatMessage"
              }`}
              style={e.mySend == 1 ? styleMessage : styleMessageF}
            >
              <div className="ChatMessageTime">{e.time}</div>
              <p className="ChatP">{e.Message}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="ChatSend">
        <form onSubmit={(e) => sendMessage(e)}>
          <div className="ChatInput">
            <input
              value={messageInput}
              onChange={(e) => setMessageInput(e.target.value)}
              onFocus={() => props.setFocus(props.chatPrint)}
              type="text"
              placeholder="..."
              ref={ChatInput}
            />
            <div className="ChatEmoji">
              <svg
                width="20"
                height="20"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.79334 0.333252H4.20668C1.78001 0.333252 0.333344 1.77992 0.333344 4.20658V9.78658C0.333344 12.2199 1.78001 13.6666 4.20668 13.6666H9.78668C12.2133 13.6666 13.66 12.2199 13.66 9.79325V4.20658C13.6667 1.77992 12.22 0.333252 9.79334 0.333252ZM4.66668 3.25325C5.35334 3.25325 5.92001 3.81325 5.92001 4.50659C5.92001 5.19992 5.36001 5.75992 4.66668 5.75992C3.97334 5.75992 3.41334 5.18658 3.41334 4.49992C3.41334 3.81325 3.98001 3.25325 4.66668 3.25325ZM7.00001 11.7199C5.20668 11.7199 3.74668 10.2599 3.74668 8.46658C3.74668 7.99992 4.12668 7.61325 4.59334 7.61325H9.39334C9.86001 7.61325 10.24 7.99325 10.24 8.46658C10.2533 10.2599 8.79334 11.7199 7.00001 11.7199ZM9.33334 5.74658C8.64668 5.74658 8.08001 5.18658 8.08001 4.49325C8.08001 3.79992 8.64001 3.23992 9.33334 3.23992C10.0267 3.23992 10.5867 3.79992 10.5867 4.49325C10.5867 5.18658 10.02 5.74658 9.33334 5.74658Z"
                  fill={ChatData.ChatColor}
                  style={
                    props.focus == props.chatPrint
                      ? { opacity: 1 }
                      : { opacity: 0.8 }
                  }
                />
              </svg>
            </div>
          </div>
          <button className="ChatSendMessage">
            <svg
              width="28"
              height="24"
              viewBox="0 0 19 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.5996 6.02722L7.15727 2.99555C2.8298 0.955552 1.05365 2.62722 3.22115 6.70013L3.87592 7.93264C4.06407 8.29389 4.06407 8.7118 3.87592 9.07305L3.22115 10.2985C1.05365 14.3714 2.82227 16.0431 7.15727 14.0031L13.5996 10.9714C16.4896 9.61139 16.4896 7.38722 13.5996 6.02722ZM11.1687 9.03055H7.10459C6.79602 9.03055 6.54014 8.78972 6.54014 8.4993C6.54014 8.20889 6.79602 7.96805 7.10459 7.96805H11.1687C11.4772 7.96805 11.7331 8.20889 11.7331 8.4993C11.7331 8.78972 11.4772 9.03055 11.1687 9.03055Z"
                fill={ChatData.ChatColor}
                style={
                  props.focus == props.chatPrint
                    ? { opacity: 1 }
                    : { opacity: 0.8 }
                }
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}
