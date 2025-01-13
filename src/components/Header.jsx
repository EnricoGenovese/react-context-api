import { NavLink } from "react-router-dom";

const navMenu = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/posts", label: "Posts" },
    { path: "/create", label: "Add Post" },
]

export default function Header() {

    function drawNavbar() {
        return navMenu.map((item) => (
            <li key={item.label}>
                <NavLink to={item.path} className="nav-link">{item.label}</NavLink>
            </li>

        ))
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <NavLink className="navbar-brand" to="/">Logo</NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {drawNavbar()}
                    </ul>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}