import { connect } from "frontity";
import React from "react";
import { Connect } from "frontity/types";
import FrontityOrg from "../../types";

interface Props {
  fill: string;
}

const Logo: React.FC<Connect<FrontityOrg, Props>> = ({ state, fill }) => {
  return (
    <svg width="14" height="11" xmlns="http://www.w3.org/2000/svg">
      <g fill={fill || state.theme.colors.frontity} fillRule="evenodd">
        <path d="M7.681 5.645l.009.008L1.983 11 0 9.142l4.042-3.787L.31 1.858 2.293 0 8 5.347l-.319.298z" />
        <path d="M13.681 5.645l.009.008L7.983 11 6 9.142l4.042-3.787L6.31 1.858 8.293 0 14 5.347l-.319.298z" />
      </g>
    </svg>
  );
};

export default connect(Logo);
