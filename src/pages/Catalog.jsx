import { useContext, useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../components/BsCard/index.jsx";
import Ctx from "../ctx.js";
import usePagination from "../hooks/usePagination.js";
import Pagination from "../components/Pagination/index.jsx";

// Доработать фильтрацию
const Catalog = ({goods, userId}) => {
    // const pg = usePagination(goods, 9);
    // const [paginate, setPaginate] = useState(pg);
    const {searchResult} = useContext(Ctx);
    const paginate = usePagination(goods, 9);
    // useEffect(() => {
    //     let pg = usePagination(goods, 9);
    //     const paginate = usePagination(goods, 9);
    // },[goods])
    return <Container className="d-block">
        <Row className="g-3">
        {searchResult && <Col xs={12} className="search-result">
            {searchResult}
            </Col>}
    <Col xs={12}><h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Каталог</h1>
    </Col>
    {paginate.pageData().map((pro, i) => (
        // {name, price, likes, pictures, _id} => name={pro.name}
        // price={pro.price} _id={pro._id}
        <Col key={i} xs={12} sm={6} md={4} lg={3}
        className="bg-danger">
    <BsCard img={pro.pictures} {...pro} 
    user={userId}/>
    </Col>
    ))}
    <Col xs={12} className="text-center d-flex justify-content-center
    flex-column align-items-center overflow-hidden"><Pagination hk={paginate}/></Col>
    </Row>
    </Container>
}

export default Catalog;