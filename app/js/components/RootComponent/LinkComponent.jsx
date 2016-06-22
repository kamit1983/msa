import React from 'react';

class LinkComponent extends React.Component
{
  constructor(props){
    super(props);
    this.state = {
      data: props.data
    };
  }
  render(){
    return <a href="#">{this.state.data}</a>;
  }
}

export default LinkComponent;
