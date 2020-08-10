import React from "react";
import "./Button.css";
import classNames from "classnames";

const Button = ({
  children,
  size = "medium",
  color = "blue",
  outline,
  fullWidth,
}) => {
  return (
    //   outline true인 경우에만 class로 설정
    <button
      className={classNames("Button", size, color, { outline, fullWidth })}
    >
      {children}
    </button>
  );
};

export default Button;
