import {Link} from "react-router-dom"
import "./index.css"
const Header = () => {
    return(
        <div className="nav">
        <h3 className="nav-heading">Madelyn Torff</h3>
        <ul className="nav-list">
          <li>
            <Link to = "/">About</Link>
          </li>
          <li>
            <Link to = "/projects"> Projects</Link>
            
          </li>
          <li>
            <Link to = "/contacts"> Contacts</Link>
            
          </li>

        </ul>
      </div>
    )
}

export default Header