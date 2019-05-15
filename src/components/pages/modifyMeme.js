import React, {Component} from 'react'
import Axios from 'axios'
// import "../styles/modifyMeme.css"
import "../styles/uploadMeme.css"
import Header from '../layout/header';
import Footer from '../layout/footer';

export default class modifyMeme extends Component{
    constructor(props){
        super(props)
        this.onSearch = this.onSearch.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.onChangeName = this.onChangeName.bind(this)
        this.onChangeUrl = this.onChangeUrl.bind(this)
        this.onChangeCategoria = this.onChangeCategoria.bind(this)
        this.onChangeCalificacion = this.onChangeCalificacion.bind(this)
        this.state = ({
            _id: "",
            name: "",
            url: "",
            categoria: "",
            calificacion: Number
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
    onChangeId(e){
        this.setState({
            _id: e.target.value
        })
    }
    onSearch(e){
        e.preventDefault();
        Axios.get(`https://backendlolaton--mosheshabes.repl.co/memes/modifyMeme/${this.state._id}`)
        .then(res => this.setState({
            name: res.data.name,
            url: res.data.url,
            categoria: res.data.categoria,
            calificacion: res.calificacion
        }))
    }
    onSubmit(e){
        e.preventDefault();
        const data = {
            name: this.state.name,
            url: this.state.url,
            categoria: this.state.categoria,
            calificacion: this.state.calificacion
        }
        Axios.put(`https://backendlolaton--mosheshabes.repl.co/memes/${this.state._id}`, data)
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
            <form onSubmit={this.onSearch} className="form">
                <label>
                Ingrese el ID único de su meme
                    <input type="text" name="_id" placeholder="ID" onChange={this.onChangeId} value={this.state._id}/>
                    <button type="submit">Buscar Meme</button>
                </label>
            </form>
            <form onSubmit={this.onSubmit} className="form">
                    <input className="input-formulario-subida" type="text" name="name" placeholder="Nombre" value={this.state.name} onChange={this.onChangeName} required/>
                    <input className="input-formulario-subida" type="text" name="url" placeholder="URL de meme" value={this.state.url} onChange={this.onChangeUrl} required/>
                    <select name="categoria" onChange={this.onChangeCategoria}>
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