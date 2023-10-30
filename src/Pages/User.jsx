import React, { useEffect } from "react";
import Account from "../Components/Account";
import Header from "../Layout/Header";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
// import Edit from "../components/Edit";

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
  const dispatch = useDispatch();
  const firstname = useSelector((state) => state.firstname);
  const lastname = useSelector((state) => state.lastname);
  const username = useSelector((state) => state.username);

  useEffect(() => {
    if (authenticated) {
      const fetchData = async () => {
        try {
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
        <div className="header">
          <h1>
            Welcome back
            <br />
            {firstname} {lastname}!
          </h1>
        </div>
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
