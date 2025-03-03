import React, { useState } from "react";
import Header from "./Header";
import {
  Box,
  TextField,
  Typography,
  Switch,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
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
    <div className="container mx-auto bg-white min-h-screen max-w-4xl flex flex-col p-4 font-Montserrat">
      {/* Header Component */}
      <Header title="Move-out Notice" />

      {/* Search Input */}
      <Box sx={{ padding: 2 }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Search properties..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Box>

      {/* Info Text */}
      <Typography sx={{ paddingX: 2, color: "#555", fontSize: 14, mb: 2 }}>
        By turning it off, tenants will be restricted from raising move-out requests. You can still move out tenants.
      </Typography>

      {/* Property List */}
      <List>
        {properties
          .filter((p) => p.name.toLowerCase().includes(search.toLowerCase()))
          .map((item) => (
            <ListItem key={item.id} sx={{ borderBottom: "1px solid #ddd" }}>
              <ListItemText primary={item.name} secondary={item.location} />
              <ListItemSecondaryAction>
                <Switch
                  checked={switchState[item.id]}
                  onChange={() => toggleSwitch(item.id)}
                  color="success"
                />
              </ListItemSecondaryAction>
            </ListItem>
          ))}
      </List>
    </div>
  );
};

export default MoveoutTenant;
