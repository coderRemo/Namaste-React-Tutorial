import { useState } from "react";

const User = (props) => {
  const [count] = useState(0); // 1st useState
  const [count2] = useState(1); // 2nd useState

  return (
    <div className="user-card">
      <h1>Count = {count}</h1>
      <h1>Count2 = {count2}</h1>
      <h2>Name: {props.name}</h2>
      <h3>Location: India</h3>
      <h4>Contact: @c-07</h4>
    </div>
  );
};

export default User;
