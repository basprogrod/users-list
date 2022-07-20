import { Outlet } from "react-router-dom";
import { CustomLink } from "../CustomLink/CustomLink";
import './styles.scss';

export const Layout = () => {
    return (
        <>
            <header>
                <CustomLink to="/">User</CustomLink>
                <CustomLink to="/adduser">Add</CustomLink>
            </header>

            <main className="container">
                <Outlet />
            </main>
            

            <footer className="container">2022</footer>
        </>
    )
}
