import { useState } from "react";
import { filterOptions } from "../Data/filterOptions"

export default function FilterComponent({ onFilterChange }) {
  const [selectedFilters, setSelectedFilters] = useState({
    rating: "",
    language: [],
    category: [],
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters((prev) => {
      const updatedFilters =
        filterType === "rating"
          ? { ...prev, rating: value }
          : {
              ...prev,
              [filterType]: prev[filterType].includes(value)
                ? prev[filterType].filter((item) => item !== value)
                : [...prev[filterType], value],
            };

      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
   
    <div className="  p-4 border rounded shadow bg-white w-full ">
      <h3 className="font-semibold">Filters</h3>

      {Object.entries(filterOptions).map(([filterType, options]) => (
        <div key={filterType} className="mt-3">
          <h4 className="font-medium">{filterType.toUpperCase()}</h4>
          {options.map((option) => (
            <label key={option} className="block">
              <input
                type={filterType === "rating" ? "radio" : "checkbox"}
                name={filterType}
                checked={filterType === "rating" ? selectedFilters.rating === option : selectedFilters[filterType].includes(option)}
                onChange={() => handleFilterChange(filterType, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={() => {
          setSelectedFilters({ rating: "", language: [], category: [] });
          onFilterChange({ rating: "", language: [], category: [] });
        }}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
      >
        Reset Filters
      </button>
    </div>
  );
}
