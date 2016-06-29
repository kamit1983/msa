import React from 'react';
import $ from "jquery";
import InputText from "./InputTextCompoent";
import Select from "./SelectComponent";
import DatePickerComponent from "./DatePickerComponent";
import moment from 'moment';
import MultiSelect from "./MultiSelectCompoent";

class FilterComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {};
    this.state.options = [{id: 1, name: 'John'},
  {id: 2, name: 'Miles'},
  {id: 3, name: 'Charles'},
  {id: 4, name: 'Herbie'}];
    for (var i = 0; i < props.filterProperty.length; i++) {
        switch (props.filterProperty[i].type) {
          case "date":
              this.state[props.filterProperty[i].name] = moment((new Date()).toJSON().slice(0,10));
            break;
          case "select":
                this.state[props.filterProperty[i].name] = "both";
            break;
          case "input":
                this.state[props.filterProperty[i].name] = "";
            break;
          default:

        }
    }
  }
  handleChange(name,value){
    var prop = {};
    prop[name] = value;
    this.setState(prop);
  }
  handleDateChange(props, date){
      var startDate, endDate;
      var range = {};
      if(props.before){
        startDate = date;
        endDate = this.state[props.before];
      }else{
        endDate = date;
        startDate = this.state[props.after];
      }

	    if (startDate.isAfter(endDate)) {
	      var temp = startDate;
	      startDate = endDate;
	      endDate = temp;
	    }
      if(props.before){
        range[props.name] = startDate;
        range[props.before] = endDate;
      }else{
        range[props.name] = endDate;
        range[props.after] = startDate;
      }
      this.setState(range);

  }
  search(){
    $("a[href='#list'").trigger('click');
    this.props.get();
  }
  render(){
   var self = this;
   var key = 0;
    var toBeRender = this.props.filterProperty.map(function(prop){
      if(prop.type === 'input'){
        return <div className="col-md-6 form-group" key={prop.key}>
          <label for={prop.name}>{prop.label}:</label>
          <InputText name={prop.name} value={self.state[prop.name]} onChange={self.handleChange.bind(self)} placeholder={prop.label} />
        </div>
      }else if(prop.type === "select"){
        return <div className="col-md-6 form-group" key={prop.key}>
          <label for={prop.name}>{prop.label}:</label>
          <Select name={prop.name} value={self.state[prop.name]} onChange={self.handleChange.bind(self)}/>
        </div>
      }else if(prop.type === "button"){
        return <div className="col-md-6 form-group" key={prop.key}>
          <button type="button" className="btn btn-default pull-right"
          onClick={self.search.bind(self)}
          >Search</button>
        </div>
      }else if(prop.type === "date"){
        return <div className="col-md-6 form-group" key={prop.key}>
          <label for={prop.name}>{prop.label}:</label>
          <DatePickerComponent name={prop.name} before={prop.before} after={prop.after}
            selected={self.state[prop.name]}
            onChange={self.handleDateChange.bind(self)} />
        </div>
      }else if(prop.type === "multi"){
        return <div className="col-md-6 form-group" key={prop.key}>
          <label for={prop.name}>{prop.label}:</label>
            <MultiSelect name={prop.name} options={self.state.options} value={self.state[prop.name]} onChange={self.handleChange.bind(self)}/>
        </div>
      }

    })

    return <form className="form-inline search-form">
            <fieldset>
              {toBeRender}
            </fieldset>
          </form>
  }
}

export default FilterComponent;
