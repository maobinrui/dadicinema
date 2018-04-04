import React from "react";
import  "./index.css";

class List extends React.Component{
  constructor(props) {
    super(props);
      }

  render(){
    return (<div>
    	<header></header>
    	List
      {this.props.children}
      </div>)

  }
}
export default List;