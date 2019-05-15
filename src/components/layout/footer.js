import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import './styles/footer.css'

class Footer extends Component{
    render(){
        return(
            <div className="footer">
                 <Link to="/uploadmeme">Subir Meme</Link>
                 <Link to="/modifymeme">Modificar Meme</Link>
                 <Link to="/deleteMeme">Borrar Meme</Link>
            </div>
        )
    }
}
export default Footer