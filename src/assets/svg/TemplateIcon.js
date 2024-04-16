import * as React from "react";
const TemplateIcon = (props) => (
  <svg
    width="20px"
    height="20px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="none"
      stroke="#000"
      strokeWidth={2}
      d="M1,3 L23,3 L23,21 L1,21 L1,3 Z M1,8 L23,8 M7,8 L7,21"
    />
  </svg>
);
export default TemplateIcon;