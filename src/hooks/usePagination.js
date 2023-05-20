import { useState } from "react";

export default (arr, cnt) => {
    // текущая страница
    const [page, setPage] = useState(1);
    const maxPage = Math.ceil(arr.length / cnt);
    const next = () => {
        // следующая страница не должна быть больше максимальной
        let nextPage = Math.min(page + 1, maxPage)
        setPage(nextPage);
    }
    const prev = () => {
        // предыдущая страница не должна быть меньше 1
        let prevPage = Math.max(page - 1, 1)
        setPage(prevPage);
    }
    const step = (n) => {
        //Переход к конкретной страницы
        setPage(n);
    }
    const pageData = () => {
        let start = (page - 1) * cnt;
        let end = start + cnt;
        return arr.slice(start, end);
    }
    return {page, maxPage, next, prev, step, pageData}
}