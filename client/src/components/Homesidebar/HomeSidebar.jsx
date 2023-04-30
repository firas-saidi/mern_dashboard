import { Link } from "react-router-dom";
import "./sidebar.css";

export default function hsidebar() {
  return (
    <div className="hsidebar">
      <div className="hsidebarItem">
        <span className="hsidebarTitle">ABOUT ME</span>
        <img
          src="https://images.unsplash.com/photo-1646617747566-b7e784435a48?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt=""
        />
        <p>
          Laboris sunt aute cupidatat velit magna velit ullamco dolore mollit
          amet ex esse.Sunt eu ut nostrud id quis proident.
        </p>
      </div>
      <div className="hsidebarItem">
        <span className="hsidebarTitle">CATEGORIES</span>
        <ul className="hsidebarList">
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Life">
              Life
            </Link>
          </li>
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Music">
              Music
            </Link>
          </li>
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Sport">
              Sport
            </Link>
          </li>
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Style">
              Style
            </Link>
          </li>
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Tech">
              Tech
            </Link>
          </li>
          <li className="hsidebarListItem">
            <Link className="link" to="/posts?cat=Cinema">
              Cinema
            </Link>
          </li>
        </ul>
      </div>
      <div className="hsidebarItem">
        <span className="hsidebarTitle">FOLLOW US</span>
        <div className="hsidebarSocial">
          <i className="hsidebarIcon fab fa-facebook-square"></i>
          <i className="hsidebarIcon fab fa-instagram-square"></i>
          <i className="hsidebarIcon fab fa-pinterest-square"></i>
          <i className="hsidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  );
}
