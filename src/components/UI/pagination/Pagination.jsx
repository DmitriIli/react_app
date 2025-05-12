import React from 'react';
import { usePagination } from '../../hooks/usePagination';




const Pagination = (props) => {

    let pagesArray = usePagination(props.totalPages);

    return (
        <div className='page__wrapper'>
            {pagesArray.map(p =>
                <span
                    onClick={() => props.setPage(p)}
                    className={props.page === p ? 'page page__current' : 'page'}
                    key={p}>
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;