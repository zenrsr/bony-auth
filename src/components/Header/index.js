import './index.css'
import {Link, withRouter} from 'react-router-dom'

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

export default withRouter(Header)
