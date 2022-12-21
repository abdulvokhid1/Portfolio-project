import React from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const showActiveUsers = searchParams.get("filter") === "active";
  return (
    <>
      <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <button onClick={() => setSearchParams({ filter: "active" })}>
          Users Active
        </button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
        <div>
          {showActiveUsers ? (
            <h1>Sowing active users</h1>
          ) : (
            <h1>no any users</h1>
          )}
        </div>
        {/* <Outlet /> */}
        {/* <div>
          <Link to="userdetails">UserDetails</Link>
        </div> */}
      </div>
    </>
  );
};

export default Users;
