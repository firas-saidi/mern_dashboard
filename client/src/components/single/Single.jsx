import Sidebar from "../Homesidebar/HomeSidebar";
import SinglePost from "../singlePost/SinglePost";
import Topbar from "../topbar/Topbar";
import "./single.css";

export default function Single() {
  return (
    <>
    <Topbar/>
    <div className="single">
      <SinglePost />
      <Sidebar />
    </div>
    </>
  );
}
