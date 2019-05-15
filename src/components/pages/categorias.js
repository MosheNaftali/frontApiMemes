import Axios from 'axios';
import React,{Component} from 'react';
import Cards from '../cards';
import Header from '../layout/header';
import Footer from '../layout/footer';
import '../styles/home.css'
import '../layout/styles/aside.css'

class Categorias extends Component{
  constructor(props){
    super(props)
    this.state = {
        categoria: "",
        datos: []
    }
    this.actualizarCategoria = this.actualizarCategoria.bind(this);
}
  actualizarCategoria(e){
    this.setState({
        categoria: e.target.value
    })
    Axios.get(`https://backendlolaton--mosheshabes.repl.co/memes/categorias/${this.state.categoria}`)
    .then(res => {this.setState({datos: res.data})})
    .catch(err => console.log(err))
}
  render(){
      console.log(this.state.categoria)
      return(
        <div>
            <Header />
            <div className="aside">
                <form>
                    <input type="radio" value="programacion" id="programacion" checked={this.state.categoria === "programacion"} onClick={this.actualizarCategoria}/>
                    <label for="programacion">Programacion</label>
                    
                    <input type="radio" value="gameOfThrones" id="gameOfThrones" checked={this.state.categoria === "gameOfThrones"} onClick={this.actualizarCategoria}/>    
                    <label for="gameOfThrones">Game Of Thrones</label>
                    <input type="radio" value=""/>
                </form>
            </div>
            <div className="articleHome">
                <div className="sectionHome">
                    {this.state.datos.map(dato=>
                    <Cards
                    url={dato.url}
                    calificacion={dato.calificacion}
                    />)}
                </div>
            </div>
            <Footer />
          </div>
      )
  }
}
export default Categorias