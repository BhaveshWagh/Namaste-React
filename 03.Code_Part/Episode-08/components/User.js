import { useState } from "react";

const User = ({ name }) => {
  const [count,setCount] = useState(0);
  const [count2] = useState(1);
  return (
    <div className="user-card">
      <h1>
        Count: {count} : Count_2 : {count2}
      </h1>
      <h2>Name: {name}</h2>
      <h3>Location: Pune</h3>
      <h4>Contact: 7058857983</h4>
    </div>
  );
};

export default User;
