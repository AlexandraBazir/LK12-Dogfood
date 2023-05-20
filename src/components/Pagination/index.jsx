import { Pagination as BsPag } from "react-bootstrap";

const Pagination = ({hk}) => {
        let items =[];
        let i = 1;
        do {
            items.push(<BsPag.Item key={i} active={i === hk.page}>
                {i}
            </BsPag.Item>)
            i++;
        } while (i <= hk.maxPage);
    return <>
    {/* <BsPag>{items}</BsPag> */}
    <BsPag>
        {hk.page !== 1 && <>
        <BsPag.Prev onClick={hk.prev}/>
        <BsPag.Item onClick={(e) => hk.step(+e.target.innerText)}>{hk.page - 1}</BsPag.Item>
        </>}
        <BsPag.Item active>{hk.page}</BsPag.Item>
        {hk.page !== hk.maxPage && <>
        <BsPag.Item onClick={(e) => hk.step(+e.target.innerText)}>{hk.page + 1}</BsPag.Item>
        <BsPag.Next onClick={hk.next}/>
        </>}
    </BsPag>
    </>
}

export default Pagination;