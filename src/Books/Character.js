import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCharacters } from '../thunks/book';
import { setCharacterFilters } from '../actions';

export default function Characters (props) {
  const dispatch = useDispatch();
  const { records, filters } = useSelector((state) => state.books.characters);

  const handleChangeFilter = (event) => {
    const { value, name } = event.target;
    dispatch(setCharacterFilters({ [name]: value }));
  };

  const handlePageChange = (acc) => {
    dispatch(setCharacterFilters({ page: acc + filters.page }));
  };

  useEffect(() => {
    const getRecords = () => {
      dispatch(requestCharacters(filters));
    };

    getRecords();
  }, [filters.limit, filters.page, filters.orderBy, filters.order]);

  return (
    <div>
      <select name="orderBy" value={filters.orderBy} onChange={handleChangeFilter}>
        <option value="name">name</option>
        <option value="race">race</option>
        <option value="height">height</option>
      </select>
      <select name="order" value={filters.order} onChange={handleChangeFilter}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
      <ul>
        {records.map((record) => (
          <li>{record.name}</li>
        ))}
      </ul>
      <select name="limit" value={filters.limit} onChange={handleChangeFilter}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
      <button disabled={filters.page === 1} onClick={() => handlePageChange(-1)}>Prev</button>
      <button disabled={filters.page === filters.pages} onClick={() => handlePageChange(1)}>Next</button>
    </div>
  );
}
