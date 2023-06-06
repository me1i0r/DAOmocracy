import React from "react";

const Review = () => {
  return (
    <div className="review-page">
      <p className="centered-text">nothing to see here... </p>
      <style jsx>{`
        .review-page {
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh;
        }

        .centered-text {
          text-align: center;
          font-size: 24px;
        }
      `}</style>
    </div>
  );
};

export default Review;
