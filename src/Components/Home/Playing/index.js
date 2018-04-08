import React from "react";
import  "./index.css";
import axios from "axios";
class Playing extends React.Component{
  constructor(props) {
    super(props);
    this.state={
    	coming:[]
    	}
    }

	componentDidMount(){
        axios.get(`/film/getWebSiteHitFilm?cinemaCode=11056701&k=63474d75-eec3126b7b34&t=3&v=5.0%20(iPhone;%20CPU%20iPhone%20OS%209_1%20like%20Mac%20OS%20X)%20AppleWebKit/601.1.46%20(KHTML,%20like%20Gecko)%20Version/9.0%20Mobile/13B143%20Safari/601.1&d=null&s=Win32&i=null&r=1&timestamp=1523100301131`).then(res=>{
	      console.log(res.data.d);
	      this.setState({
	        coming:res.data.d
	      })
	    })
    }

  render(){
    return (<div id="playing">
    	{this.state.coming.map((item)=>{
    		return (
    			<dl key={item.id}>
			    	<dt><img src={item.poster} alt=""/></dt>
			    	<dd><a href="/list">选座购票</a></dd>	
		    	</dl>

    			)
    		})
   		}
    </div>)

  }
}
export default Playing;