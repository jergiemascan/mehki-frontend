import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import Landingpage from "./components/Landingpage";
import ForumPage from "./components/ForumPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <>
      <Router className="App">
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/signin" element={<LoginForm />} />
          <Route path="/forum" element={<ForumPage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
