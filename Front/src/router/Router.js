import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";
import { userLoader } from "../loaders/userLoader";
import ProtectedRoutesAuth from "../protectedRoutes/ProtectedRouteAuth";
import ProtectedRoutesNotAuth from "../protectedRoutes/ProtectedRouteNotAuth";
import Information from "../pages/Account/Information/Information";
import PasswordLost from "../pages/PasswordLost/PasswordLost";
import SendLink from "../pages/PasswordLost/SendLink/SendLink";
import ResetPassword from "../pages/PasswordLost/ResetPassword/ResetPassword";
import CreateEvent from "../pages/CreateEvent/CreateEvent";
import Step1 from "../pages/CreateEvent/step/Step1/Step1";
import EventDetail from "../pages/EventDetail/EventDetail";
import Step2 from "../pages/CreateEvent/step/Step2/Step2";
import Step3 from "../pages/CreateEvent/step/Step3/Step3";
import Step4 from "../pages/CreateEvent/step/Step4/Step4";
import Admin from "../pages/Admin/Admin";
import ProtectedRouteAdmin from "../protectedRoutes/ProtectedRouteAdmin";
import Users from "../pages/Admin/Users/Users";
import Events from "../pages/Admin/Events/Events";

export const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    loader: userLoader,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: ":id",
        element: <EventDetail />,
      },
      {
        path: "signin",
        element: (
          <ProtectedRoutesAuth>
            <Signin />
          </ProtectedRoutesAuth>
        ),
      },
      {
        path: "bookmark",
        element: (
          <ProtectedRoutesNotAuth>
            <Homepage />
          </ProtectedRoutesNotAuth>
        ),
      },
      {
        path: "signup",
        element: (
          <ProtectedRoutesAuth>
            <Signup />
          </ProtectedRoutesAuth>
        ),
      },
      {
        path: "account/information",
        element: (
          <ProtectedRoutesNotAuth>
            <Information />
          </ProtectedRoutesNotAuth>
        ),
      },
      {
        path: "createEvent",
        element: (
          <ProtectedRoutesNotAuth>
            <CreateEvent />
          </ProtectedRoutesNotAuth>
        ),
        children: [
          {
            path: "step1",
            element: <Step1 />,
          },
          {
            path: "step2",
            element: <Step2 />,
          },
          {
            path: "step3",
            element: <Step3 />,
          },
          {
            path: "step4",
            element: <Step4 />,
          },
        ],
      },
      {
        path: "passwordlost",
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
            path: ":token",
            element: <ResetPassword />,
          },
        ],
      },
      {
        path: "admin",
        element: (
          <ProtectedRouteAdmin>
            <Admin />
          </ProtectedRouteAdmin>
        ),
        children: [
          {
            path: "users",
            element: (
              <ProtectedRouteAdmin>
                <Users />
              </ProtectedRouteAdmin>
            ),
          },
          {
            path: "events",
            element: (
              <ProtectedRouteAdmin>
                <Events />
              </ProtectedRouteAdmin>
            ),
          },
        ],
      },
    ],
  },
]);
