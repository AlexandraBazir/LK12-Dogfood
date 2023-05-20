import { useContext, useEffect, useState } from "react";
import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../components/BsCard/index.jsx";
import Ctx from "../ctx.js";
// Доработать фильтрацию
const Favorites = () => {
    const {userId, baseData} = useContext(Ctx);
    // const [likeCards, setLikesCard] = useState(baseData.filter(el => el.likes.includes(userId)));
    // useEffect(() => {
    //     setLikesCard(baseData.filter(el => el.likes.includes(userId)));
    // }, [baseData])
    return <Container className="d-block">
        <Row className="g-4">
    <Col xs={12}>
        <h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Любимые товары</h1>
    </Col>
    {baseData.filter(el => el.likes.includes(userId)).map((pro, i) => (
        <Col key={i} xs={12} sm={6} md={4} lg={3}>
    <BsCard img={pro.pictures} {...pro} user={userId}/>
    </Col>
    ))}
    </Row>
    </Container>
}

export default Favorites;