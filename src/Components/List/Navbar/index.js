import React from "react";
import  "./index.css";

class HotPlay extends React.Component{
  constructor(props) {
    super(props);
      }

  render(){
    return (
        <div id="navbar">
            <p className="play">热映</p>
            <p className="sall">卖品</p>
        </div>
        )

  }
}
export default HotPlay;