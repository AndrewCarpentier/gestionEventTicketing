import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import { userLoader } from "../loaders/userLoader";
import ProtectedRoutesAuth from "../protectedRoutes/ProtectedRouteAuth";
import ProtectedRoutesNotAuth from "../protectedRoutes/ProtectedRouteNotAuth";
import Information from "../pages/Profile/Information/Information";
import PasswordLost from "../pages/PasswordLost/PasswordLost";
import SendLink from "../pages/PasswordLost/SendLink/SendLink";
import ResetPassword from "../pages/PasswordLost/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "/signin",
        element: (
          <ProtectedRoutesAuth>
            <Signin />
          </ProtectedRoutesAuth>
        ),
      },
      {
        path: "/signup",
        element: (
          <ProtectedRoutesAuth>
            <Signup />
          </ProtectedRoutesAuth>
        ),
      },
      {
        path: "/profile/information",
        element: (
          <ProtectedRoutesNotAuth>
            <Information />
          </ProtectedRoutesNotAuth>
        ),
      },
      {
        path: "/passwordlost",
        element: (
          <ProtectedRoutesAuth>
            <PasswordLost />
          </ProtectedRoutesAuth>
        ),
        children: [
          {
            index: true,
            element: <SendLink />,
          },
          {
            path: "passwordlost/:token",
            element: <ResetPassword />,
          },
        ],
      },
    ],
  },
]);
