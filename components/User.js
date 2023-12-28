import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    // API Call

    // When we render this the render is log then useEffect and when the when the useEffect return will loged after we leave a page 
    const timer = setInterval(() => {
      console.log("NAMASTE REACT OP");
    }, 1000);

    console.log("useEffect")
    
    return () => {
      clearInterval(timer)
      console.log("UseEFFect return ") // after leaving the page it will printed
    }
  }, []);

  console.log("render")

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
