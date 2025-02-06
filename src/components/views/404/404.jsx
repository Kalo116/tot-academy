import './404.style.css';
import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
        <div className="not-found">
            <h1>404</h1>
            <div className="error-badge">
                Page Not Found
            </div>
            <div className="error-message">
                The page you are looking for does not exist.
            </div>
            <Link to="/" className="home-link">
                Go Home
            </Link>
        </div>
    )
}