import "./UserContent.css";
import UserLeftside from "./UserLeftside/UserLeftside";
import UserRightside from "./UserRightside/UserRightside";
export default function UserContent() {
  return (
    <div className="user-flex-content">
      <UserLeftside />
      <UserRightside />
    </div>
  );
}
