import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Docs from "./components/Docs";
import { Navigate, Route, Routes } from "react-router";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Overview from "./components/dashboard/Overview";
import Users from "./components/dashboard/Users";
import Settings from "./components/dashboard/Settings";
import Auth from "./components/auth/Auth";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ControlledSignUp from "./components/auth/UncontrolledSignupform";
import SignupForm from "./components/auth/Signup";
import UserNamecontext from "./components/context/UserNamecontext";

function App() {
  console.log("hello");
  return (
    <>
      <UserNamecontext>
        <Navbar />

        <Routes>
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<Navigate to="home" replace />} />

            <Route path="home" element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="docs" element={<Docs />} />
            {/* redirect */}
            {/* <Route index element={<Navigate to="overview" replace />} /> */}

            {/* <Route index element={<Overview />} /> */}

            <Route path="overview" element={<Overview />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>

          <Route path="/auth" element={<Auth />}>
            <Route index element={<Navigate to={"signup"} replace />} />

            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignupForm />} />
          </Route>
        </Routes>

        <footer>Footer</footer>
      </UserNamecontext>
    </>
  );
}

export default App;
