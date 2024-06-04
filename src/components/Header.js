import { authActions } from "../store";
import classes from "./Header.module.css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">내 상품들</a>
            </li>
            <li>
              <button onClick={logoutHandler}>로그아웃</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
