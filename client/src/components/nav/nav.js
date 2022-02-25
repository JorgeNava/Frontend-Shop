import { Link } from 'react-router-dom';

export default function nav() {
  return (
    <div className="nav-container">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Log in</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
    </div>
  );
}