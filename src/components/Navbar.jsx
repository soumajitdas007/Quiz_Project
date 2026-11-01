import { Link,useNavigate } from "react-router-dom";
import "../css/navbar.css";

function Navbar(){
    const navigate=useNavigate();

    const logout=()=>{
        localStorage.removeItem("user");
        navigate("/");
    };

    return(
        <nav className="navbar">
            <Link to="/dashboard" className="navbar-logo">
                Quiz<span>Master</span>
            </Link>
            <div className="navbar-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/courses">Courses</Link>
                <button className="logout-btn" onClick={logout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;