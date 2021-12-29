import { BrowserRouter as Router, useRoutes } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

import { UserProvider } from "./context/UserContext";

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/login", element: <Login /> },
  ]);

  return routes;
};

const AppWrapper = () => {
  return (
    <UserProvider>
      <DefaultLayout>
        <Router>
          <App />
        </Router>
      </DefaultLayout>
    </UserProvider>
  );
};

export default AppWrapper;
