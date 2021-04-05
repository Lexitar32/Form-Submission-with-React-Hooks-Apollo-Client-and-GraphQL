import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_USERS } from "../GraphQL/Queries";
import "../styles/style.css";

function GetUsers() {
  const { error, loading, data } = useQuery(LOAD_USERS);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllUsers);
    }
  }, [data]);

  return (
    <>
      <h2 className="text-center mt-3">All Users</h2>
      <div className="container do-big-width mt-4">
        {users.map((val) => {
          return (
            <div className="card do-width" key={val.id}>
              <div className="card-header">
                Full Name: {val.firstName} {val.lastName}
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Email Address: {val.email}</li>
                <li className="list-group-item">Password: {val.password}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GetUsers;
