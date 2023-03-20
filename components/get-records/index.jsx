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
      })
      .catch(function (error) {
        console.log(error);
      });
    userRecords?.map((item) => {
      console.log(item);
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
      <button className="btn btn_login" onClick={handleGetRecords}>
        Get Records
      </button>
      <div className="container-fluid" style={{color:"white"}}>
        <div className="row">
          <div className="col-2">USER-MAIL</div>
          <div className="col-2">Operation Type</div>
          <div className="col-2">Operation Cost</div>
          <div className="col-2">Operation Response</div>
          <div className="col-2">User</div>
        </div>
      </div>
    </div>
  );
};

export default GetRecords;
