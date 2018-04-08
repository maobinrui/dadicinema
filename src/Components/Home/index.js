import React from "react";
import  "./index.css";
import{
  NavLink
}from "react-router-dom";
import { Carousel, WhiteSpace, WingBlank } from 'antd-mobile';

class Home extends React.Component{
  constructor(props) {
    super(props);
        this.state={
		    url:['../img/dadibigshow_1.jpg','../img/dadibigshow_2.jpg','../img/dadibigshow_3.jpg','../img/dadibigshow_4.jpg','../img/dadibigshow_5.jpg'],
		    num:[1,2,3],
			  imgHeight: 176,
			  slideIndex: 0,
      		}
    	}
  componentDidMount() {
    // simulate img loading
  }

  render(){
    return (
    	<div id="home">
	    	<header>
	    		<h1><a href=""><img src="../img/logo.png" alt=""/></a></h1>
	    	</header>
	    	<div className="slides">
	    		<WingBlank>			        
			        <Carousel
			          autoplay={true}
			          infinite={true}
			          selectedIndex={1}	
			          dots={true}
			                 			    
			        >
			          {this.state.url.map(val => (
			            <div key={val} style={{background:`url(${val})  no-repeat center`,backgroundSize:'cover' }}></div>
			          ))}
			        </Carousel>
			    </WingBlank>
	    	</div>
	    	<ul className="play">
	    		<li><NavLink to="/home/playing" activeClassName="active">正在热映</NavLink></li>
	    		<li><NavLink to="/home/willplay" activeClassName="active">即将上映</NavLink></li>
	    	</ul>
	    	<div className="hot">
	    		<div className="left">热映影片</div>
	    		<div className="right"><a href="">安卓APP下载</a>|<a href="">APP下载</a>|<a href="">微信公众号</a></div>
	    	</div>
        {this.props.children}       
      </div>)

  }
}
export default Home;