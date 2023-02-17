import React from "react";
import PropTypes from "prop-types";

function Button({ children, type, version, isDisabled }) {
  return (
    <div type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </div>
  );
}
Button.defaultProps = {
  version: "secondary",
  type: "button",
  isDisabled: "false",
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};

export default Button;
