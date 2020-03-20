import React from "react";
import { css } from "frontity";
import { Processor } from "@frontity/html2react/types";

const boxShadowProcessor: Processor<React.HTMLProps<HTMLElement>> = {
  name: "box-shadow",
  test: ({ node }) =>
    node.type === "element" &&
    node.props.className &&
    node.props.className.split(" ").includes("has-box-shadow"),
  processor: ({ node }) => {
    if (node.type === "element") {
      return {
        ...node,
        props: {
          ...node.props,
          css: css`
            ${node.props.css}
            box-shadow: 0 4px 14px 0 rgba(31,56,197,0.09),
                        0 2px 4px 0 rgba(31,56,197,0.12);
          `
        }
      };
    }

    return node;
  }
};

export default boxShadowProcessor;
