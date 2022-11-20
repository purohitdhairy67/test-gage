import React, { useCallback } from "react";
import cx from "classname";

import styles from "./button.module.scss";

const Button = (props) => {
  const { children, onClick, className, isActive } = props;

  const handleOnClick = useCallback(
    (e) => {
      e.preventDefault();
      onClick();
    },
    [onClick]
  );

  return (
    <button
      className={cx(styles.btn, className, { [styles.active]: isActive })}
      onClick={handleOnClick}
    >
      {children}
    </button>
  );
};

export default Button;
