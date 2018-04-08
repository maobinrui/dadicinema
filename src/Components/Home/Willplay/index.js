import React from "react";
import  "./index.css";
import axios from "axios";
class Willplay extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      coming:[],
      comingList:[]
      }
    }

  componentDidMount(){
    var c= [];
        axios.get(`/film/getWebSiteUpcomingFilm?timestamp=1523107095898`).then(res=>{
        console.log(res.data.d);
        for(var a of res.data.d){
          for(var b of a.comingFilmEntityList){
            c.push(b)
          }
            this.setState({
                comingList:c
              })
        }
                console.log(this.state.comingList);
      })
    }

  render(){
    return (
      <div id="willplay">
        {this.state.comingList.map((items,idx)=>{
          return(
                <dl key={items.id}>
                  <dt><img src={items.poster} alt=""/></dt>
                 
                </dl>
                )
             })
      }
    </div>
    )

  }
}
export default Willplay;