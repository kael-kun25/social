import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
const Login = ({ currentUser, setCurrentUser, username, setUsername }) => {
  const [isChecked, setIsChecked] = useState(false);

  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
  const history = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isChecked) {
      setErrorMessage("Please agree to the Terms and Conditions");
      return; // Stop form submission
    }

    console.log(username);
    console.log(password);
    console.log(storedUsers);
    const matchingUser = storedUsers.find(
      (user) => user.name === username && user.password === password
    );

    if (matchingUser) {
      setErrorMessage("");
      setCurrentUser(true);
      history("/");

      // You can redirect the user to a different page or perform other actions here
    } else {
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className=" w-full lg:h-screen flex items-center justify-center ">
      <div className=" xl:w-[50%] xl:h-[600px] lg:w-[80%] lg:h-[600px] w-full  bg-white shadow xl:flex lg:flex items-center xl:rounded-lg lg:rounded-lg overflow-hidden">
        <div className="flex-1 xl:h-full lg:h-full relative h-[500px] md:h-[50vh]  xl:w-[50%] ">
          <div className="absolute top-0 left-0 h-full">
            <img
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="absolute w-full h-full background p-6 flex flex-col md:p-10 justify-center">
            <h1 className="text-5xl xl:text-3xl text-white font-extrabold mb-[10px]">
              Social Media
            </h1>
            <p className="text-[15px] md:text-[18x] xl:text-[14px] lg:text-[15px] text-white font-normal mt-[20px] text-justify">
              Welcome to our vibrant social media platform! Connect, share, and
              engage with friends, family, and people from around the world. Our
              platform is designed to foster meaningful connections, spark
              interesting conversations, and showcase your life's moments.
              Whether you're passionate about sharing photos, expressing
              thoughts, or discovering new trends, our community has a place for
              you. Join us today and be part of a dynamic social experience like
              no other.
            </p>
            <p className=" text-blue-200 text-base mt-3 md:text-[18px] xl:text-[16px] lg:text-[15px] ">
              Don't you have an account?
            </p>
            <Link to="/register" className="w-[200px] ">
              <button className=" border-2 lg:w-[200px] w-[200px] py-2 rounded-md text-white text-[16px] mt-4 cursor-pointer hover:bg-blue-500 ">
                Register
              </button>
            </Link>
          </div>
        </div>

        <div className="flex-1  xl:w-[50%] bg-slate-50 md:h-[50vh] h-[50vh">
          <div className="w-full h-full p-6 flex flex-col items-center justify-center">
            <Card
              color="transparent"
              shadow={false}
              className="lg:w-full h-full  flex items-center justify-center xl:items-start lg:items-start md:items-start">
              <Typography variant="h4" color="blue-gray">
                Log in
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter your details to log in.
              </Typography>
              <form
                onSubmit={handleSubmit}
                className="mt-8 xl:w-full lg:w-full mb-2 max-w-screen-lg sm:w-[500px] w-[300px]">
                <div className="mb-4 flex flex-col gap-6">
                  <Input
                    variant="static"
                    size="lg"
                    label="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="xl:w-full"
                  />
                  <Input
                    variant="static"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    size="lg"
                    label="Password"
                  />
                </div>
                <Checkbox
                  label={
                    <Typography
                      variant="small"
                      color="gray"
                      className="flex items-center font-normal">
                      I agree the
                      <a
                        href="#"
                        className="font-medium transition-colors hover:text-gray-900">
                        &nbsp;Terms and Conditions
                      </a>
                    </Typography>
                  }
                  containerProps={{ className: "-ml-2.5" }}
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                />
                {errorMessage && (
                  <p className="text-red-500 text-center">{errorMessage}</p>
                )}
                <Button type="submit" className="mt-6" fullWidth>
                  Log in
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
