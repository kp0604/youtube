import { Link } from "react-router-dom";

const Navbar = ({ user }) => {
  // let url = "http://localhost:4000"
let url = "https://youtube-production-616c.up.railway.app"
  const logout = () => {
    window.open(`${url}/api/v1/auth/logout`, "_self");
  };
  return (
    <div className="navbar">
      <span className="logo">
        <Link className="link" to="/">
          Lama App
        </Link>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.displayName}</li>
          <li className="listItem" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <Link className="link" to="login">
          Login
        </Link>
      )}
    </div>
  );
};

export default Navbar;
