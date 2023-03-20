import Head from "next/head";
import React, { useState } from "react";

const GetRecords = () => {
  const [userRecords, setUserRecords] = useState("");
  const handleGetRecords = () => {
    var axios = require("axios");

    var config = {
      method: "get",
      url: "http://192.168.1.27:8081/records",
      headers: {},
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setUserRecords(response.data);
        //console.log(userRecords)
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
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <button className="btn btn_login" onClick={handleGetRecords}>
        Get Records
      </button>
      <div className="container-fluid" style={{ color: "white" }}>
        <div className="row">
          <div className="col-2"><h4>USER-MAIL</h4></div>
          <div className="col-2"><h4>Operation Type</h4></div>
          <div className="col-2"><h4>Operation Cost</h4></div>
          <div className="col-2"><h4>Operation Response</h4></div>
          <div className="col-2"><h4>User</h4></div>
        </div>
      </div>
      {userRecords && userRecords?.map((item) => {
        const operationType = item.operation.type;
        const userName = item.user.userName;
        const userBalance = item.userBalance;
        const amount = item.amount;
        const operationResponse = item.operationResponse;
        return(
          <div className="container-fluid" style={{color:"white"}}>
            <div className="row">
              <div className="col-2">{userName}</div>
              <div className="col-2">{operationType}</div>
              <div className="col-2">{amount}</div>
              <div className="col-2">{operationResponse}</div>
              <div className="col-2">{userBalance}</div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default GetRecords;
