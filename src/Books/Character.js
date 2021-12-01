import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestCharacters } from '../thunks/book';
import { setCharacterFields } from '../actions';

export default function Characters (props) {
  const dispatch = useDispatch();
  const { records, filters } = useSelector((state) => state.books.characters);

  const getRecords = () => {
    dispatch(requestCharacters(filters));
  };

  const handleChangeLimit = (event) => {
    const { value } = event.target;
    const nextFilters = { ...filters, limit: value };
    dispatch(setCharacterFields({ filters: nextFilters }));
  };

  const handlePageChange = (acc) => {
    const nextFilters = { ...filters, page: acc + filters.page };
    dispatch(setCharacterFields({ filters: nextFilters }));
  };

  useEffect(() => {
    getRecords();
  }, [filters.limit, filters.page]);

  return (
    <div>
      <ul>
        {records.map((record) => (
          <li>{record.name}</li>
        ))}
      </ul>
      <select value={filters.limit} onChange={handleChangeLimit}>
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
