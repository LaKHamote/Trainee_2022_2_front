import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <ul>
            <li>
                <Link to='/'>home</Link>
            </li>

            <li>
                <Link to='/genres'>Users</Link>
            </li>

            <li>
                <Link to='/genres/create'>create genre</Link>
            </li>
            <li>
                <Link to='/users/create'>create user</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar