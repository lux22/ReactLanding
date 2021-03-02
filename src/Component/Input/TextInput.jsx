import React from "react";
import PropTypes from "prop-types";
import { mergeClasses } from "../../classify";
const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  className,
}) => {
  let wrapperClass = "form-group";
  if (error && error.length > 0) {
    wrapperClass += " " + "has-error";
  }
  const classes = mergeClasses(className);

  return (
    <div className={wrapperClass + " " + classes.wrapper}>
      {label && <label htmlFor={name}>{label}</label>}
      <div className={"field " + classes.field}>
        <input
          type="text"
          name={name}
          className={"form-control " + classes.input}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};

TextInput.defaultProps = {};

TextInput.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default TextInput;
