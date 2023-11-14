import React from "react";

const dashboardStyles = {
  textAlign: "center",
  backgroundColor: "#f0f0f0",
  padding: "20px",
};

const Dashboard = () => {
  return (
    <div style={dashboardStyles}>
      <h1>Welcome to Your Dashboard</h1>
      <p>
        You are now logged in and can access your personalized dashboard
        content here.
      </p>
      <div>
        {/* Add more components and content specific to your dashboard */}
      </div>
    </div>
  );
};

export default Dashboard;
