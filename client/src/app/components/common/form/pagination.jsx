import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";

function Pagination({ itemsCount, pageSize, onPageChange, currentPage }) {
    const pagesCount = Math.ceil(itemsCount / pageSize);
    const pages = _.range(1, pagesCount + 1);

    if (pagesCount === 1) return null;

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination m-0 opacity-75">
                {pages.map((page) => (
                    <li
                        key={page}
                        className={
                            "page-item " +
                            (page === currentPage ? "active" : "")
                        }
                    >
                        <a
                            className="page-link"
                            onClick={() => {
                                onPageChange(page);
                            }}
                            role="button"
                        >
                            {page}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

Pagination.propTypes = {
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired
};

export default Pagination;
