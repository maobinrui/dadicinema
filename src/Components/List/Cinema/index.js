import React from "react";
import  "./index.css";
import axios from "axios";

class Cinema extends React.Component{
  constructor(props) {
    super(props);
        this.state={
            datalist:[]
        }
      }

  render(){
    return (
        <div id="cinema">
        <header>
            <span></span>
            <p>选择影城</p>
        </header>
        <main>
        <ul>
            {
                this.state.datalist.map((item, datalistindex)=>{
                    return (
                        <li>
                            {
                                this.state.datalist[datalistindex].cinemas.map((item,datalistidx)=>{
                                    return (
                                        <p className="cityname">{ this.state.datalist[datalistindex].cinemas[datalistidx].name}<span>{ this.state.datalist[datalistindex].cinemas[datalistidx].address}</span></p>

                                        )
                                })
                            }
                        </li>
                        )
                })
            }
        </ul>
        </main>
        </div>
        )

  }
 componentDidMount(){
    axios.get(`/cinemacity/info?k=8974bd86-d109-4db2-adbd-3e2443d14418&t=3&v=5.0+(iPhone%3B+CPU+iPhone+OS+11_0+like+Mac+OS+X)+AppleWebKit%2F604.1.38+(KHTML%2C+like+Gecko)+Version%2F11.0+Mobile%2F15A372+Safari%2F604.1&d=null&s=Win32&i=null&r=1`).then(res=>{
      console.log(res.data.d[0].cinemas);
      this.setState({
        datalist:res.data.d
      })


    })
  }
}
export default Cinema;