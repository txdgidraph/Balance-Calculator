import axios from "axios";
import Head from "next/head";
import React, { useEffect, useState } from "react";

function CalculatorInterface() {
  const [inputValue, setInputValue] = useState("");
  const [operationResult, setOperationResult] = useState("");
  const [updatedUserBalance, setUpdatedUserBalance] = useState("");

  const [apiData, setApiData] = useState(null);

  const [query, setQuery] = useState({
    num1: "",
    num2: "",
    operationType: "",
  });
  let savedEmail = localStorage.getItem("email");
  const addNumber = (number) => {
    setInputValue((prevValue) => prevValue + number);
  };

//get user Balance.


  const handleRandomString = () => {
    var axios = require("axios");
    var data = JSON.stringify({
      num1: null,
      num2: null,
    });

    var config = {
      method: "post",
      url: "http://192.168.1.27:8081/operations/operationTypes?userName=test@test.com&operationType=RANDOM_STRING&operationDto=randomStringUrl&=\n",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const clearInput = () => {
    setInputValue("");
    setOperationResult("");
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const expression = inputValue;
    const regex = /(\d+)\s*([-+*/%])\s*(\d+)/; // regular expression to match the expression
    const match = expression.match(regex); // match the expression against the regular expression

    if (match) {
      const num1 = match[1]; // first number in the expression
      const operationType = match[2]; // operation type in the expression
      const num2 = match[3]; // second number in the expression

      setQuery({
        num1,
        num2,
        operationType,
      });
    } else {
      setQuery({
        num1: "",
        num2: "",
        operationType: "",
      });
    }
  };

  useEffect(() => {
    let operationValue;
    switch (query.operationType) {
      case "+":
        operationValue = "ADDITION";
        break;
      case "-":
        operationValue = "SUBTRACTION";
        break;
      case "/":
        operationValue = "DIVISION";
        break;
      case "*":
        operationValue = "MULTIPLICATION";
        break;
      case "%":
        operationValue = "MODULUS";
    }
    if (query.num1 !== "" && query.num2 !== "" && query.operationType !== "") {
      const data = JSON.stringify({
        num1: query.num1,
        num2: query.num2,
      });

      const config = {
        method: "post",
        url: `http://192.168.1.27:8081/operations/operationTypes?userName=${savedEmail}&operationType=${operationValue}&operationDto=num1&operationDto=num2`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      axios(config)
        .then(function (response) {
          setApiData(response.data);
          setOperationResult(response.data.operationResponse);
          setUpdatedUserBalance(response.data.updatedBalance);
        })
        .catch(function (error) {});
    }
  }, [query]);

  return (
    <div>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        />
      </Head>
      <div>
        <form
          acceptCharset="UTF-8"
          enctype="multipart/form-data"
          id="ajaxForm"
          onSubmit={handleSubmit}
        >
          <div class="container-fluid">
            <div class="row">
              <div class="col-sm-6 col-sm-offset-3">
                <div class="calculator">
                  <div class="row">
                    <div class="col-xs-12">
                      <input
                        type="submit"
                        value={`Current Balance: ${updatedUserBalance}`}
                        className="btn login_btn"
                        style={{
                          width: "15em",
                          marginBottom: "1em",
                          cursor: "no-drop",
                        }}
                      />
                      <input
                        type="text"
                        class="form-control"
                        id="result"
                        placeholder="0"
                        value={inputValue}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        class="form-control"
                        id="result"
                        placeholder={`ANSWER = ${operationResult}`}
                        readOnly
                        style={{
                          backgroundColor: "black",
                          color: "",
                          fontWeight: "bold",
                        }}
                      />
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">
                      <button type="button" class="clear" onClick={clearInput}>
                        AC
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("±")}>
                        &plusmn;
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={handleRandomString}>
                        Str
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button
                        type="button"
                        class="orange"
                        onClick={() => addNumber("/")}
                      >
                        &divide;
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("7")}>
                        7
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("8")}>
                        8
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("9")}>
                        9
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button
                        type="button"
                        class="orange"
                        onClick={() => addNumber("*")}
                      >
                        &times;
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("4")}>
                        4
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("5")}>
                        5
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("6")}>
                        6
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button
                        type="button"
                        class="orange"
                        onClick={() => addNumber("-")}
                      >
                        &minus;
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("1")}>
                        1
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("2")}>
                        2
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber("3")}>
                        3
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button
                        type="button"
                        class="orange"
                        onClick={() => addNumber("+")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-xs-6">
                      <button
                        type="button"
                        class="zero"
                        onClick={() => addNumber("0")}
                      >
                        0
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button type="button" onClick={() => addNumber(".")}>
                        .
                      </button>
                    </div>
                    <div class="col-xs-3">
                      <button class="orange">=</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CalculatorInterface;
