import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormData = async () => {
    const { name, email, password } = formData;
    if (name === "" || email === "" || password === "") {
      alert("please enter input field");
    }

    try {
      const url = "http://localhost:3000/user/login";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      const { success, message } = result;
      if (success) {
        alert("register success");
        setTimeout(() => {
          navigate("/");
        }, 500);
      }
    } catch (error) {}
  };
  return (
    <>
      <div>
        <form onSubmit={(e) => e.preventDefault()} action="">
          <div>
            <label htmlFor="email">email</label>
            <input
              type="text"
              value={formData.email}
              placeholder="email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input
              type="password"
              value={formData.password}
              placeholder="password"
              name="password"
              onChange={handleChange}
            />
          </div>
          <button onClick={handleFormData} type="submit">
            register
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;