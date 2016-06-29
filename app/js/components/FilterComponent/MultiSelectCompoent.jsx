import React, {PropTypes} from 'react';
import Typeahead from 'react-bootstrap-typeahead';

const MultiSelect = (props) => {
  const handleChange = (val) => {
    props.onChange(props.name, val);
  };

  return (
    <Typeahead className="form-control"
      multiple
      labelKey="name"
      onChange={handleChange}
      options={props.options}/>
    );
};

MultiSelect.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string
};

export default MultiSelect;
