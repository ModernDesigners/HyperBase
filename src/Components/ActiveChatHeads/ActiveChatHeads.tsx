import usersAPI from "../../API/usersAPI";
import "./ActiveChatHeads.css";

export default function ActiveChatHeads(props: {
  activeChats: number[];
  setChats: React.Dispatch<React.SetStateAction<number[]>>;
  chats: number[];
  setFocus: React.Dispatch<React.SetStateAction<number>>;
}) {
  interface IUser {
    ID: number;
    ProfileImage: string;
    ProfileBanner: string;
    Username: string;
    Surname: string;
    active: number;
  }
  const getUsers = usersAPI.filter((e) => props.activeChats.includes(e.ID));
  const getChats = (e: IUser) => {
    if (props.chats.indexOf(e.ID) == -1) {
      props.chats.push(e.ID);

      props.setChats([
        ...props.chats.slice(
          props.chats.length - 2 < 0 ? 0 : props.chats.length - 2,
          props.chats.length
        ),
      ]);
      props.setFocus(e.ID);
    } else {
      props.setChats([...props.chats]);
      props.setFocus(e.ID);
    }
  };
  return (
    <div className="ActiveChatHeads">
      {getUsers.map((e: IUser, i: number) => (
        <div
          onClick={() => getChats(e)}
          key={i}
          className={`ChatHead${e.active == 1 ? " iAct" : ""}`}
        >
          <img src={e.ProfileImage} alt="userHead" />
        </div>
      ))}
    </div>
  );
}
