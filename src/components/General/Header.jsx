import { Link } from "react-router-dom";
import Logo from "./Logo"
import {
    BalloonHeart, 
    Cart4, 
    PersonCircle, 
    BuildingUp
    // BuildingDown
} from "react-bootstrap-icons";

import Search from "../Search";

// export default () => {
//     return <header>
//         <div className="logo">DogFood</div>
//     </header>
// } - сокращенный вид


// export { Footer, , ,  }; - экспорт с несколькими объектами, в import также прописываем их import { Footer }

const Header = ({user, searchArr, setGoods, setModalOpen}) => {
    const login = () => {
        setModalOpen(true)
        // localStorage.setItem("user", "Vasya")
        // upd("Vasya");
    };
    // const logout = () => {
    //     localStorage.removeItem("user")
    //     upd(null);
    // };
    return (
        <header>
            <Logo />
            <div className="search-block">
                <Search
                data={searchArr}
                setGoods={setGoods}
                />
            </div>
            <nav className="header__menu">
                { user && <>
                <Link to="/favorites">
                    <BalloonHeart title="Избранное"/>
                    </Link>
                <Link to="/cart">
                    <Cart4 title="Корзина"/>
                </Link>
                <Link to="/profile">
                    <PersonCircle title="Личный кабинет"/>
                </Link>
                </>}
                <span>
                    {!user && <BuildingUp title="Войти" onClick={login}/>}
                    {/* {user && <BuildingDown title="Выйти"onClick={logout}/>} */}
                </span>
            </nav>
        </header>
    )
}

export default Header;