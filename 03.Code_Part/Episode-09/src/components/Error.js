import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div className="error-container">
      <h1>Ooop's!!! </h1>
      <h2>Something went Wrong!!</h2>
      <h3>
        {error.statusText} : {error.status}
      </h3>
      <h4>{error.data}</h4>
    </div>
  );
};

export default Error;
