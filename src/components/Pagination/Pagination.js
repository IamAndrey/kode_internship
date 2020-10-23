import React from "react";
import {Link} from "react-router-dom";
import './style.scss'

const Pagination = () => {

    return (
        <nav>
            <ul className="pagination">
                <li>
                    <Link to='#' className='' onClick={() => {}}>
                        1
                    </Link>
                </li>
                <li>
                    <Link to='#' className='' onClick={() => {}}>
                        2
                    </Link>
                </li>
                <li>
                    <Link to='#' className='' onClick={() => {}}>
                        3
                    </Link>
                </li>
                <li>
                    <Link to='#' className='' onClick={() => {}}>
                        4
                    </Link>
                </li>
                <li>
                    <Link to='#' className='' onClick={() => {}}>
                        5
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination