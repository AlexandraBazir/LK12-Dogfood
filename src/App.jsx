import { useState, useEffect, createContext } from "react";
import { Routes, Route } from "react-router-dom";
// SPA - single page application - одностраничный сайт/приложение с одной страницей

// import testData from "./assents/data.json";
import Ctx from "./ctx";
// Подключаем компоненты
import Modal from "./components/Modal";
import { Header, Footer } from "./components/General";
// подключаем страницы 
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile"
import Product from "./pages/Product";
import AddProduct from "./pages/AddProduct";
import Favorites from "./pages/Favorites";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user12"));
  // Сохрани в переменную user, то значение, что находится внутри useState
  const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
  console.log(userId);
  const [token, setToken] = useState(localStorage.getItem("token12"));
  // Есть массив с товарами основной
  // Есть с товарами фильтруемый 
  const [baseData, setBaseData] = useState([]);
  const [goods, setGoods] = useState(baseData);

  const [searchResult, setSearchResult] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (user) {
      setUserId(localStorage.getItem("user12-id"));
      setToken(localStorage.getItem("token12"));
    } else {
      localStorage.removeItem("user12-id")
      localStorage.removeItem("token12")
      setUserId(null);
      setToken(null);
    }
  }, [user])

  useEffect(() => {
    console.log("token", token);
    if (token) {
      fetch("https://api.react-learning.ru/products", {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          setBaseData(data.products);
        })
    }
  }, [token])

  useEffect(() => {
    // setGoods(baseData)
  }, [baseData])

  // const Ctx = createContext({});
  // import {Ctx} from "./App"


  return (
    // объявляем контекст в приложении
    // age = 2
    // value = {
    //   name: "User",
    //   setName: function(){}
    //   age тоже самое что age: age
    // }
    <Ctx.Provider value={{
      searchResult,
      setSearchResult,
      setBaseData,
      baseData,
      goods,
      setGoods,
      userId,
      token
    }}>
      <Header
        user={user}
        upd={setUser}
        searchArr={baseData}
        setGoods={setGoods}
        setModalOpen={setModalOpen}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setActive={setModalOpen} />} />
          <Route path="/catalog" element={<Catalog
            goods={goods}
            userId={userId}
          />} />
          <Route path="/old" element={
            <OldPage
              goods={goods}
            />
          } />
          <Route path="/profile" element={
            <Profile user={user} setUser={setUser} />}
          />
          <Route path="/favorites" element={
            <Favorites/>}
            />
          {/* :id - параметризованный запрос, где то, что идет 
        после : является различными данными, которые можно 
        вызвать при помощи свойства id */}
          <Route path="/product/:id" element={<Product />} />
          <Route path="/add/product" element={<AddProduct />} />
        </Routes>
      </main>
      <Footer />
      <Modal
        isActive={modalOpen}
        setIsActive={setModalOpen}
        setUser={setUser}
      />
    </Ctx.Provider>
  )
}

export default App;