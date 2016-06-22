import React, {PropTypes} from 'react';

const InputText = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input
      type="text"
      className="form-control pull-right"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}/>
  );
};

InputText.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default InputText;
