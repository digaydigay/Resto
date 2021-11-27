import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancel } from "../../redux/reducer/showAuthForm";
export default function Signin() {
  const init = useSelector((state) => state.showAuthForm.init);
  const dispatch = useDispatch();
  return (
    <div className={`signin ${init === "signin" && "signin-show"}`}>
      <form>
        <h2>Sign In</h2>
        <div className="input-group">
          <label>Email</label>
          <input type="text" placeholder="email address..." />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="text" placeholder="account password..." />
        </div>
        <div className="actions">
          <button type="submit">Sign In</button>
          <button
            type="button"
            onClick={() => {
              dispatch(cancel());
            }}
          >
            cancel
          </button>
        </div>
        <div className="social_auth">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-google"></i>
        </div>
      </form>
    </div>
  );
}
