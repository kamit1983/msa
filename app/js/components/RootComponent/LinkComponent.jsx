import React from 'react';
import ReactTooltip from 'react-tooltip'

class LinkComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      data: props.data,
      iuuid: props.rowData.iuuid
    };
  }
  render(){
    return <div>
              <a href="#" data-tip={this.state.iuuid}>{this.state.data}</a>
              <ReactTooltip place="top" type="dark" effect="float"/>
            </div>;

  }
}

export default LinkComponent;
