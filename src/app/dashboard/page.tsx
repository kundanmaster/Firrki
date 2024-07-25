import React from "react";
// import { auth } from "@/auth";
// import NavBar from "../components/NavBar";

const Dashboard = async () => {
  // const session = await auth();

  // if (!session) return <div>Not authenticated</div>;

  return (
    <>
    {/* <NavBar/> */}
      {/* <div>
        <pre>{JSON.stringify(session, null, 2)}</pre>
      </div>

      <div>
        <h1>Dashboard</h1>
        <p>This is your dashboard. Only accessible to authenticated users.</p>
      </div>
      <div>
        {session && session.user ? (
          <p>Welcome, {session.user.email}!</p>
        ) : (
          <p>Please sign in.</p>
        )}
      </div> */}
    </>
  );
};

export default Dashboard;
