import { NavLink } from 'react-router-dom'
import './Nav.css'
function Nav() {
  return (
    <nav>
          <div className="container">
            <ul>
              <div className="logo">
                <h2><strong>WATCHER</strong></h2>
              </div>
            <div className="div">
            <li>< NavLink to='/'>Home</NavLink></li>
            </div>
            </ul>
          </div>
    </nav>
  )
}

export default Nav