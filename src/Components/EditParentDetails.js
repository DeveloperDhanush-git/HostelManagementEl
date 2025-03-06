import React, { useState } from "react";
import Header from "./Header";
import { Search } from "@mui/icons-material";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
} from "@mui/material";

const properties = [
  { id: "1", name: "Raj", location: "Kochi, Agartala" },
  { id: "2", name: "Property 2", location: "Prozone mall, Abu" },
  { id: "3", name: "House 3", location: "Ganapathy, Coimbatore" },
];

const MoveoutTenant = () => {
  const [search, setSearch] = useState("");
  const [switchState, setSwitchState] = useState(
    properties.reduce((acc, prop) => ({ ...acc, [prop.id]: true }), {})
  );

  const toggleSwitch = (id) => {
    setSwitchState((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };

  return (
<div className="container  bg-white min-h-screen rounded-lg flex flex-col " style={{ fontFamily: "Montserrat", minHeight: "100vh" }}>
      {/* Header Component */}
      <Header title="Edit Parent Details" />

      {/* Search Input */}
      <div className="px-4 my-2 ml-5 mb-4 ">
        <div className="relative">
          <Search className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search properties..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-100 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>
      </div>

      {/* Info Text */}
      <p className="px-4 text-gray-600 text-sm mb-3 mt-2 ml-5">
        By turning it off, tenants will be restricted from raising move-out
        requests. You can still move out tenants.
      </p>

      {/* Property List */}
      <List className="px-2 ml-4">
        {properties
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-md p-2 mb-3 ml-7"
            >
              <ListItem className="flex justify-between">
                <ListItemText
                  primary={item.name}
                  secondary={item.location}
                  primaryTypographyProps={{ className: "font-semibold text-lg" }}
                  secondaryTypographyProps={{ className: "text-gray-500 text-sm" }}
                />
                <ListItemSecondaryAction>
                  <Switch
                    checked={switchState[item.id]}
                    onChange={() => toggleSwitch(item.id)}
                    color="success"
                  />
                </ListItemSecondaryAction>
              </ListItem>
            </div>
          ))}
      </List>
    </div>
  );
};

export default MoveoutTenant;
