import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
function App() {
  const [currentUser, setCurrentUser] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [agree, setAgree] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  console.log(fullname);
  const Protected = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };

  console.log(currentUser);
  const router = createBrowserRouter([
    {
      path: "/login",
      element: (
        <Login
          username={username}
          setUsername={setUsername}
          currentUser={currentUser}
          setCurrentUser={setCurrentUser}
          name={name}
          setName={setName}
          password={password}
          setPassword={setPassword}
          fullname={fullname}
          setFullname={setFullname}
        />
      ),
    },
    {
      path: "/register",
      element: (
        <Register
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          agree={agree}
          setAgree={setAgree}
          fullname={fullname}
          setFullname={setFullname}
        />
      ),
    },
    {
      path: "/",
      element: (
        <Protected>
          <Home
            username={username}
            setUsername={setUsername}
            fullname={fullname}
          />
        </Protected>
      ),
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
