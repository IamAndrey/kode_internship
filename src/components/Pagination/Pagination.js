import React from "react";
import {setCurrentPage} from "../../redux/actions/paginationActions";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import './style.scss'

const Pagination = () => {

    const numbers = []
    const {total, pageSize, currentPage} = useSelector(
        ({pagination: {total, pageSize, currentPage}}) =>
            ({total, pageSize, currentPage})
    )
    const dispatch = useDispatch()

    for (let i = 1; i <= Math.ceil(total / pageSize); i++) {
        numbers.push(i)
    }

    return (
        <nav>
            <ul className="pagination">
                {numbers.map(number => (
                    <li key={number}>
                        <Link to='#' className={currentPage === number ? 'active': ''} onClick={() => setCurrentPage(number)(dispatch)}>
                            {number}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination