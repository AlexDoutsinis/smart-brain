import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn)
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          className="f3 link dim black underline pa3 pointer"
          onClick={onRouteChange.bind(null, "signin")}
        >
          Sign Out
        </p>
      </nav>
    );

  return (
    <nav style={{ display: "flex", justifyContent: "flex-end" }}>
      <p
        className="f3 link dim black underline pa3 pointer"
        onClick={onRouteChange.bind(null, "signin")}
      >
        Sign In
      </p>

      <p
        className="f3 link dim black underline pa3 pointer"
        onClick={onRouteChange.bind(null, "register")}
      >
        Register
      </p>
    </nav>
  );
};

export default Navigation;
