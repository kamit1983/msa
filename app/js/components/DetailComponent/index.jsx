import React from 'react';
import $ from "jquery";
import InputText from "./InputTextCompoent";

class DetailComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      selectedUpc: props.upc
    }
  }
  componentWillMount(){
    this.serverRequest = $.get('app/data/detail.json?upc=' + this.state.selectedUpc, function (result) {
     console.log(result);
     this.setState(result);
   }.bind(this));
  }
  handleChange(name,value){
    var prop = {};
    prop[name] = value;
    this.setState(prop);
  }
  update(){

  }
  close(){
    this.props.close();
  }
  render(){
    var self = this;
     var toBeRender = this.props.detailProps.map(function(prop){
       if(prop.type === "input"){
         return <div className="form-group">
           <label className="col-md-3 control-label" for={prop.name}>{prop.label}:</label>
           <div className="col-md-6">
             <InputText name={prop.name} value={self.state[prop.name]} onChange={self.handleChange.bind(self)} placeholder={prop.label} />
             </div>
             <div className="col-md-2">
             <button type="button" className="btn btn-default">Update</button>
             </div>
         </div>
       }else{
         return <div className="form-group">
           <label className="col-md-3 control-label">{prop.label}:</label>
           <div className="col-md-9">
            <label className="control-label">{self.state[prop.name]}</label>
           </div>
         </div>
       }
     });
     return <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={this.close.bind(this)}><span aria-hidden="true">&times;</span></button>
                  <h4 className="modal-title">Modal title</h4>
                </div>
                <div className="modal-body">
                  <form className="form-horizontal detail-form">
                    {toBeRender}
                  </form>
                </div>
              </div>
            </div>
        }
}

export default DetailComponent;
