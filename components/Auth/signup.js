import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cancel } from "../../redux/reducer/showAuthForm";

export default function Signup() {
  const dispatch = useDispatch();
  const init = useSelector((state) => state.showAuthForm.init);

  return (
    <div className={`signup ${init === "createaccount" && "signup-show"}`}>
      <form>
        <h2>Sign Up</h2>

        <div className="input-group">
          <label>Name</label>
          <input type="text" placeholder="Complete Name..." />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input type="text" placeholder="email address..." />
        </div>
        <div className="input-group">
          <label>Address</label>
          <input type="text" placeholder="Your location..." />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input type="text" placeholder="account password..." />
        </div>
        <div className="input-group">
          <label>Confirm Password</label>
          <input type="text" placeholder="confirm password..." />
        </div>
        <div className="actions">
          <button type="submit">Sign up</button>
          <button type="button" onClick={() => dispatch(cancel())}>
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
