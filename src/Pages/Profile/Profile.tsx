import { useParams } from "react-router-dom";
import "./Profile.css";
import UserContent from "./UserInfo/UserContent/UserContent";
import UserInfo from "./UserInfo/UserInfo";
import usersAPI from "../../API/usersAPI";

export default function Profile() {
  interface IUser {
    ID: number;
    ProfileImage: string;
    ProfileBanner: string;
    Username: string;
    Surname: string;
    active: number;
  }
  [];
  const params: any = useParams();
  const PID: number = parseInt(params?.id);
  const UserData = usersAPI.filter((e: IUser) => e.ID === PID)[0];
  return (
    <div className="profile-page">
      <UserInfo UserData={UserData} />
      <UserContent UserData={UserData} />
    </div>
  );
}
