import React, {Component} from 'react'
import Axios from 'axios'
// import "../styles/modifyMeme.css"
import "../styles/uploadMeme.css"
import Header from '../layout/header';
import Footer from '../layout/footer';

export default class deleteMeme extends Component{
    constructor(props){
        super(props)
        this.onSubmit = this.onSubmit.bind(this)
        this.onChangeId = this.onChangeId.bind(this)
        this.state = ({
            _id: "",
            respuesta: ""
        })
    }
    onChangeId(e){
        this.setState({
            _id: e.target.value
        })
    }
    onSubmit(e){
        e.preventDefault();
        Axios.delete(`https://api-meme-backend.herokuapp.com/memes/${this.state._id}`)
        .then(res => this.setState({respuesta:(res.data)}))
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
            <Header />
            <form onSubmit={this.onSubmit} className="form">
                <label>
                Ingrese el ID único de su meme
                    <input type="text" name="_id" placeholder="ID" onChange={this.onChangeId} value={this.state._id}/>
                    <button type="submit">Buscar Meme</button>
                </label>
            </form>
            <p className="respuesta">{this.state.respuesta}</p>
                    <Footer />
            </div>
        )
    }
}