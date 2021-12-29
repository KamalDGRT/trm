import { Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";

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
    <DefaultLayout>
      <Router>
        <App />
      </Router>
    </DefaultLayout>
  );
};

export default AppWrapper;
