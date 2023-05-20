import {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import Ctx from "../../ctx";
import "./style.css";

const Search = () => {
    // let text = "ololo"
    const {setSearchResult, baseData, setGoods} = useContext(Ctx);
    const navigate = useNavigate();
    const [text, setText] = useState("");
    const [num, setNum] = useState(0);
    // в переменной text находится пустая строка
    const changeValue = (e) => {
        navigate("/catalog");
        let val = e.target.value.toLowerCase();
        setText(val);
        // setNum(num + 1);
        // При вводе текста в строку поиска, мы сопоставляем эту строку с данными из массива data. 
        // В консоли выведем новый массив в подходящим названием
    //     setNum(data.filter(el => el.name.toLowerCase().includes(
    //         e.target.value.toLowerCase()
    //         )).length);
    // }
    // setNum(data.filter(el => el.name.toLowerCase().includes(val)).length);
    }
    useEffect(() => {
        let str = "";
        if (num && text) {
            str = `По запросу ${text} найдено ${num} товаров`;
        } else if (text) {
            str = `По запросу ${text} не найдено ни одного товара`;
        } else {
            str = "";
        }
        setSearchResult(str);
    }, [num, text]);
    useEffect(() => {
        let result = baseData.filter(el => el.name.toLowerCase().includes(text));
        setGoods(result);
        setNum(result.length);
    }, [text, baseData]);
    return <>
    <input className="search" type="search" value={text} onChange={changeValue}/>
    {/* <button onClick={changeText}>Тык {num} раз</button> */}
    {/* {text && <p>По запросу {text} найдено {num} товаров</p>} */}
    </>
}

export default Search;

/*
Жизненный цикл
Mount - монтаж (отрисовка приложения)
componentWillMount
componentDidMount

componentWillUpdate
componentDidUpdate

componentWillUnmount
componentDidUnmount
*/

/*
Без React:
1) создаем html-контент
2) взять нужные теги
3) повесить на input событие
4) по событию добавлять в DOM нужный контент
*/
