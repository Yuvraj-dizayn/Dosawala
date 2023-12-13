import * as React from "react";
const SVGComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={6}
    height={10}
    viewBox="0 0 6 10"
    fill="none"
    {...props}
  >
    <path
      d="M1 1L5 5L1 9"
      stroke="#D5D5D5"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export default SVGComponent;
