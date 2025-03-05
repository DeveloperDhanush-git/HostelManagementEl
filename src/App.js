import { useState } from "react";
import FilterComponent from "./Components/FilterComponent";
import CourseList from "./Components/CourseList";
import { courses } from "./Data/CourseData"; // Ensure this file exists
import { applyFilters } from "./utils/filterCourses"; // Ensure this file exists

export default function App() {
  const [filteredCourses, setFilteredCourses] = useState(courses || []); // Ensure it's always an array

  const handleFilterChange = (filters) => {
    setFilteredCourses(applyFilters(filters, courses || [])); // Ensure courses is defined
  };

  return (
    <div className="max-full mx-auto p-6 flex item-left ">
      {/* Left side - Filters */}
      <div className="w-1/4 flex item-start ">
        <FilterComponent onFilterChange={handleFilterChange} />
      </div>

      {/* Right side - Courses */}
      <div className="w-3/4 pl-6">
        <CourseList courses={filteredCourses} />
      </div>
    </div>
  );
}

