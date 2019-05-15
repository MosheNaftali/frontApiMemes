import React,{Component} from 'react'
import './styles/aside.css'

class Aside extends Component{
    constructor(props){
        super(props)
        this.state = {
            categoria: "todos"
        }
        this.actualizarCategoria = this.actualizarCategoria.bind(this);
    }
    actualizarCategoria(e){
        this.setState({
            categoria: e.target.value
        })
    }
    render(){
        return(
            <div className="aside">
            <form>
            <input type="radio" value="todos" id="todos" checked={this.state.categoria === "todos"} onClick={this.actualizarCategoria}
            />    
             <label for="todos" >Todos</label>
             <input type="radio" value="programacion" id="programacion" checked={this.state.categoria === "programacion"} onClick={this.actualizarCategoria}/>
             <label for="programacion">Programacion</label>


             <input type="radio" value="gameOfThrones" id="gameOfThrones" checked={this.state.categoria === "gameOfThrones"} onClick={this.actualizarCategoria}/>    
             <label for="gameOfThrones">Game Of Thrones</label>
             <input type="radio" value=""/></form>
            </div>
        )
    }
}
export default Aside