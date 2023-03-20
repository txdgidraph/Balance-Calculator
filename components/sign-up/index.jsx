import Head from "next/head";
import React, { useState } from "react";
import axios from "axios";
const SignUp = () => {
  const [query, setQuery] = useState({
    userName: "",
    password: "",
    balance: "",
    status: "",
  });

  const handleUserNameChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleBalanceChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };
  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleStatusChange = (e) => {
    const { value } = e.target;
    setQuery((prevState) => ({ ...prevState, status: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var data = JSON.stringify({
      userName: query.userName,
      password: query.password,
      balance: Number(query.balance),
      status: query.status ? "ACTIVE" : "INACTIVE",
    });

    var config = {
      method: "post",
      url: "http://192.168.1.27:8081/users",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        window.location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });

  };

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
          integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.3.1/css/all.css"
          integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" type="text/css" href="styles.css" />
      </Head>
      {/* <div class="container">
        <div class="d-flex justify-content-center h-100"> */}
      <div class="card">
        <div class="card-header">
          <h3>Sign Up </h3>
        </div>
        <div class="card-body">
          <form
            acceptCharset="UTF-8"
            enctype="multipart/form-data"
            id="ajaxForm"
            onSubmit={handleSubmit}
          >
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="email"
                name="userName"
                value={query.userName}
                onChange={handleUserNameChange}
                required
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-user"></i>
                </span>
              </div>
              <input
                type="number"
                class="form-control"
                placeholder="balance"
                name="balance"
                value={query.balance}
                onChange={handleBalanceChange}
                required
              />
            </div>
            <div class="input-group form-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="fas fa-key"></i>
                </span>
              </div>
              <input
                type="password"
                class="form-control"
                placeholder="password"
                name="password"
                value={query.password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <select class="select" onChange={handleStatusChange} required>
              <option value="" disabled selected>
                Select your status
              </option>
              <option value="1">Active</option>
              <option value="2">Inactive</option>
            </select>
            <div class="form-group">
              <input
                type="submit"
                value="Sign Up"
                class="btn float-right login_btn"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    //   </div>
    // </div>
  );
};
export default SignUp;
