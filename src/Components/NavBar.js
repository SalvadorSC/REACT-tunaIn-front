import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
import logo from './logo-tuna-noname.svg'; // with import




export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="App-ul">
                    <br/>
                    <img src={logo} alt="Logo"/>
                    <br/>
                    <h2 className={"app-name"}>Tuna</h2>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="/register">Register</Link>
                    </li>
                </ul>
            </div>
        </>
    )
}
