import React, {PropTypes} from 'react';
import moment from 'moment';
import DatePicker from 'react-datepicker';

const DatePickerComponent = (props) => {
  const handleChange = (date) => {
    props.onChange(props,date);
  };

  return (
    <DatePicker className="form-control"
      selected={props.selected}
      onChange={handleChange} />
  );
};

DatePickerComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DatePickerComponent;
