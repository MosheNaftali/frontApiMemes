import React,{Component} from 'react'
import Axios from 'axios';
import "../styles/uploadMeme.css"
import Header from '../layout/header';
import Footer from '../layout/footer';

class uploadMeme extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeUrl = this.onChangeUrl.bind(this)
        this.onChangeCategoria = this.onChangeCategoria.bind(this)
        this.onChangeCalificacion = this.onChangeCalificacion.bind(this)
        this.state = ({
            name: "",
            url: "",
            categoria: "",
            calificacion: Number,
            respuesta: ""
        })
    }
    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }
    onChangeUrl(e){
        this.setState({
            url: e.target.value
        })
    }
    onChangeCategoria(e){
        this.setState({
            categoria: e.target.value
        })

    }
    onChangeCalificacion(e){
        this.setState({
            calificacion: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        const data = {
            name: this.state.name,
            url: this.state.url,
            categoria: this.state.categoria,
            calificacion: this.state.calificacion
        }
        Axios.post('https://api-meme-backend.herokuapp.com/memes', data)
        .then(res => this.setState({respuesta:(res.data)}))
        this.setState({
            name: "",
            url: "",
            categoria: "",
            calificacion: Number
        })
    }
    render(){
        console.log(this.state.categoria)
        return(
            <div>
                <Header />
                <form onSubmit={this.onSubmit} className="form">
                    <input className="input-formulario-subida" type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.onChangeName} required/>
                    <input className="input-formulario-subida" type="text" name="url" placeholder="URL de meme" value={this.state.url} onChange={this.onChangeUrl} required/>
                    <select name="categoria" onChange={this.onChangeCategoria} className="selector">
                        <option value="" selected disabled></option>
                        <option value="programacion" >Programacion</option>
                        <option value="gameOfThrones" >Game Of Thrones</option>
                    </select>
                    <input className="input-formulario-subida" type="number" name="calificacion" placeholder="Calificacion" value={this.state.calificacion} onChange={this.onChangeCalificacion} required/>
                    <button type="submit">Enviar</button>
                </form>
                <p className="respuesta">{this.state.respuesta}</p>
                <Footer />
            </div>
        )
    }
}
export default uploadMeme