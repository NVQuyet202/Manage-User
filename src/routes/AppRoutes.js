import { Routes, Route } from "react-router-dom";
import Home from "../component/Home";
import Login from "../component/Login";
import TableUser from "../component/TableUser";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/users"
          element={
            <PrivateRoute path="/users">
              <TableUser />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
