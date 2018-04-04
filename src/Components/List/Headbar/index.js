import React from "react";
import  "./index.css";
import axios from "axios";

class HotPlay extends React.Component{
  constructor(props) {
    super(props);
    this.Show = this.Show.bind(this);
    this.state={
      cityinfor:[],
      zimu:['A','B','C'  ,'D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
      isshow:true
      }
    }

  render(){
    return (
        <div id="headbar">
        <header>
            <span onClick={this.Show}></span>
            <p>选择城市</p>
        </header>
        <section>
        <ul>
          {
            this.state.zimu.map((item,index)=>{
              return (
                <li key={index}>
                <span className="span_1">{this.state.zimu[index]}</span>
                  {
                  this.state.cityinfor.map((item,idx)=>{
                   return (
                    <span className="span_2" key={this.state.cityinfor.id}>
                    {this.state.cityinfor[idx].city_info.first == this.state.zimu[index]?this.state.cityinfor[idx].city_info.name:1}
                  </span>
                          )
                    })
                  }
                </li>
                )
            })
          }
        </ul>
        </section>

        </div>
        )

  }
  Show(){
     this.setState({
      isshow:false
    })
  }
  componentDidMount(){
    axios.get(`/cinemacity/info?k=8974bd86-d109-4db2-adbd-3e2443d14418&t=3&v=5.0+(iPhone%3B+CPU+iPhone+OS+11_0+like+Mac+OS+X)+AppleWebKit%2F604.1.38+(KHTML%2C+like+Gecko)+Version%2F11.0+Mobile%2F15A372+Safari%2F604.1&d=null&s=Win32&i=null&r=1`).then(res=>{
      console.log(res.data.d);
      this.setState({
        cityinfor:res.data.d
      })


    })

  }
  componentDidUpdate  (){
    test()
  }
}


function test(){
  var kong=document.getElementsByClassName("span_2");

   console.log(kong.length);
  for (var i = 0; i < kong.length; i++) {

  if(kong[i].innerHTML==1){

    kong[i].style.display="none";
  }
};
}

export default HotPlay;