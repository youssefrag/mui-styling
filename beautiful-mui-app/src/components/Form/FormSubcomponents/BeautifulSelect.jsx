import { useState, useEffect, useRef } from "react";
import { Select, SelectProps } from "@mui/material";
import { minWidth } from "../ContactForm";

export const BeautifulSelect = (props) => {
  const [position, setPosition] = useState(0);
  const selectInputComponent = useRef(null);

  useEffect(() => {
    setPosition(
      selectInputComponent.current
        ? selectInputComponent.current.getBoundingClientRect().left + 20
        : 0
    );
  }, []);

  return (
    <Select
      {...props}
      id="skill-select"
      ref={selectInputComponent}
      labelId="skill-select-label"
      sx={{
        minWidth: minWidth,
        marginRight: { md: 2 },
        marginBottom: { xs: 2, md: 0 },
      }}
      multiple
      renderValue={(selected) => selected.join(", ")}
      MenuProps={{
        PaperProps: {
          sx: {
            left: `${position} !important`,
            maxHeight: 180,
          },
        },
      }}
    />
  );
};
