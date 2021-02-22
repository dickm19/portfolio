import React from 'react'
import Menu from './Components/Menu'
import Portfolio from './Components/Portfolio'
import About from './Components/About'
import Contact from './Components/Contact'
import Home from './Components/Home'
import './App.scss'
import { Route, withRouter } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
class App extends React.Component {
  render(){
    
    return (
      <BrowserRouter>
          <div className="App">
            <Route
                exact
                path="/"
                render={()=>
                  <Home/>
                }
            />
            <Route
                exact
                path="/menu"
                render={()=>
                  <Menu/>
                }
            />
            <Route
                exact
                path="/portfolio"
                render={()=>
                  <Portfolio/>
                }
            />
            <Route
                exact
                path="/about"
                render={()=>
                  <About/>
                }
            />
            <Route
                exact
                path="/contact"
                render={()=>
                  <Contact/>
                }
            />
          </div>
          
      </BrowserRouter>
    )
  }
}

export default withRouter(App);
