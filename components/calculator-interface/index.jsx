import Head from "next/head";
import React, { useState } from "react";

function CalculatorInterface() {
  const [inputValue, setInputValue] = useState("");
  const addNumber = (number) => {
    setInputValue((prevValue) => prevValue + number);
  };

  const clearInput = () => {
    setInputValue("");
  };


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
        <div class="container">
          <div class="row">
            <div class="col-sm-6 col-sm-offset-3">
              <div class="calculator">
                <div class="row">
                  <div class="col-xs-12">
                    <input
                      type="text"
                      class="form-control"
                      id="result"
                      placeholder="0"
                      readonly
                      value={inputValue}
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button class="clear" onClick={clearInput}>AC</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("±")}>&plusmn;</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("%")}>%</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange" onClick={() => addNumber("÷")}>&divide;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("7")}>7</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("8")}>8</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("9")}>9</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange" onClick={() => addNumber("*")}>&times;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("4")}>4</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("5")}>5</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("6")}>6</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange" onClick={() => addNumber("-")}>&minus;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("1")}>1</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("2")}>2</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber("3")}>3</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange" onClick={() => addNumber("+")}>+</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-6">
                    <button class="zero" onClick={() => addNumber("0")}>0</button>
                  </div>
                  <div class="col-xs-3">
                    <button onClick={() => addNumber(".")}>.</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange" onClick={() => addNumber("=")}>=</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalculatorInterface;
