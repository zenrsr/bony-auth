import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="container">
    <nav>
      <Link to="/">
        <p>Home</p>
      </Link>
      <Link to="/about">
        <p>About</p>
      </Link>
    </nav>
  </div>
)

export default Header
