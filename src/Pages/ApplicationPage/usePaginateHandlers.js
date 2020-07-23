import { useEffect, useState, useCallback } from 'react';

export const usePaginateHandlers = (data) => {
  const [pagination, setValues] = useState({
    page: 0,
    limit: window.innerHeight > 800 ? 10 : 5,
    isLoading: false,
  });
  const [paginateData, setPaginateData] = useState(data.slice(0, pagination.limit));

  useEffect(() => {
    if (!pagination.isLoading) {
      const newStart = pagination.page * pagination.limit;
      setPaginateData(data.slice(newStart, newStart + pagination.limit));
    }
  }, [
    pagination.page,
    pagination.limit,
  ]);

  const handleChangePage = (e, page) => {
    setValues({ ...pagination, page });
  };

  const handleChangeRowsPerPage = (e) => {
    setValues({ ...pagination, limit: e.target.value });
  };


  return [
    handleChangePage,
    handleChangeRowsPerPage,
    pagination,
    paginateData,
  ];
};

export default null;
