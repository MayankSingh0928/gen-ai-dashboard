import React from "react";
import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);

  return (
    <div className="mb-4">
      <h2 className="text-lg font-bold">Query History</h2>
      <ul>
        {history.map((q, index) => (
          <li key={index} className="border-b p-2">{q}</li>
        ))}
      </ul>
    </div>
  );
};

export default QueryHistory;
