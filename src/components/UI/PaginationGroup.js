import { useEffect } from 'react';
import { Pagination } from 'react-bootstrap';


const PaginationGroup = ({pagination, setPagination, limit}) => {

    const { previous, next } = pagination

    useEffect(()=> {
        setPagination({
            ...pagination,
            previous: 0,
            next: limit
        })
    },[limit])

    const setPrevious = () => {
        setPagination({
            ...pagination,
            previous : previous - limit,
            next:  next - limit,
        })
    }

    const setNext = () => {
        setPagination({
            ...pagination,
            previous : next,
            next:  next + limit,
        })
    }
    return (
        <Pagination className='justify-content-center'>
            { previous >= limit ? 
            <Pagination.Prev onClick={() => setPrevious()} /> : <Pagination.Prev disabled />}

            { next >= 5 ? <Pagination.Next onClick={() => setNext()} />:
            <Pagination.Next disabled />}
        </Pagination>
    )
}

export default PaginationGroup;