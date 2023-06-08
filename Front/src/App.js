import styles from "./App.module.scss";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import { Suspense, useEffect } from "react";
import Sidebar from "./components/Bar/Sidebar/Sidebar";
import AuthProvider from "./providers/AuthProvider";
import "./i18n/i18n";
import MobileSidebar from "./components/Bar/MobileSidebar/MobileSidebar";
import ReactGA from "react-ga4";

function App() {
  if (localStorage.getItem("mode") === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "");
  }

  useEffect(() => {
    ReactGA.initialize("", { debug: true });
  }, []);

  return (
    <AuthProvider>
      <div className={`d-flex flex-column ${styles.appContainer}`}>
        <Header />
        <div>
          <Sidebar />
          <MobileSidebar />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
