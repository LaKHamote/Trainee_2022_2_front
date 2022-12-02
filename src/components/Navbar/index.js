import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>

            <li>
                <Link to='/create'>create genre</Link>
            </li>
            <li>
                <Link to='/create/user'>create user</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar