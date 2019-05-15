import Axios from 'axios';
import React,{Component} from 'react';
import Cards from '../cards';
import Header from '../layout/header';
import Aside from '../layout/aside'
import Footer from '../layout/footer';
import '../styles/home.css'
class Home extends Component{
  state={
    datos:[]
  }
  componentDidMount(){
    Axios.get('https://backendlolaton--mosheshabes.repl.co/memes')
      .then(res => {this.setState({datos: res.data})})
      .catch(err => console.log(err))
  }
  render(){
      return(
        <div>
          <div className="headerHome">
            <Header />
          </div>
          <div className="articleHome">
            <div className="sectionHome">
              {this.state.datos.map(dato=>
              <Cards
              url={dato.url}
              calificacion={dato.calificacion}
              />
            )}
            </div>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      )
  }
}
export default Home