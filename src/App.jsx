import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// SPA - single page application - одностраничный сайт/приложение с одной страницей

// import testData from "./assents/data.json";

// Подключаем компоненты
import Modal from "./components/Modal";
import { Header, Footer } from "./components/General";
// подключаем страницы 
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import OldPage from "./pages/Old";
import Profile from "./pages/Profile"
import Product from "./pages/Product";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("user12"));
  // Сохрани в переменную user, то значение, что находится внутри useState
  const [userId, setUserId] = useState(localStorage.getItem("user12-id"));
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
    setGoods(baseData)
  }, [baseData])
  return (
    <>
      <Header
        user={user}
        upd={setUser}
        searchArr={baseData}
        setGoods={setGoods}
        setSearchResult={setSearchResult}
        setModalOpen={setModalOpen}
      />
      <main>
        <Routes>
          <Route path="/" element={<Home user={user} setActive={setModalOpen} />} />
          <Route path="/catalog" element={<Catalog
            goods={goods}
            setBaseData={setBaseData}
            userId={userId}
          />} />
          <Route path="/old" element={
            <OldPage
              searchText={searchResult}
              goods={goods}
            />
          } />
          <Route path="/profile" element={
            <Profile user={user} setUser={setUser} />}
          />
          {/* :id - параметризованный запрос, где то, что идет 
        после : является различными данными, которые можно 
        вызвать при помощи свойства id */}
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </main>
      <Footer />
      <Modal
        isActive={modalOpen}
        setIsActive={setModalOpen}
        setUser={setUser}
      />
    </>
  )
}

export default App;