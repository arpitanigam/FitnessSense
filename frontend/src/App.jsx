import { useState, useEffect } from "react";
import Login from "./components/Login.jsx";
import NavBar from "./components/NavBar.jsx";
import ExercisePlanner from "./components/ExercisePlanner.jsx";
import FitSense from "./components/FitSense.jsx"
import { loadMediaPipe } from "./helper/loadMediaPipe.js";
import "./styles/App.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [activeNav, setActiveNav] = useState("dashboard");

  useEffect(() => {
    // start loading media pipe when app is first opened
    loadMediaPipe();
  }, []);

	// keep this commented out until login is implemented
	// if (!user) {
	// 	return <Login setUser={setUser} />;
	// }

	let content;
  if (activeNav === "exercise planner") {
    content = <ExercisePlanner />;
  } else if (activeNav === "fitsense") {
    content = <FitSense />
  } else if (activeNav === "dashboard") {
    content = <h1 className="title">Dashboard</h1>;
  }

	return (
    <div className="page">
      <div className="brand">FitSense</div>
      <div className="container">
        <NavBar setActiveNav={setActiveNav} />
        {content}
        {user && <h2 className="title">Hello, {user}!</h2>}
      </div>
    </div>
  );
}

