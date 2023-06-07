import React, { useState } from "react";
import Head from "next/head";
import type { NextPage } from "next";
import { RainbowKitCustomConnectButton } from "~~/components/scaffold-eth";

const Propose: NextPage = () => {
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>{`
          .form-control {
            border: 3px solid #8d56a9;
            border-radius: 0;
            box-shadow: 1px 1px 0px rgba(0, 0, 0, 0.1);
            width: 100%;
            transition: border-color 0.3s;
          }

          .form-control:focus {
            border-color: ${isInputFocused ? "#6B7280" : "#8d56a9"};
            outline: none;
          }

          .form-label {
            color: #6B7280;
          }

          .btn-primary {
            color: #FFFFFF;
            background-color: #6B7280;
            border-color: #6B7280;
          }

          .btn-primary:hover {
            background-color: #6B7280;
            border-color: #6B7280;
          }
        `}</style>
        <title>Propose</title>
      </Head>
      <div
        style={{
          background: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <div style={{ position: "absolute", top: "10px", right: "100px" }}>
          <RainbowKitCustomConnectButton />
        </div>

        <span className="block text-9xl pl-10 absolute top-0 left-10 my-soul-font" style={{ color: "#8d56a9" }}>
          propose
        </span>

        <form style={{ width: "50%" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              title
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputTitle"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
          </div>
          <div className="mb-3" style={{ display: "flex" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label htmlFor="exampleInputDAO" className="form-label">
                DAO
              </label>
              <select className="form-control" id="exampleInputDAO" onFocus={handleInputFocus} onBlur={handleInputBlur}>
                <option value="">Select DAO</option>
                <option value="dao1">demoDAO</option>
                <option value="dao2">anotherDAO</option>
              </select>
            </div>
            <div style={{ flex: 1, marginLeft: "10px" }}>
              <label htmlFor="exampleInputAmount" className="form-label">
                amount
              </label>
              <div className="dollar-input">
                <span className="dollar-sign">$</span>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputAmount"
                  onFocus={handleInputFocus}
                  onBlur={handleInputBlur}
                />
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputProposal" className="form-label">
              proposal
            </label>
            <textarea
              className="form-control"
              id="exampleInputProposal"
              rows={15}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></textarea>
          </div>
          <div style={{ display: "flex", justifyContent: "center", paddingTop: "25px" }}>
            <button
              className="btn btn-primary bg-transparent btn-lg text-primary hover:bg-primary hover:text-white"
              type="button"
              style={{
                borderWidth: "3px",
                textTransform: "none",
                boxShadow: "3px 3px 0px rgba(0, 0, 0, 0.1)",
                borderColor: "#6B7280",
                borderRadius: "0",
              }}
            >
              submit
            </button>
          </div>
        </form>
      </div>
      <style jsx>{`
        .centered-text {
          display: flex;
          justify-content: center;
          height: 100vh;
          position: absolute;
          top: 0;
        }

        .text-primary {
          color: #6b7280;
          font-size: 24px;
          font-weight: bold;
          text-align: center;
        }
        .dollar-input {
          position: relative;
        }

        .dollar-sign {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-weight: bold;
        }

        .form-control {
          padding-left: 20px; /* Add some padding to accommodate the $ symbol */
        }
      `}</style>
    </div>
  );
};

export default Propose;
