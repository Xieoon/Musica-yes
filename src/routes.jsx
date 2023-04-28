import { Routes, Route } from "react-router-dom";
import { Login } from "./companents/login/login";
import { SignUp } from "./companents/signup/signup";
import Wrapper from "./companents/wrapper";
import MyTrack from "./companents/fleck/fleck";
import Fleck from "./companents/fleck/fleck";
import Collection from "./companents/fleck/collection";
import { ProtectedRoute } from "./protectedRoute";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<Wrapper />} />
      <Route element={<ProtectedRoute />}>
        <Route path="playlist" element={<MyTrack />} />
        <Route
          path="/collection/:id"
          element={<Fleck content={<Collection />} />}
        ></Route>
      </Route>

      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
};
