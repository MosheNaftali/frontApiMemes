import React,{Component} from 'react'

import "./styles/cards.css"

class Cards extends Component{
    render(){
        return(
            <div className="tarjetas">
                <div className="img">
                    <img src={this.props.url} alt="carátula" className="meme"/>
                </div>
                {/* <div className="tarjeta-body">
                    <p> ✯ {this.props.calificacion}</p>
                    
                </div> */}
            </div>
        )
    }
}
export default Cards