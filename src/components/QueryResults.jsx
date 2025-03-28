import React from "react";
import { useSelector } from "react-redux";

const QueryResults = () => {
  const { results, loading, error } = useSelector((state) => state.query);

  return (
    <div>
      <h2 className="text-lg font-bold">Results</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}
      {results && <p>{results.message}</p>}
    </div>
  );
};

export default QueryResults;
