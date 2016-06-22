import React, {PropTypes} from 'react';

const Select = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <select className="form-control pull-right" value={props.value}
    onChange={handleChange}>
      <option value="both">Both</option>
      <option value="yes">Yes</option>
      <option value="no">No</option>
    </select>
  );
};

Select.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
};

export default Select;
