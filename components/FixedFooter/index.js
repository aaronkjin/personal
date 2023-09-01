import React from "react";

const FixedFooter = () => {
  return (
    <div className="fixed bottom-10 left-0 right-0 flex justify-center">
      <h1 className="text-xs text-bold p-2 laptop:p-0">
        Built from scratch by Aaron Jin.
        {/* &#169; Aaron Jin. All rights reserved. */}
      </h1>
    </div>
  );
};

export default FixedFooter;
