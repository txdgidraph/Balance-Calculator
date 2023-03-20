import Head from "next/head";
import React, { useEffect, useState } from "react";

const LoginComponent = (props) => {
  const [query, setQuery] = useState({
    userName: "",
    password: "",
  });
  
  const [loginState, setLoginState] = useState(false);
  const handleUserNameChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setQuery((prevState) => ({ ...prevState, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    props.onMessage(loginState);
    var axios = require("axios");
    var data = JSON.stringify({
      userName: query.userName,
      password: query.password,
    });
  var config = {
    method: "post",
    url: "http://192.168.1.27:8081/users/logIn",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then(function (response) {
      if(response.data.token == "true"){
        setLoginState(true)
      };
      console.log("state hii = ", loginState)
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  useEffect(() => {
    props.onMessage(loginState);
  }, [loginState]);

loginState && localStorage.setItem("email", query.userName);
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
      <div class="container">
        <div class="d-flex justify-content-center h-100">
          <div class="card">
            <div class="card-header">
              <h3>Sign In</h3>
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
                <div class="row align-items-center remember">
                  <input type="checkbox" />
                  Remember Me
                </div>
                <div class="form-group">
                  <input
                    type="submit"
                    value="Login"
                    class="btn float-right login_btn"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
