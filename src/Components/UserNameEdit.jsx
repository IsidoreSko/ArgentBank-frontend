import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import iconParam from "../Assets/Images/icon-param.webp";

function UserNameEdit() {
  const [newUsername, setNewUsername] = useState("");
  const [showForm, setShowForm] = useState(false);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.token);
  const firstname = useSelector((state) => state.firstname);
  const lastname = useSelector((state) => state.lastname);
  const username = useSelector((state) => state.username);

  const UserNameChange = async (event) => {
    event.preventDefault();

    try {
      // Requête Fetch (PUT):
      const response = await fetch(
        "http://localhost:3001/api/v1/user/profile",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ userName: newUsername }),
        }
      );
      // Récupération de l'action USER_PROFILE:
      if (response.ok) {
        dispatch({
          type: "USER_PROFILE",
          payload: {
            username: newUsername,
            firstname: firstname,
            lastname: lastname,
          },
        });

        setNewUsername("");
      } else {
        console.error("Error");
      }
    } catch (error) {
      console.error("Error");
    }
  };

  return (
    <section className="welcome-or-form">
      {showForm ? (
        <div>
          <h2>Edit User info</h2>
          <form>
            <div className="input-edit">
              <label htmlFor="username">Username : </label>
              <input
                type="text"
                className="username"
                id="username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
              />
            </div>
            <div className="input-edit">
              <label htmlFor="username"> First Name: </label>
              <input
                type="text"
                className="username"
                id="firstname"
                value={firstname}
                disabled
              />
            </div>
            <div className="input-edit">
              <label htmlFor="username"> Last Name: </label>
              <input
                type="text"
                className="username"
                id="lastname"
                value={lastname}
                disabled
              />
            </div>
            <button
              className="edit-button edit-button-username"
              type="submit"
              onClick={UserNameChange}
            >
              Save
            </button>
            <button
              className="edit-button edit-button-username"
              onClick={() => setShowForm(false)}
            >
              Cancel
            </button>
          </form>
        </div>
      ) : (
        <>
          <h1>
            Welcome back <br />
            {username}!
          </h1>
          <button
            className="edit-button button-change"
            onClick={() => setShowForm(true)}
          >
            <img src={iconParam} className="icon-param" alt="icone paramètre" />
            Change your username
          </button>
        </>
      )}
    </section>
  );
}

export default UserNameEdit;
