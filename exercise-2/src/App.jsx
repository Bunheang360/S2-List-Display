import React from "react";

export const vinhData = {
  firstName: "Vinh",
  lastName: "Hoang Nhu",
  title: "PN Training Manager",
};

export const myData = {
  firstName: "My",
  lastName: "Ngo",
  title: "PN Trainer",
};

// Modified User component to accept props
export function User({ userData }) {
  return (
    <div id="user" data-testid="user">
      <h2>{userData.firstName} {userData.lastName}</h2>
      <p>{userData.title}</p>
    </div>
  );
}

function App() {
  return (
    <div id="app">
      <h1>PNV React Team !!</h1>
      <p>Here are some PNV React masters, do you know them?</p>
      <User userData={vinhData} /> {/* Pass vinhData to first User */}
      <User userData={myData} /> {/* Pass myData to second User */}
    </div>
  );
}

export default App;