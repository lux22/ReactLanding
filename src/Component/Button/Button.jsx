import React from "react";
import { oneOf, shape, string } from "prop-types";

import { mergeClasses } from "../../classify";
import defaultClasses from "./button.module.scss";

const getRootClassName = (priority) => `root_${priority}Priority`;

const Button = (props) => {
  const {
    children,
    classes: propClasses,
    priority,
    type,
    ...restProps
  } = props;
  const classes = mergeClasses(defaultClasses, propClasses);
  const rootClassName = classes[getRootClassName(priority)];

  return (
    <button className={rootClassName + " btn"} type={type} {...restProps}>
      <span className={classes.content}>{children}</span>
    </button>
  );
};

Button.propTypes = {
  classes: shape({
    content: string,
    root: string,
    root_highPriority: string,
    root_lowPriority: string,
    root_normalPriority: string,
  }),
  priority: oneOf(["high", "low", "normal"]).isRequired,
  type: oneOf(["button", "reset", "submit"]).isRequired,
};

Button.defaultProps = {
  priority: "normal",
  type: "button",
};

export default Button;
