import React,{Component} from 'react'
import './styles/header.css'
import logo from './img/logo.png'
import {Link} from 'react-router-dom'

class Header extends Component{
    render(){
        return(
            <div className="header">
            <div className="contenedorLogo">
                <img src={logo} className="logo"/>
            </div>
            <div className="contenedorTitulo">
                <h1 className="titulo">API de memes</h1>
            </div>
            <div className="enlaces">
                <Link to="/">Inicio</Link>
                <Link to="/categorias">Categorias</Link>
            </div>
            </div>
        )
    }
}
export default Header