import React, { useEffect } from "react";
import Account from "../Components/Account";
import Header from "../Layout/Header";

import { useSelector, useDispatch } from "react-redux";
import UserNameEdit from "../Components/UserNameEdit";

// Données des différents comptes:
const dataAccount = [
  {
    id: "1",
    title: "Argent Bank Checking (x8349)",
    amount: "$2,082.79",
    description: "Available Balance",
  },
  {
    id: "2",
    title: "Argent Bank Savings (x6712)",
    amount: "$10,928.42",
    description: "Available Balance",
  },
  {
    id: "3",
    title: "Argent Bank Credit Card (x8349)",
    amount: "$184.30",
    description: "Current Balance",
  },
];

const User = () => {
  const authenticated = useSelector((state) => state.authenticated);
  const token = useSelector((state) => state.token);
  const username = useSelector((state) => state.username);
  const dispatch = useDispatch();

  useEffect(() => {
    if (authenticated) {
      const fetchData = async () => {
        try {
          // Requête Fetch (POST):
          const response = await fetch(
            "http://localhost:3001/api/v1/user/profile",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.ok) {
            const data = await response.json();
            // Récupération de l'action USER_PROFILE:
            dispatch({
              type: "USER_PROFILE",
              payload: {
                username: data.body.userName,
                firstname: data.body.firstName,
                lastname: data.body.lastName,
              },
            });
          }
        } catch (err) {
          console.log("Profile retrieval error");
        }
      };

      fetchData();
    }
  }, [dispatch, authenticated, username, token]);
  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <UserNameEdit />
        <h2 className="sr-only">Accounts</h2>
        {dataAccount.map((data, id) => (
          <Account
            key={id}
            title={data.title}
            amount={data.amount}
            description={data.description}
          />
        ))}
      </main>
    </div>
  );
};

export default User;
