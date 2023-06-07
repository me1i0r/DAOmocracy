import React, { useState } from "react";
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
      <head>
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
      </head>
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
        <form style={{ width: "50%" }}>
          <div className="mb-3">
            <label htmlFor="exampleInputTitle" className="form-label">
              Title
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
                <option value="dao1">DAO 1</option>
                <option value="dao2">DAO 2</option>
                <option value="dao3">DAO 3</option>
              </select>
            </div>
            <div style={{ flex: 1, marginLeft: "10px" }}>
              <label htmlFor="exampleInputAmount" className="form-label">
                Amount
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputAmount"
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputProposal" className="form-label">
              Proposal
            </label>
            <textarea
              className="form-control"
              id="exampleInputProposal"
              rows={10}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            ></textarea>
          </div>
          <button
            className="btn btn-primary btn-lg"
            type="button"
            style={{
              borderWidth: "3px",
              textTransform: "none",
              boxShadow: "2px 2px 0px rgba(0, 0, 0, 0.1)",
              borderColor: "#6B7280",
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Propose;
