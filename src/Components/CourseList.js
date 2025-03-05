export default function CourseList({ courses }) {
    return (
      <div className="p-4 bg-white shadow rounded">
        <h3 className="text-lg font-bold mb-2">Filtered Courses</h3>
        <ul>
          {courses.length > 0 ? (
            courses.map((course) => (
              <li key={course.id} className="border-b p-2 last:border-b-0">
                {course.title} - <span className="text-sm text-gray-600">{course.language}</span>
              </li>
            ))
          ) : (
            <p>No courses match your criteria.</p>
          )}
        </ul>
      </div>
    );
  }
  
