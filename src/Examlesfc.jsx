import React, { useEffect, useState } from "react";
const Example = () => {
  const arg = useState("1");

  const arg1 = useState("1");
  useEffect(() => {
    arg[1]("2");
    arg1[1]("2");
    console.log("Talib", arg[0]);
  }, [arg, arg1]);
  return <div>Talib</div>;
};

export default Example;
