import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { submitQuery, querySuccess } from "../store";

const QueryInput = () => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");

  const handleSubmit = () => {
    dispatch(submitQuery(query));
    setTimeout(() => {
      const mockResults = { message: "Mock AI Response for: " + query };
      dispatch(querySuccess(mockResults));
    }, 1500);
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-2 w-full"
        placeholder="Ask a business question..."
      />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
    </div>
  );
};

export default QueryInput;
