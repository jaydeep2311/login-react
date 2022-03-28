import React from "react";

const Register = () => {
  const initial = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    description: "",
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
    fetch("https://masai-api-mocker.herokuapp.com/auth/register", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  }
  return (
    <div>
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        onChange={(e) => handlechange(e)}
      />
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
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={(e) => handlechange(e)}
      />
      <input
        type="text"
        name="mobile"
        placeholder="Mobile"
        onChange={(e) => handlechange(e)}
      />
      <input
        type="text"
        name="description"
        placeholder="description"
        onChange={(e) => handlechange(e)}
      />
      <button type="submit" onClick={() => handlesubmit()}>
        Submit
      </button>
      <button type="submit">Redirect to login page</button>
    </div>
  );
};

export default Register;
