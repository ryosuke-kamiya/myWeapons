import React from "react";
import styles from "./style.module.scss";
import cx from "classnames";

export interface ButtonProps {
  color: string;
  label: string;
  onClick?: any;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  color,
  label,
  onClick,
  disabled,
}) => {
  return (
    <button
      type="button"
      className={cx(styles.button, {
        [styles.color]: color,
        [styles.disabled]: disabled,
      })}
      onClick={disabled ? null : onClick}
    >
      {label}
    </button>
  );
};
