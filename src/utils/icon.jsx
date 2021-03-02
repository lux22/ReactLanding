import React from "react";
import IcomoonReact from "icomoon-react";
import iconSet from "../selection.json";

const Icon = ({ color, size = "100%", icon, className }) => {
  return (
    <IcomoonReact
      className={className}
      iconSet={iconSet}
      color={color}
      size={size}
      icon={icon}
    />
  );
};

Icon.defaultProps = {};

export default Icon;
