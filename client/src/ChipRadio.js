import React, { useState } from "react";
import { Box, Chip, Typography } from "@mui/material";

const ChipRadio = ({ setPriority }) => {
  const [selected, setSelected] = useState("Medium"); // Default selected value

  const options = ["Low", "Medium", "High"]; // Options for the radio UI

  const handleSelect = (value) => {
    setSelected(value);

    //Mapping priority levels with the appropriate values
    const priorityMap = {
      Low: 0,
      Medium: 1,
      High: 2,
    };

    setPriority(priorityMap[value]);
  };

  return (
    <Box
      sx={{
        display: "inline-block",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Box sx={{ display: "inline-block", marginRight: 2 }}>
        {options.map((option) => (
          <Chip
            key={option}
            label={option}
            onClick={() => handleSelect(option)}
            variant={selected === option ? "filled" : "outlined"}
            color={selected === option ? "primary" : "default"}
            sx={{
              cursor: "pointer",
              borderRadius: 2,
              fontSize: 16,
              padding: "10px",
              paddingY: "20px",
              marginRight: "10px",
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default ChipRadio;
