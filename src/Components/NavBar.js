import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from "react-router-dom";
export const NavBar = () => {
    return (
        <>
            <div className="navbar">
                <ul className="App-ul">
                    <img src="logo-tuna-noname.svg" alt="Logo"/>
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
