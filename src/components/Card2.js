

import React,{Component} from "react";

class Card2 extends Component{
   render(){
    return (
        <div>
            <h3>{this.props.name}</h3>
           <p>{this.props.Desc}</p>
        </div>
    )
   }
}

export default Card2;