import "./Chats.css";
import Chat from "./Components/Chat";

export default function Chats(props: {
  chats: number[];
  setChats: React.Dispatch<React.SetStateAction<number[]>>;
  focus: number;
  setFocus: React.Dispatch<React.SetStateAction<number>>;
}) {
  return (
    <div className="Chats">
      {props.chats.map((e: number, i: number) =>
        i <= 1 ? (
          <Chat
            key={e}
            chatPrint={e}
            setFocus={props.setFocus}
            setChats={props.setChats}
            chats={props.chats}
            focus={props.focus}
          />
        ) : undefined
      )}
    </div>
  );
}
