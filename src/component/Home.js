import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <div
        className="home-container"
        style={{
          color: "#538dd7",
          textAlign: "center",
          fontSize: "30px",
          textTransform: "uppercase",
        }}
      >
        {user && user.auth === true ? (
          <h4>Welcome to the user management page.</h4>
        ) : (
          <h4>Welcome to the user management page, please log in to use.</h4>
        )}
      </div>
    </>
  );
};

export default Home;
