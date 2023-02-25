import React from "react";

function Container({ children }) {
  return <div className="xs-min:w-full xs-min:px-9 2xl-min:px-0 2xl-min:w-1440 mx-auto flex flex-col">{children}</div>;
}

export default Container;
