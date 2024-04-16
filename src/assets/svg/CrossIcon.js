import * as React from "react";
const CrossIcon = (props) => (
    <svg
    fill="#000000"
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    id="cross"
    data-name="Line Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon line-color"
    {...props}
  >
    <line
      id="primary"
      x1={19}
      y1={19}
      x2={5}
      y2={5}
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
    <line
      id="primary-2"
      data-name="primary"
      x1={19}
      y1={5}
      x2={5}
      y2={19}
      style={{
        fill: "none",
        stroke: "rgb(0, 0, 0)",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
      }}
    />
  </svg>
);
export default CrossIcon;
