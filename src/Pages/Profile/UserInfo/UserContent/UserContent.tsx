import "./UserContent.css";
import UserLeftside from "./UserLeftside/UserLeftside";
import UserRightside from "./UserRightside/UserRightside";
interface IUser {
  ID: number;
  ProfileImage: string;
  ProfileBanner: string;
  Username: string;
  Surname: string;
  active: number;
}
[];
export default function UserContent(props: { UserData: IUser }) {
  return (
    <div className="user-flex-content">
      <UserLeftside UserData={props.UserData} />
      <UserRightside UserData={props.UserData} />
    </div>
  );
}
