import { Link } from "react-router-dom";
import Logo from "./Logo";

const links = [
    {name: "Каталог", src: "/catalog"},
    {name: "Избранное", src: "/"},
    {name: "Корзина", src: "/"},
    {name: "Тестовая страница", src: "/old"}
]

const Footer = () => {
    return (
        <footer>
           <div className="footer__copy">
            <Logo/>
           <span>©️{new Date().getUTCFullYear()}</span>
           </div>
            <ul className="footer__nav">
                {links.map(el => <li key={el.name}>
                    <Link to={el.src}>{el.name}</Link>
                </li>)}
            </ul>
        </footer>
    )
}

export default Footer;