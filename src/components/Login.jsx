import React from "react";
import { AuthContext } from "../Contexts/Auth";

const Login = () => {
  const { isAuth, setisAuth } = React.useContext;
  const initial = {
    email: "",
    password: "",
  };
  const [data, setdata] = React.useState(initial);
  function handlechange(e) {
    const { name, value } = e.target;
    const newdata = {
      ...data,
      [name]: value,
    };
    setdata(newdata);
  }
  function handlesubmit() {
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          setisAuth(false);
        } else {
          setisAuth(true);
        }
        console.log(isAuth);
      });
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input
        type="email"
        name="email"
        placeholder="Email"
        onChange={(e) => handlechange(e)}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        onChange={(e) => handlechange(e)}
      />
      <button type="submit" onClick={() => handlesubmit()}>
        Submit
      </button>
    </div>
  );
};

export default Login;
