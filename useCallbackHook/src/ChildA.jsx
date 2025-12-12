import { memo } from "react";

const ChildA = ({ Learning, count }) => {
  console.log("child component");
  return <></>;
};

export default memo(ChildA);
