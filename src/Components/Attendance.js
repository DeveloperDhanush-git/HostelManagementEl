import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import Header from "./Header";

const properties = [
  { name: "Property 1", location: "SS Colony, Ahmedabad", tags: ["Girls"], link: "/property1" },
  { name: "Property 2", location: "ABC Street, Ahmedabad", tags: ["Boys", "Girls"], link: "/property2" },
  { name: "Property 3", location: "Town Street, Ahmedabad", tags: ["Boys"], link: "/property3" },
  { name: "Property 4", location: "Kochi, Agartala", tags: ["Boys"], status: "Enabled", link: "/property4" },
  { name: "Property 5", location: "Prozone mall cbe, Abu", tags: ["Girls"], link: "/property/property5" },
  { name: "Property 6", location: "Ganapathy, Coimbatore", tags: ["Boys", "Girls"], link: "/property6" },
];

const Attendance = () => {
  return (
    <div className="container  bg-white min-h-screen rounded-lg flex flex-col " style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      <Header title="Outpass & attendance" />
      
      <p className="text-sm text-gray-500 mb-4 bg-gray-100 ml-8 p-2 rounded-md">6 Properties</p>
      <div className="grid grid-cols-1 gap-4">
        {properties.map((property, index) => (
          <Link to={property.link} key={index} className="flex justify-between ml-8 items-center border-b border-gray-300 py-3 last:border-none">
            <div>
              <h2 className="text-lg font-semibold">{property.name}</h2>
              <p className="text-sm text-gray-500">{property.location}</p>
              <div className="flex items-center gap-2 mt-1">
                {property.tags.map((tag, i) => (
                  <span
                    key={i}
                    className={`px-2 py-1 text-xs font-bold rounded-md ${tag === "Boys" ? "bg-blue-100 text-blue-600" : "bg-pink-100 text-pink-600"}`}
                  >
                    {tag}
                  </span>
                ))}
                {property.status && (
                  <span className="px-2 py-1 text-xs font-semibold rounded-md bg-yellow-100 text-yellow-600">
                    {property.status}
                  </span>
                )}
              </div>
            </div>
            <ChevronRight className="text-gray-400" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Attendance;
