import usersAPI from "../../API/usersAPI";
import "./ActiveChatHeads.css";

export default function ActiveChatHeads(props: { activeChats: number[] }) {
  interface IUser {
    ID: number;
    ProfileImage: string;
    ProfileBanner: string;
    Username: string;
    Surname: string;
    active: number;
  }
  const getUsers = usersAPI.filter((e) => props.activeChats.includes(e.ID));

  return (
    <div className="ActiveChatHeads">
      {getUsers.map((e: IUser, i: number) => (
        <div key={i} className={`ChatHead${e.active == 1 ? " iAct" : ""}`}>
          <img src={e.ProfileImage} alt="userHead" />
        </div>
      ))}
    </div>
  );
}
