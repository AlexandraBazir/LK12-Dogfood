import {Container, Row, Col} from "react-bootstrap";
import BsCard from "../components/BsCard/index.jsx";

const Catalog = ({goods, setBaseData, userId}) => {
    return <Container className="d-block">
        <Row className="g-3">
    <Col xs={12}><h1 style={{margin: 0, gridColumnEnd: "span 3"}}>Каталог</h1>
    </Col>
    {goods.map((pro, i) => (
        // {name, price, likes, pictures, _id} => name={pro.name}
        // price={pro.price} _id={pro._id}
        <Col key={i} xs={12} sm={6} md={4} lg={3}
        className="bg-danger">
    <BsCard img={pro.pictures} {...pro} 
    setBaseData={setBaseData} 
    user={userId}/>
    </Col>
    ))}
    </Row>
    </Container>
}

export default Catalog;