import { useEffect, useContext } from "react";
import { useNavigate  } from "react-router-dom";
import Header from "../components/Header";
import Meta from "../components/Meta";
import { UserContext } from "../context/UserContext";

const Dashboard = () => {
  // page content
  const pageTitle = "Dashboard";
  const pageDescription = "This is the Dashboard Page";
  const [token, setToken] = useContext(UserContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if(!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div>
      <Meta title={pageTitle} />
      <Header head={pageTitle} description={pageDescription} />
    </div>
  );
};

export default Dashboard;
