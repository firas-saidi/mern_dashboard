import { useLocation } from "react-router";
import Header from "../header/Header";
import Posts from "../posts/Posts";
import HomeSidebar from "../Homesidebar/HomeSidebar";
import Topbar from "../topbar/Topbar";
import "./homepage.css";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
    <Topbar/>
      <Header />
      <div className="home">
        <Posts />
        <HomeSidebar />
      </div>
    </>
  );
}
