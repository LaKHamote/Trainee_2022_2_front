import { Link } from "react-router-dom";
import { useUserContext } from "../../context/useUserContext";

const Navbar = () => {
    const { user, logout } = useUserContext()

  return (
    <nav>
        <ul>
            {user
            ?   <li>
                    Olá, {user.name}, deseja
                    <button onClick={logout}>
                        sair
                    </button>
                </li>
            :   <li>
                    <Link to='/login'>login</Link>
                </li>
            }
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