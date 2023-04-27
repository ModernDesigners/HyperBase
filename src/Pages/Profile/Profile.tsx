import "./Profile.css";
import UserContent from "./UserInfo/UserContent/UserContent";
import UserInfo from "./UserInfo/UserInfo";

export default function Profile() {
  return (
    <div className="profile-page">
      <UserInfo />
      <UserContent />
    </div>
  );
}
