import React from "react";
import dfuser from "../assets/user.png";
import Img from "next/image";
import { useAuthContext } from "../context/AuthProvider";
import { useToogle } from "../context/Toogle";

const Profile = () => {
  const { showsigninmodal, showsignupmodal, currentUser, showsignoutmodal } =
    useAuthContext();

  const { isProfile, setIsProfile } = useToogle();

  if (!isProfile) {
    return null;
  }
  return (
    <>
      <div className="main-profile">
        <div className="profile">
          <div className="back">
            <button onClick={() => setIsProfile(false)}>
              {" "}
              <i className="fas fa-angle-double-left"></i> back
            </button>
          </div>
          <div className="dp">
            <div className="img">
              <Img src={dfuser} alt="user" />
            </div>
          </div>
          <div className="user-info">
            {currentUser ? (
              <>
                <h3 className="name">{currentUser.displayName}</h3>
                <p className="email">{`( ${currentUser.email} )`}</p>

                <ul className="user-nav">
                  <button
                    onClick={() => {
                      showsignoutmodal();
                      setIsProfile(false);
                    }}
                  >
                    Sign out
                  </button>
                </ul>
              </>
            ) : (
              <>
                <div>
                  <div className="not-user">
                    <p>Please add or create an account!</p>
                  </div>
                  <button
                    onClick={() => {
                      showsignupmodal();
                      setIsProfile(false);
                    }}
                  >
                    Sign Up
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      showsigninmodal();
                      setIsProfile(false);
                    }}
                  >
                    Sign In
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
