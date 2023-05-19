import React, { useCallback } from "react";
import cx from "classname";

import styles from "./button.module.scss";

const Button = (props) => {
  const {
    children,
    onClick,
    className,
    isActive,
    isDisabled,
    style = {},
  } = props;

  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault();
      if (!isDisabled) onClick();
    },
    [onClick, isDisabled]
  );

  return (
    <button
      className={cx(
        styles.btn,
        className,
        { [styles.active]: isActive },
        { [styles.isDisabled]: isDisabled }
      )}
      onClick={handleOnClick}
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;
