import {useState} from "react";
import testData from "./assents/data.json";
import Card from "./components/Card/Card"; // здесь подключили файл Card.jsx
import Promo from "./components/Promo/Promo"
import {Header, Footer} from "./components/General";

const promoData = ["=)", "=(", "0_0", "T_т"];
// .map() => преобразовывает один элемент массива в другой элемент (для всех без исключений)

console.log(testData);

const App = () => {
    // const user = localStorage.getItem("user");
    const [user, setUser] = useState(localStorage.getItem("user"));
        // Сохрани в переменную user, то значение, что находится внутри useState
    const [goods, setGoods] = useState(testData);
    const [searchResult, setSearchResult] = useState("");
    return (
        <>
        <Header 
        user={user} 
        upd={setUser} 
        searchArr={testData} 
        setGoods={setGoods} 
        setSearchResult={setSearchResult}
        />
        <div className="container">
          {searchResult && <p className="search-result">{searchResult}</p>}
          {goods.map((pro, i) => <Card key={i} img={pro.pictures} name={pro.name} price={pro.price} />)}
          {/* {promoData.map((el, i) => <Promo key={i} text={el} />)} */}
      </div>
      <Footer />
      </>
    )
  }

  export default App;