import Head from "next/head";
import React from "react";

function CalculatorInterface() {
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
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button class="clear">AC</button>
                  </div>
                  <div class="col-xs-3">
                    <button>&plusmn;</button>
                  </div>
                  <div class="col-xs-3">
                    <button>&percnt;</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange">&divide;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button>7</button>
                  </div>
                  <div class="col-xs-3">
                    <button>8</button>
                  </div>
                  <div class="col-xs-3">
                    <button>9</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange">&times;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button>4</button>
                  </div>
                  <div class="col-xs-3">
                    <button>5</button>
                  </div>
                  <div class="col-xs-3">
                    <button>6</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange">&minus;</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-3">
                    <button>1</button>
                  </div>
                  <div class="col-xs-3">
                    <button>2</button>
                  </div>
                  <div class="col-xs-3">
                    <button>3</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange">+</button>
                  </div>
                </div>
                <div class="row">
                  <div class="col-xs-6">
                    <button class="zero">0</button>
                  </div>
                  <div class="col-xs-3">
                    <button>.</button>
                  </div>
                  <div class="col-xs-3">
                    <button class="orange">=</button>
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
